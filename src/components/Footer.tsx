import logo_rosa from "../assets/logo-atelie-rosa.jpg"

export default function Footer() {
    return(
        <footer className="flex md:flex-row flex-col w-full items-center justify-center md:justify-between h-60 overflow-hidden mt-30">
             <div className="h-[60%] rounded-full flex items-center justify-center overflow-hidden  ">
                <img src={logo_rosa} alt="Logo" className="h-full rounded-full" />
             </div>

             <div className="md:w-[40%] w-full h-full p-5 flex flex-col md:flex-row gap-5">
                <div className="gap-2 flex flex-col">
                    <h2 className="font-Instrument text-4xl">Localização</h2>
                    <p className="text-[15px]">Lorem, ipsum dolomus adipisci, quidem itaque! Labore.</p>
                </div>
                <div className="gap-2 flex flex-col">
                    <h2 className="font-Instrument text-4xl">Contato</h2>
                    <p className="text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tenetur consequuntur repetur.</p>
                </div>
             </div>
        </footer>
    )
}