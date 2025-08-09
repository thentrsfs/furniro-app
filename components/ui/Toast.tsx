
const Toast = ({message} : {message: string}) => {
  return (
    <div className="absolute lg:w-70 lg:h-14 flex items-center justify-center w-[80%] border border-gray-light lg:top-1/2 bottom-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-light text-black py-3 px-4 text-center" >
        {message}
    </div>
  )
}

export default Toast