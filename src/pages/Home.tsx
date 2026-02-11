import  {  lazy, Suspense }  from "react";
import Social from "../components/Social";
import Message from "../components/Message";
import Footer from "../components/Footer";

export default function Home() {

    const Header = lazy(() => import("../components/Header"));

    const Introduction = lazy(() => import("../components/Introduction"));

    const Products = lazy(() => import("../components/Products"));

    const Services = lazy(() => import("../components/Services"));

    const MoreInformations = lazy(() => import("../components/MoreInformations"));
 
    return (
        <div className="bg-pink-100 w-full lg:px-17 p-4 flex-col">
        <Suspense  fallback={<p>Loading...</p>}>
            <Header/>
            <Introduction/>
            <Products/>
            <Services/>
            <MoreInformations/>
            <Social/>
            <Message/>
            <Footer/>
        </Suspense>
        </div>
    )
}