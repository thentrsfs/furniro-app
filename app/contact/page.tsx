import ContactForm from "@/components/sections/ContactForm"
import HeaderImage from "@/components/sections/HeaderImage"
import ShopFeatures from "@/components/ui/ShopFeatures"

const ContactPage = () => {
  return (
    <div className='bg-white'>
<HeaderImage header='Contact' />
<ContactForm/>
<ShopFeatures/>
    </div>
  )
}

export default ContactPage