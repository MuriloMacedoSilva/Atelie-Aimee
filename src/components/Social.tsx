import { SocialIcon } from "react-social-icons"



export default function Social() {

    return(
        <div className="flex-col w-full flex items-center justify-center mt-37 gap-22">
            <h2 className="font-Instrument text-5xl">Siga-nos nas Redes Sociais</h2>
            <div  className="flex flex-col md:flex-row gap-10 w-full px-20 items-center justify-center">
                <SocialIcon url="https://www.whatsapp.com/" />
                <SocialIcon url="https://www.instagram.com/" />
                <SocialIcon url="https://www.tiktok.com/" />
                <SocialIcon url="https://www.youtube.com/" />
            </div>
            <a href="" target="blank" className="rounded-full bg-red-400 p-3 w-full md:w-[30%] flex items-center justify-center text-[20px] text-white font-Instrument hover:bg-red-200 transition duration-300 transform">Redes Sociais</a> 
        </div>
    )
}   