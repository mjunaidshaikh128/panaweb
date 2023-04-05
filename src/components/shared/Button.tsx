import { FC } from "react"

const Button:FC<{text:string}> = ({text}) => {
  return (
    <button className="text-white bg-teal-700 py-3 px-6 rounded-full shadow-lg font-semibold hover:scale-105 duration-300 hover:shadow-lg">{text}</button>
  )
}

export default Button