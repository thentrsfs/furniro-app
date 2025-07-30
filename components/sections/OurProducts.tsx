import Products from "../ui/Products"
const OurProducts = () => {
  return (
    <section className="flex flex-col items-center w-full 2xl:px-50 lg:px-20 gap-8">
               <h3 className="text-[32px] font-bold text-font-color">Our Products</h3>
          <Products />
            </section>
  )
}

export default OurProducts