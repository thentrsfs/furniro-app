'use client'
import { useState, useEffect } from "react"
import Image from "next/image"
import { CheckoutFormState } from "@/types/types"
import { useCartStore } from "@/stores/useCartStore"
import GoldenButton from "../ui/GoldenButton"

const CheckoutForm = () => {
    const [formData, setFormData] = useState<CheckoutFormState>({
        firstName: '',
        lastName: '',
        email: '',
        companyName: '',
        country: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
    })
       const countries = [
        'Czech Republic',
        'United States',
        'Canada',
        'United Kingdom',
        'Germany',
        'France',
        'Italy',
        'Spain',
        'Brazil',
        'Mexico',
        'Argentina',
        'Chile',
        'Colombia',
        'Peru',
        'Venezuela',
        'Poland',
    ]
    const [selected, setSelected] = useState('cash')
    const { items, subtotal, total, shipping, tax, formatPrice } = useCartStore();
    const [clientSubtotal, setClientSubtotal] = useState<number>(0);
    const [clientTotal, setClientTotal] = useState<number>(0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`Form submitted:\nName: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}${formData.companyName && `\nCompany: ${formData.companyName}`}\nCountry: ${formData.country}\nAddress: ${formData.address}\nCity: ${formData.city}\nState: ${formData.state}\nZip: ${formData.zip}\nPhone: ${formData.phone}`);
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            companyName: '',
            country: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            phone: '',
        });
    };

    useEffect(() => {
        setClientSubtotal(subtotal());
        setClientTotal(total());
    }, [items, subtotal, total]);

    const paymentMethods = [
            { id: 'cash', label: 'Cash On Delivery', value: 'cash', description: 'Pay with cash upon delivery. The speedier we get to you, the lower the price will be.' },
            { id: 'bank-transfer', label: 'Direct Bank Transfer', value: 'bank-transfer', description: 'Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.' },
        ]
  return (    
      <form onSubmit={handleSubmit} className="grid lg:grid-cols-2 2xl:gap-60 xl:gap-40 lg:gap-24 gap-12 w-full 2xl:px-50 lg:px-20 lg:py-15 px-6 py-8">
<div className="flex flex-col gap-6 text-black">
    <h2 className="font-semibold text-3xl">Billing details</h2>
    <div className="flex items-center gap-4">
        <div className="flex flex-col gap-2 w-full">
        <label htmlFor="firstName">First Name</label>
        <input name="firstName" value={formData.firstName} onChange={handleChange} type="text" id="firstName" placeholder="e.g. John" className="border rounded-sm border-gray-light px-3 py-2 w-full" required />
        </div>
        <div className="flex flex-col gap-2 w-full">
        <label htmlFor="lastName">Last Name</label>
        <input name="lastName" value={formData.lastName} onChange={handleChange} type="text" id="lastName" placeholder="e.g. Doe" className="border rounded-sm border-gray-light px-3 py-2 w-full" required />
        </div>
    </div>
    <div className="flex flex-col gap-2 w-full">
        <label htmlFor="email">Email Address</label>
        <input name="email" value={formData.email} onChange={handleChange} type="email" id="email" placeholder="e.g. 7o5mZ@example.com" className="border rounded-sm border-gray-light px-3 py-2 w-full" required />
    </div>
    <div className="flex flex-col gap-2 w-full">
        <label>
            Company Name (Optional)
        </label>
        <input name="companyName" value={formData.companyName} onChange={handleChange} type="text" placeholder="e.g. Google" className="border rounded-sm border-gray-light px-3 py-2 w-full" />
    </div>
    <div className="flex flex-col gap-2 w-full">
        <label htmlFor="country">
            Country / Region
        </label>
        <div className="relative"> 
        <select
  name="country"
  value={formData.country}
  id="country"
  onChange={(e) =>
    setFormData((prev) => ({
      ...prev,
      country: e.target.value,
    }))
  }
  className="border rounded-sm border-gray-light px-3 py-2 w-full appearance-none"
>
  <option value="" disabled>Select a country</option>
  {countries.map((country) => (
    <option key={country} value={country}>
      {country}
    </option>
  ))}
</select>
  <Image src="/icons/chevron-down.svg" alt="chevron down" width={20} height={20} className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
  </div>
    </div>
    <div className="flex flex-col gap-2 w-full">
        <label htmlFor="address">Street Address</label>
        <input name="address" value={formData.address} onChange={handleChange} type="text" id="address" placeholder="e.g. 1600 Amphitheatre Parkway" className="border rounded-sm border-gray-light px-3 py-2 w-full" required />
    </div>
    <div className="flex flex-col gap-2 w-full">
        <label htmlFor="city">
           City
        </label>
        <input name="city" value={formData.city} onChange={handleChange} type="text" id="city" placeholder="e.g. Mountain View" className="border rounded-sm border-gray-light px-3 py-2 w-full" required />
    </div>
    <div className="flex flex-col gap-2 w-full">
        <label htmlFor="province">
            Province / State
        </label>
        <input name="state" value={formData.state} onChange={handleChange} type="text" id="province" placeholder="e.g. California" className="border rounded-sm border-gray-light px-3 py-2 w-full" required />
    </div>
    <div className="flex flex-col gap-2 w-full">
        <label htmlFor="zip">Zip / Postal Code</label>
        <input name="zip" value={formData.zip} onChange={handleChange} type="text" id="zip" placeholder="e.g. 94043" className="border rounded-sm border-gray-light px-3 py-2 w-full" required />
    </div>
    <div className="flex flex-col gap-2 w-full">
        <label htmlFor="phone">Phone Number</label>
        <input name="phone" value={formData.phone} onChange={handleChange} type="tel" id="phone" placeholder="e.g. +1 234 567 8901" className="border rounded-sm border-gray-light px-3 py-2 w-full" required />
    </div>
</div>
<div className="flex flex-col gap-6 text-black">
<div className="flex justify-between font-semibold text-xl">
    <h3>Product</h3>
    <h3>Subtotal</h3>
</div>

        {items.map((item) => (
            <div key={item.id} className="flex justify-between">
                <div className="flex items-center gap-3">
                <p className="text-gray-light">{item.name}</p>
                <p>x {item.quantity}</p>
                </div>
                <p>${formatPrice(item.price)}</p>
            </div>
        ))}

<div className="flex justify-between">
    <p className="font-medium">Subtotal</p>
    <p>${formatPrice(clientSubtotal)}</p>
</div>
<div className="flex justify-between">
    <p className="font-medium">Shipping</p>
    <p>{formatPrice(shipping)}</p>
</div>
<div className="flex justify-between">
    <p className="font-medium">Tax</p>
    <p>{formatPrice(tax)}</p>
</div>
<div className="flex justify-between">
    <p className="font-medium">Total</p>
    <p className="font-semibold text-golden text-xl">{formatPrice(clientTotal)}</p>
</div>
<div className="h-[1px] w-full bg-gray-light"/>
<div className="flex flex-col gap-4">
    {paymentMethods.map((method) => (
        <div key={method.id} className="flex items-start gap-3">
      <label>
    <input type="radio" name="paymentMethod" value={method.value} checked={selected === method.value}
    onChange={() => setSelected(method.value)} className="sr-only peer" />
    <div className="w-5 h-5 rounded-full border border-gray-light mt-0.5 peer-checked:border-golden peer-checked:ring peer-checked:ring-golden flex items-center justify-center">
        {selected === method.value && <div className="w-2.5 h-2.5 bg-golden rounded-full"></div>}
    </div>
      </label>
      <div>
       <span className="text-font-color">{method.label}</span>
    <p className={`${ selected === method.value && 'opacity-100'} opacity-0 transition-opacity duration-300 text-gray-light text-sm`}>{method.description}</p>
    </div>
      </div>
    ))}
    <p className="text-xs text-black">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="font-semibold text-black">privacy policy</span>.</p>
</div>
<GoldenButton className="py-2 px-10">Place order</GoldenButton>
</div>
            </form>
  )
}

export default CheckoutForm