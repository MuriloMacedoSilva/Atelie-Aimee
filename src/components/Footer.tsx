import logo_rosa from "../assets/logo-atelie-rosa.jpg"

export default function Footer() {
    return(
        <footer className="flex flex-row items-center justify-between h-60 overflow-hidden mt-30">
             <div className="h-[60%] rounded-full flex items-center justify-center overflow-hidden  ">
                <img src={logo_rosa} alt="Logo" className="h-full rounded-full" />
             </div>

             <div className="w-[40%] h-full p-5 flex flex-row gap-5">
                <div className="">
                    <h2>Localização</h2>
                    <p>Lorem, ipsum dolomus adipisci, quidem itaque! Labore.</p>
                </div>
                <div className="">
                    <h2>Contato</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tenetur consequuntur repetur.</p>
                </div>
             </div>
        </footer>
    )
}