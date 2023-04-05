"use client"
import Wrapper from "@/components/shared/Wrapper"
import QuarterBox from "@/components/shared/QuarterBox"
import Image from "next/image"
import blockchainimg from "@/assets/images/web3blockchain.svg"
import aiimg from "@/assets/images/ai.svg"
import cloudimg from "@/assets/images/cloud.svg"
import genomeimg from "@/assets/images/genomics.svg"
import ambientimg from "@/assets/images/ambient.svg"
import networkimg from "@/assets/images/network.svg"
import { useState } from "react"

export const programsData = [
    {
        slug: "wmd",
        header: "Web 3.0 (Blockchain) and Metaverse Specialization",
        description: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
        image: blockchainimg,
        quarters: [
            {
                header: "Quarter IV",
                description: "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
                number: 4
            },
            {
                header: "Quarter V",
                description: "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
                number: 5
            }
        ]
    },
    {
        slug: "ai",
        header: "Artificial Intelligence (AI) and Deep Learning Specialization",
        description: "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
        image: aiimg,
        quarters: [
            {
                header: "Quarter IV",
                description: "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
                number: 4
            },
            {
                header: "Quarter V",
                description: "AI-361: Deep Learning and MLOps",
                number: 5
            }
        ]
    },
    {
        slug: "cnc",
        header: "Cloud-Native Computing Specialization",
        description: "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
        image: cloudimg,
        quarters: [
            {
                header: "Quarter IV",
                description: "CN-351: Certified Kubernetes Application Developer (CKAD)",
                number: 4
            },
            {
                header: "Quarter V",
                description: "CN-361: Developing Multi-Cloud Apps using CDK for Terraform",
                number: 5
            }
        ]
    },
    {
        slug: "ac",
        header: "Ambient Computing and IoT Specialization",
        description: "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
        image: ambientimg,
        quarters: [
            {
                header: "Quarter IV",
                description: "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
                number: 4
            },
            {
                header: "Quarter V",
                description: "AC-361: Embedded Programming using C and Rust",
                number: 5
            }
        ]
    },
    {
        slug: "gb",
        header: "Genomics and Bioinformatics Specialization",
        description: "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
        image: genomeimg,
        quarters: [
            {
                header: "Quarter IV",
                description: "Bio-351: Python for Biologists",
                number: 4
            },
            {
                header: "Quarter V",
                description: "Bio-361: Bioinformatics with Python",
                number: 5
            }
        ]
    },
    {
        slug: "npa",
        header: "Network Programmability and Automation Specialization",
        description: "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
        image: networkimg,
        quarters: [
            {
                header: "Quarter IV",
                description: "NPA-351: CCNA 200-301 Certification",
                number: 4
            },
            {
                header: "Quarter V",
                description: "NPA-361: Network Programmability and Automation",
                number: 5
            }
        ]
    },
]

const SpecializedTracks = () => {
    const [selectedItem, setSelectedItem] = useState("wmd");
    const selectedItemData = programsData.find((item) => (item.slug === selectedItem));
    return (
        <section className="mt-16 lg:mt-28">
            <Wrapper>
                <div className="max-w-screen-md">
                    <h2 className="mt-3 text-4xl font-bold md:text-5xl whitespace-pre-line">Specialized Tracks:</h2>
                    <p className="mt-5 text-xl text-slate-600">After completing the first three quarters the participants will select one or more specializations consisting of two courses each: </p>
                </div>
                {/* Main Div */}
                <div className="flex flex-col-reverse lg:flex-row gap-y-6 gap-x-6 mt-10 items-start">
                    {/* Left Section */}
                    <div className="py-10 border-[#00616C4D] border-2 rounded-lg basis-8/12 sticky top-28">
                        <div className="px-10">
                            <h4 className="text-teal-800 font-semibold text-lg">Specialized Program</h4>
                            <h2 className="mt-1 text-xl font-semibold md:text-2xl">{selectedItemData?.header}</h2>
                            <p className="mt-4 text-lg text-slate-600 max-w-screen-md">{selectedItemData?.description}</p>
                            <button className="text-teal-700 text-lg underline flex gap-x-2 items-end">Learn More<svg className="mb-1" width="8" height="15" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994" stroke="#00616C" strokeWidth="2" />
                            </svg>
                            </button>
                        </div>
                        <div className="flex flex-col md:flex-row max-w-screen-sm">
                            {selectedItemData?.quarters.map((quarter,i) => {
                                return (
                                <QuarterBox
                                    header={quarter.header}
                                    description={quarter.description}
                                    number={quarter.number}
                                    haveBorder={false}
                                    key={i}/>
                            )})}
                        </div>
                    </div>
                    {/* Right Section */}
                    <div className="basis-4/12">
                        <div className="mt-5 lg:mt-0 flex flex-col gap-y-6">
                            {programsData.map((program, i) => {
                                return (
                                    <div onClick={() => setSelectedItem(program.slug)} className="flex gap-x-3 pb-4 border-b-2 cursor-pointer" key={i}>
                                        <Image src={program.image} alt="" className="rounded-md" />
                                        <div>
                                            <h4 className="text-teal-800 font-semibold text-md">Specialized Program</h4>
                                            <h3 className="mt-1 text-lg font-semibold md:text-xl">{program.header}</h3>
                                        </div>
                                    </div>)
                            })
                            }
                        </div>

                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default SpecializedTracks
