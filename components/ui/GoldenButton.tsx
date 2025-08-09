
const GoldenButton = ({className, children, onClick} : {className?: string, children: string, onClick?: () => void}) => {
  return (
    <button onClick={onClick} className={`${className} bg-golden cursor-pointer transition-all duration-300 text-white hover:bg-[hsl(42,59%,50%)]`}>{children}</button>
  )
}

export default GoldenButton