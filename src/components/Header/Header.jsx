import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import NavItems from "./headerParts/NavItems";
import Avatar from "./headerParts/Avatar";
import { Link } from "react-router-dom";
import ThemeTogglerBtn from "./headerParts/ThemeTogglerBtn";

const Header = () => {
    const { user, logOut, setDark } = useContext(AuthContext);
    const {displayName, photoURL} = user || {};
    const [top0, setTop0] = useState(true);

    useEffect(()=>{
        let prev;
        window.onscroll = ()=>{
            setTop0(prev>window.scrollY);
            prev= window.scrollY;
        }
    }, []);

    return (<header className={(top0 ? 'top-0' : '-top-28') + " px-2 fixed w-full left-0 z-30 bg-[#ffffffe0] transition-all dark:bg-[#161a30e8] border-b dark:border-dark-lite"}>
        <nav className="navbar justify-between max-w-screen-xl mx-auto py-5 px-0">
            <div className="navbar-start w-fit">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="mr-2 lg:hidden dark:text-secondary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow dark:bg-dark border dark:border-dark-lite">
                        {<NavItems user={user} />}
                    </ul>
                </div>
                <Link className="uppercase text-2xl sm:text-3xl font-bold text-title dark:text-white" to="/">Crowd<span className="text-info">Cube</span></Link>
                <ThemeTogglerBtn setDark={setDark}/>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {<NavItems user={user} />}
                </ul>
            </div>
            {user ? <Avatar name={displayName} image={photoURL} logOut={logOut} /> : null}
        </nav>
    </header>);
};

export default Header;