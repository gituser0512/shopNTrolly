
export default function ShopCTA() {
    return (
      <section className="w-full bg-gray-100 py-12 md:py-16 lg:py-20 dark:bg-gray-800">
        <div className="container grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">
              <PackageIcon className="h-6 w-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-medium">Free Shipping</h3>
              <p className="text-gray-500 dark:text-gray-400">You will love at great low prices</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">
              <CreditCardIcon className="h-6 w-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-medium">Flexible Payment</h3>
              <p className="text-gray-500 dark:text-gray-400">Pay with Multiple Credit Cards</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">
              <PackageIcon className="h-6 w-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-medium">14 Day Return</h3>
              <p className="text-gray-500 dark:text-gray-400">Within 30 days for an exchange</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">
              <SettingsIcon className="h-6 w-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-medium">Premium Support</h3>
              <p className="text-gray-500 dark:text-gray-400">Outstanding premium support</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  function CreditCardIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <line x1="2" x2="22" y1="10" y2="10" />
      </svg>
    )
  }
  
  
  function PackageIcon(props : any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m7.5 4.27 9 5.15" />
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5" />
        <path d="M12 22V12" />
      </svg>
    )
  }
  
  
  function SettingsIcon(props :any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  }