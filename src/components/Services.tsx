import type { services } from "../types/servicesType"
import service1 from "../assets/service1.jpg"
import service2 from "../assets/service2.jpg"
import service3 from "../assets/service3.jpg"
import service4 from "../assets/service4.jpg"

export default function Services() {


    const services : services = [
        {
            id: 1,
            image: service1,
            name: "Costura sob Medida",
            description: "Criação de peças exclusivas desenvolvidas especialmente para você, com caimento perfeito"
        },
        {
            id: 2,
            image: service2,
            name: "Customização",
            description: "Dê nova vida às suas roupas com customização criativa e exclusiva"
        },
        {
            id: 3,
            image: service3,
            name: "Consultoria de Estilo",
            description: "Orientação sobre tecidos, modelos e cores ideais para você"
        },
        {
            id: 4,
            image: service4,
            name: "Confecção de Peças",
            description: "Confecção de roupas para atacado e varejo"
        }
    ]


    return (
        <div className="w-full flex flex-col gap-14 mt-60">
            <h3 className="font-Instrument text-7xl">Nossos Serviços</h3>
            <div className="flex flex-col md:flex-row w-full md:gap-2 gap-10">
                { services.map((serviceItem) => (
                    <div key={serviceItem.id} className="md:w-[25%] w-full  gap-4 flex flex-col items-center justify-center">
                        <div className="w-full 2xl:h-170 md:h-90 h-140 flex relative overflow-hidden">
                            <img src={serviceItem.image} alt={serviceItem.name} className="w-full absolute" />
                        </div>
                        <div className="gap-5 flex flex-col w-full">
                            <h4 className="font-Instrument text-2xl w-full text-start">{serviceItem.name}</h4>
                            <p className="font-Instrument text-lg w-full h-15">{serviceItem.description}</p>
                            <a href="" target="blank" className="rounded-full bg-red-400 p-3 w-[90%] flex items-center justify-center text-[20px] text-white font-Instrument hover:bg-red-200 transition duration-300 transform">Agendar</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}