import { useStartCheckout } from "@lib/context/checkout-context"
import { PaymentSession } from "@medusajs/medusa"
import { Button } from "@medusajs/ui"
import Spinner from "@modules/common/icons/spinner"
import { useCart, useUpdatePaymentSession } from "medusa-react"
import { useCallback, useEffect, useState } from "react"
import useRazorpay, { RazorpayOptions } from "react-razorpay"

export const RazorpayPaymentButton = ({
    session,
    notReady,
  }: {
    session: PaymentSession
    notReady: boolean
  }) => {
    const [disabled, setDisabled] = useState(false)
    const [submitting, setSubmitting] = useState(false)
    const [errorMessage, setErrorMessage] = useState<string | undefined>(
      undefined
    )
  
    const { cart } = useCart()
    const { onPaymentCompleted } = useStartCheckout()
    
  
    const [Razorpay, isLoaded] = useRazorpay();
    
    
    useEffect(() => {
      if (!Razorpay) {
        setDisabled(true)
      } else {
        setDisabled(false)
      }
    }, [Razorpay])
  
    
        
    
        
  const handlePayment = useCallback(() => {
  
  
    if (!Razorpay || !cart) {
      return
      }
  
    if(cart) {
        const amountToBePaid  = cart.total!
          let options:RazorpayOptions = {
              "key": process.env.NEXT_PUBLIC_RAZORPAY_KEY!,
              "amount": amountToBePaid.toString(), // 2000 paise = INR 20, amount in paisa
              "name": process.env.NEXT_PUBLIC_SHOP_NAME!,
              "description": process.env.NEXT_PUBLIC_SHOP_DESCRIPTION,
              "order_id":session.data.id as string,
              "currency":(session.data.currency as string).toUpperCase(),
              modal: {
                backdropclose:true,
                escape: true,
                handleback: true,
                confirm_close: true,
                ondismiss: () => {
                    setSubmitting(false)
                },
                animation: true,
            },
              handler:(args)=>{
            
                onPaymentCompleted()
              },
              "prefill":{
                  "name":cart.billing_address.first_name + " "+ cart.billing_address.last_name,
                  "email":cart.email,
                  "contact":cart.billing_address.phone!
              },
              "notes": {
                "address": cart.billing_address,
                "order_notes":session.data.notes
              },
              callback_url:`${process.env.MEDUSA_BACKEND_URL}/hook/razorpay`,
              "theme": {
                "color":  process.env.NEXT_PUBLIC_SHOP_COLOUR ?? "00000"
              }
             }; 
            let rzp = new Razorpay(options);
            rzp.on("payment.failed", function (response:any) {
                setErrorMessage(JSON.stringify(response.error))
            })
            rzp.on("payment.authorized", function (response:any) {
               
            })
            rzp.on("payment.captured", function (response:any) {
                
             }
            )
            rzp.open();
    }
    },[Razorpay, cart, onPaymentCompleted, session.data.currency, session.data.id, session.data.notes]);

    useEffect(() => {
        if (isLoaded) {
        //  handlePayment();
        }
      }, [isLoaded, handlePayment])
    return (
      <>
        <Button
          disabled={submitting || disabled || notReady}
          onClick={handlePayment}
        >
          {submitting ? <Spinner /> : "Checkout"}
        </Button>
        {errorMessage && (
          <div className="text-red-500 text-small-regular mt-2">
            {errorMessage}
          </div>
        )}
      </>
    )
  }