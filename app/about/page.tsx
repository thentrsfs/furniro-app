import HeaderImage from "@/components/sections/HeaderImage"
import ShopFeatures from "@/components/ui/ShopFeatures"

const AboutPage = () => {
  return (
    <div className="bg-white">
        <HeaderImage header='About'/>
        <section className="flex flex-col w-full 2xl:px-50 lg:px-20 lg:py-15 py-8 px-6 gap-8">
        <p className=" text-font-color">
            Welcome to <strong>Furniro</strong>, where timeless design meets modern living.
        We’re passionate about crafting spaces that feel like home — with furniture that’s
        both beautiful and functional.
      </p>

      <p className=" text-font-color">
        Whether you’re furnishing your first apartment, upgrading your home, or searching for
        the perfect accent piece, our curated selection offers quality and style at every level.
        From Scandinavian-inspired sofas to handcrafted wooden tables, we source products with care.
      </p>

      <p className=" text-font-color">
        At the heart of everything we do is a commitment to craftsmanship, sustainability, and
        exceptional customer service. Our mission is to help you create a home that reflects your
        personality, supports your lifestyle, and lasts for years to come.
      </p>
<div className="flex flex-col gap-4 items-center mt-6">
      <h2 className="text-2xl font-semibold text-black">What We Offer</h2>
      <ul className="list-disc pl-5 space-y-2 text-font-color">
        <li>Premium, durable furniture at fair prices</li>
        <li>Modern and minimalist design aesthetics</li>
        <li>Fast, reliable shipping and easy returns</li>
        <li>Exceptional customer support</li>
      </ul>
</div>
<div className="flex flex-col gap-4 items-center mt-6">
      <h2 className="text-2xl font-semibold text-black">Visit Us</h2>
      <p className=" text-font-color">
        We are based in Czech Republic, but we ship all over the world. Our online experience is
        crafted to make furniture shopping simple, enjoyable, and inspiring.
      </p>
</div>
<div className="flex flex-col gap-4 items-center mt-6">
      <h2 className="text-2xl font-semibold text-black">Stay Connected</h2>
      <p className=" text-font-color">
        Follow us on social media or subscribe to our newsletter for design tips, new arrivals,
        and exclusive offers.
      </p>
</div>
        </section>
        <ShopFeatures />
    </div>
  )
}

export default AboutPage