import { div } from "framer-motion/client";
import Image from "next/image";

export default function Header() { 
    return (
        <div className="w-screen h-[100px] bg-orange-200 flex flex-row items-center px-10">
            <Image src="/oxxo.svg" alt="Ocso logo" width={100} height={0} draggable={false}/>
        </div>
    )
}