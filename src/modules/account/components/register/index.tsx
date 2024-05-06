"use client"

import { useFormState } from "react-dom"

import { signUp } from "@modules/account/actions"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import Input from "@modules/common/components/input"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"
import IndianFlag from "../../../../../public/india.svg"
import { Label } from "@medusajs/ui"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Register = ({ setCurrentView }: Props) => {
  const [message, formAction] = useFormState(signUp, null)

  return (
    <div
      className="max-w-sm flex flex-col items-center"
      data-testid="register-page"
    >
      <h1 className="text-large-semi uppercase mb-6">
        Become a Shop N Trolly Member
      </h1>
      <p className="text-center text-base-regular text-ui-fg-base mb-4">
        Create your Shop N Trolly Member profile, and get access to an enhanced
        shopping experience.
      </p>
      <form className="w-full flex flex-col" action={formAction}>
        <div className="flex flex-col w-full gap-y-2">
          <div className="flex gap-2 items-center">
            <Input
              label="First name"
              name="first_name"
              required
              autoComplete="given-name"
              data-testid="first-name-input"
            />
            <Input
              label="Last name"
              name="last_name"
              required
              autoComplete="family-name"
              data-testid="last-name-input"
            />
          </div>
          <div className="flex gap-4 items-center">
            <Input
              label="City"
              name="city"
              required
              type="text"
              autoComplete="city"
              data-testid="city-input"
            />
            <Input
              label="Pincode"
              name="pincode"
              required
              type="number"
              autoComplete="pincode"
              data-testid="pincode-input"
            />
          </div>
          <div className="flex gap-2 items-center">
            <div className="flex gap-1 items-center w-fit">
              <Image
                src={IndianFlag}
                width={40}
                height={40}
                alt="Indian Flag"
                quality={100}
                className="rounded-sm aspect-auto"
              />
              <Label htmlFor="phone" className="text-base">
                {" "}
                +91{" "}
              </Label>
            </div>
            <div className="flex-grow">
              <Input
                label="Phone"
                name="phone"
                required
                type="tel"
                pattern="[0-9]{10}"
                maxLength={10}
                minLength={10}
                autoComplete="tel"
                data-testid="phone-input"
                title="Please enter a valid 10-digit phone number"
              />
            </div>
          </div>
          <Input
            label="Email"
            name="email"
            required
            type="email"
            autoComplete="email"
            data-testid="email-input"
          />

          <Input
            label="Password"
            name="password"
            required
            type="password"
            autoComplete="new-password"
            data-testid="password-input"
          />
        </div>
        <ErrorMessage error={message} data-testid="register-error" />
        <span className="text-center text-ui-fg-base text-small-regular mt-6">
          By creating an account, you agree to Shop N Trolly&apos;s <br />
          <LocalizedClientLink href="/privacy-policy" className="underline">
            Privacy Policy
          </LocalizedClientLink>{" "}
          and{" "}
          <LocalizedClientLink href="/terms-of-service" className="underline">
            Terms of Use
          </LocalizedClientLink>
          .
        </span>
        <SubmitButton className="w-full mt-6" data-testid="register-button">
          Join
        </SubmitButton>
      </form>
      <span className="text-center text-base md:text-xl mt-6">
        Already a member?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="text-base md:text-xl border-b border-current transition-all duration-300 group hover:scale-110"
        >
          Sign in
        </button>
        .
      </span>
    </div>
  )
}

export default Register
