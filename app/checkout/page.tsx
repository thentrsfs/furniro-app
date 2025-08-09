import HeaderImage from "@/components/sections/HeaderImage";
import CheckoutForm from "@/components/sections/CheckoutForm";

const CheckoutPage = () => {
  return (
    <div className="bg-white">
          <HeaderImage header='Checkout' from='Cart'/>
          <CheckoutForm />
    </div>
  )
}

export default CheckoutPage