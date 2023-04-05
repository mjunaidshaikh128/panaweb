import { FC } from "react"

interface IProps {
    header: string,
    description: string,
    number: number,
    haveBorder?: boolean
}

const QuarterBox: FC<IProps> = ({ header, description, number, haveBorder = true }) => {
    return (
        <div className={`flex flex-col md:gap-y-5 rounded-md p-10 flex-1 relative ${haveBorder && "border-gray-500" && "border-2"}`}>
            <h2 className="text-base font-semibold">{header}</h2>
            <p className="text-lg text-slate-600">{description}</p>
            <div className="absolute top-0 md:top-10 right-10 text-9xl font-bold -z-10 text-gray-300">{number}</div>
        </div>
    )
}

export default QuarterBox