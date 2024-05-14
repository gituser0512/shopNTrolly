"use client"

import React, { createContext, useContext } from "react"

interface ModalContext {
  close: () => void
}

const CheckoutContext = createContext<any | null>(null)

interface CheckoutProviderProps {
  children?: React.ReactNode
  close: () => void
}

export const ModalProvider = ({ children, close }: CheckoutProviderProps) => {
  return (
    <CheckoutContext.Provider
      value={{
        close,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}

export const useStartCheckout = () => {
  const onPaymentCompleted = useContext(CheckoutContext)
  if (onPaymentCompleted === null) {
    throw new Error("useModal must be used within a ModalProvider")
  }
  return onPaymentCompleted 

}
