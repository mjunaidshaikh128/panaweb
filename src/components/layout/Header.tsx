import Image from "next/image"
import Link from "next/link"
import Wrapper from "@/components/shared/Wrapper"
import Logo from "@/assets/images/logo.png"

const Header = () => {
    return (
        <header className="sticky top-0 z-10 bg-white ">
            <Wrapper>
                <div className="flex justify-between py-5 items-center">
                    <Image className="self-center" src={Logo} alt="Panaverse Dao" width="100" height="50" />
                    <ul className="flex items-center font-semibold md:flex-row gap-x-2">
                        <li><Link href={"/"}>Home</Link></li>
                        <li><Link href={"/courses"}>Courses</Link></li>
                    </ul>
                </div>
            </Wrapper>
        </header>
    )
}

export default Header