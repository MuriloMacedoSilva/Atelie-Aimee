import logo from "../assets/logo-atelie-rosa.jpg"

export default function Header() {
    return (
        <header className="h-32 flex items-center justify-around w-full relative">
            <div className="overflow-hidden rounded-full w-27.5 left-0 absolute">
                <img src={logo} alt="Logo" className="rounded-full w-full" />
            </div>
            <div className=" md:flex gap-10 items-center right-0 absolute hidden">
                <ul className="flex items-center gap-10 font-Instrument leading-2.5 text-[18px]">
                    <li><a href="">Serviços</a></li>
                    <li><a href="">Shop</a></li>
                    <li><a href="">Quem Somos</a></li>
                    <li><a href="">Contato</a></li>
                </ul>
                <a href="" className="rounded-full bg-red-400 p-4 w-40 flex items-center justify-center text-[17px] text-white font-Instrument hover:bg-red-200 transition duration-300 transform">Agende Agora</a>
            </div>
        </header>
    )
}