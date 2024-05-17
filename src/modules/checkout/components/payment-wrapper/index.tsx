"use client"

import { Cart, PaymentSession } from "@medusajs/medusa"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import StripeWrapper from "./stripe-wrapper"
import { PayPalScriptProvider } from "@paypal/react-paypal-js"
import { createContext } from "react"
import RazorpayWrapper from "./razorpay-wrapper"


type WrapperProps = {
  cart: Omit<Cart, "refundable_amount" | "refunded_total">
  children: React.ReactNode
}

export const StripeContext = createContext(false)

const stripeKey = process.env.NEXT_PUBLIC_STRIPE_KEY
const stripePromise = stripeKey ? loadStripe(stripeKey) : null
const razorpayKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY;

const paypalClientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID

const Wrapper: React.FC<WrapperProps> = ({ cart, children }) => {
  const paymentSession = cart.payment_session as PaymentSession

  const isStripe = paymentSession?.provider_id?.includes("stripe")
  const isRazorpay = paymentSession?.provider_id?.includes("razorpay");

  if (isStripe && paymentSession && stripePromise) {
    return (
      <StripeContext.Provider value={true}>
        <StripeWrapper
          paymentSession={paymentSession}
          stripeKey={stripeKey}
          stripePromise={stripePromise}
        >
          {children}
        </StripeWrapper>
      </StripeContext.Provider>
    )
  }


  if (isRazorpay && paymentSession && razorpayKey) {
    return (
      <RazorpayWrapper
        paymentSession={paymentSession}
        razorpayKey={razorpayKey}
      >
        {children}
      </RazorpayWrapper>
    );
  }


  if (
    paymentSession?.provider_id === "paypal" &&
    paypalClientId !== undefined &&
    cart
  ) {
    return (
      <PayPalScriptProvider
        options={{
          "client-id": "test",
          currency: cart?.region.currency_code.toUpperCase(),
          intent: "authorize",
          components: "buttons",
        }}
      >
        {children}
      </PayPalScriptProvider>
    )
  }

  return <div>{children}</div>
}

export default Wrapper
