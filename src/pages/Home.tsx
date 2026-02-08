import Header from "../components/Header"
import Introduction from "../components/Introduction"
import MoreInformations from "../components/MoreInformations"
import Products from "../components/Products"
import Services from "../components/Services"

export default function Home() {
    return (
        <div className="bg-pink-100 w-full lg:px-17 p-4 flex-col">
            <Header/>
            <Introduction/>
            <Products/>
            <Services/>
            <MoreInformations/>
        </div>
    )
}