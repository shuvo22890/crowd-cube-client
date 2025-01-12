import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import { Outlet, useNavigate } from "react-router-dom";
import AuthContext from './provider/AuthProvider';
import { HelmetProvider } from "react-helmet-async";

const Root = () => {
    const {state} = useNavigate();

    return (<AuthContext>
        <HelmetProvider>
        <Header/>
        <main className="bg-white pt-[73px] sm:pt-[77px] lg:pt-[101px] dark:bg-dark-main-sec">
            {state==='loading' ? <h2>Loading.....</h2> : <Outlet/>}
            
        </main>
        <Footer/>
        </HelmetProvider>
    </AuthContext>);
};

export default Root;