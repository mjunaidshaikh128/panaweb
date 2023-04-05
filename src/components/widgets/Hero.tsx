import Image from "next/image"
import Wrapper from "@/components/shared/Wrapper"
import Heroimg from "@/assets/images/heroimg.png"
import Button from "@/components/shared/Button"

const Hero = () => {
    return (
        <section>
            <Wrapper>
                <div className="flex flex-col md:flex-row items-center space-x-2 mt-4">
                    <div className="flex-1">
                        <h4 className="text-teal-800 font-semibold text-lg">Presidential Initiative for Artificial Intellegince and Computing (PIAIC) </h4>
                        <h1 className="text-center md:text-left text-5xl font-bold md:text-6xl">Certified Web 3.0 and Metaverse Developer</h1>
                        <p className="mt-6 text-xl text-slate-600">A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet</p>
                        <p className="mt-2 text-xl text-slate-600">Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies</p>
                        <div className="mt-4 text-center sm:text-left">
                            <Button text="Enroll Now" />
                        </div>
                    </div>
                    <div className="flex-1">
                        <Image src={Heroimg} alt="Hero Poster" className="object-cover rounded-lg mt-4" />
                    </div>

                </div>
            </Wrapper>
        </section>
    )
}

export default Hero

