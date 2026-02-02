import Header from "../components/Header"
import Introduction from "../components/Introduction"
import Products from "../components/Products"

export default function Home() {
    return (
        <div className="bg-pink-100 w-full lg:px-17 p-4 flex-col">
            <Header/>
            <Introduction/>
            <Products/>
        </div>
    )
}