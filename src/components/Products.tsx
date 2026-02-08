import type { products } from "../types/productsType"
import product1 from "../assets/product1.webp"
import product2 from "../assets/product2.webp"
import product3 from "../assets/product3.webp"

export default function Products() {

    const products: products = [
        {
            id: 1,
            image: product1,
            name: "Vestido Midi Regata Assimétrico Transpassado Folhagem Um Ombro Torcido Lateral Franzida",
            price: 184.99,
            link: "https://www.lacleo.com.br/prod/1653/vestido-midi-regata-assimetrico-transpassado-folhagem-um-ombro-torcido-lateral-franzida?srsltid=AfmBOorGLF055XSjViWevfbOfpKA2bHSHYzCHmli40eVel2pZ8_O841Gr6E#v1469"
        },
        {
            id: 2,
            image: product2,
            name: "Blusa manga dupla preguinha",
            price: 99.99,
            link: "https://www.lacleo.com.br/prod/427/blusa-manga-dupla-preguinha#v1286"
        },
        {
            id: 3,
            image: product3,
            name: "Regata Gola Dobrada",
            price: 104.99,
            link: "https://www.lacleo.com.br/prod/516/regata-gola-dobrada#v1192"
        }
    ]


    return (
        <div className=" w-full mt-35 ">
            <h2 className="font-Instrument text-5xl text-black block text-center w-full mb-10">Produtos em Destaque</h2>
            <div className="flex flex-col md:flex-row w-full justify-around gap-2.5 items-center">
                {   products.map((productItem) => (
                        <div key={productItem.id} className="md:w-[28%] h-132.5 2xl:h-225 flex flex-col items-center gap-3">
                            <div className=" rounded-full h-full md:w-full w-[80%] flex items-center justify-center overflow-hidden">
                                <img src={productItem.image} alt={productItem.name} className="w-full " />
                            </div>
                            <h3 className="text-justify w-full text-[18px] font-Instrument not-italic font-semibold h-15">
                                {productItem.name}
                            </h3>
                            <h3 className="font-Instrument text-[23px] w-full text-gray-900">
                                R${productItem.price}
                            </h3>
                            <a href={productItem.link} target="blank" className="rounded-full bg-red-400 p-4 w-full flex items-center justify-center text-[18px] text-white font-Instrument hover:bg-red-200 transition duration-300 transform">Ver Produto</a>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}