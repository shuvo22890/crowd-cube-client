import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import { Outlet, useNavigate } from "react-router-dom";
import AuthContext from './provider/AuthProvider';

const Root = () => {
    const {state} = useNavigate();

    return (<AuthContext>
        <Header/>
        <main className="bg-white pt-[73px] sm:pt-[77px] lg:pt-[101px] dark:bg-dark-main-sec">
            {state==='loading' ? <h2>Loading.....</h2> : <Outlet/>}
            
        </main>
        <Footer/>
    </AuthContext>);
};

export default Root;