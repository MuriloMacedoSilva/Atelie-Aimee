import cabidero_neutro from "../assets/cabidero_neutro.jpg"
import cabidero_cel from "../assets/cabidero_cel.jpg"

export default function Introduction() {
    return (
        <section className=" w-full h-screen flex items-center z-1 justify-center overflow-hidden relative">
            <div className="bg-black/50 w-full h-full flex items-center z-11 justify-center">
            <h1 className="font-Instrument text-amber-100 md:text-7xl text-4xl">A Moda de Ponto a Ponto. .</h1>
            </div>
            <img src={cabidero_neutro} alt="imagem decorativa cabideiro" className="h-full w-full z-10 absolute hidden md:block" />
            <img src={cabidero_cel} alt="imagem decorativa cabideiro" className="h-full w-full z-10 absolute md:hidden" />
        </section>
    )
}