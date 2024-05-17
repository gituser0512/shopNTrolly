"use client";
import React from "react";
import  loadRazorpayScript  from "react-razorpay";
import { PaymentSession } from "@medusajs/medusa"

type RazorpayWrapperProps = {
  paymentSession: PaymentSession;
  razorpayKey?: string;
  children: React.ReactNode;
};

const RazorpayWrapper: React.FC<RazorpayWrapperProps> = ({
  paymentSession,
  razorpayKey,
  children,
}) => {
  const [razorpayInstance, setRazorpayInstance] = React.useState<any>(null);

  React.useEffect(() => {
    if (!razorpayKey) {
      throw new Error(
        "Razorpay key is missing. Set NEXT_PUBLIC_RAZORPAY_KEY environment variable."
      );
    }

    if (!paymentSession?.data?.client_secret) {
      throw new Error("Razorpay client secret is missing. Cannot initialize Razorpay.");
    }

    const loadRazorpay = async () => {
      const instance = loadRazorpayScript();
      setRazorpayInstance(instance);
    };

    loadRazorpay();
  }, [razorpayKey, paymentSession]);

  if (!razorpayInstance) {
    return <div>Loading Razorpay...</div>;
  }

  return <>{children}</>;
};

export default RazorpayWrapper