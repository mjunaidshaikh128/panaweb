import Wrapper from "@/components/shared/Wrapper"
import Button from "@/components/shared/Button"
import PIAICLogo from "@/assets/images/PIAIC_Logo.png"
import Image from "next/image"
import QuarterBox from "@/components/shared/QuarterBox"

export const CoreTracks = () => {
    const coreTrackData = [
        {
            header: "Quarter I",
            description: "CS-101: Object-Oriented Programming using TypeScript",
            number: 1
        },
        {
            header: "Quarter II",
            description: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
            number: 2
        },
        {
            header: "Quarter III",
            description: "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
            number: 3
        }
    ]
    return (
        <section className="mt-16 lg:mt-28 relative">
            <Wrapper>
                <div className="max-w-screen-md">
                    <h4 className="text-teal-800 font-semibold text-lg">Program of Studies</h4>
                    <p className="mt-3 text-4xl font-bold md:text-5xl whitespace-pre-line">Core Courses {"\n"}(Common in All Specializations):</p>
                    <p className="mt-5 text-xl text-slate-600">Every participant of the program will start by completing the following three core courses:</p>
                    <div className="mt-4">
                        <Button text="Learn More" />
                    </div>
                </div>


                <div className=" mt-6 flex flex-col gap-y-3 md:flex-row gap-x-3">
                {
                    coreTrackData.map((item) => {
                        return (
                            <QuarterBox header={item.header} description={item.description} number={item.number} />
                        )
                    })
                }
                </div>
                <Image src={PIAICLogo} alt="PIAIC Logo" height={600} className="absolute top-1/2 -z-40 opacity-10 left-0 right-0 mx-auto" />
            </Wrapper>
        </section>
    )
}

export default CoreTracks