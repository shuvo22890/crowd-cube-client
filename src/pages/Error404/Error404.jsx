import { Helmet } from "react-helmet-async";
import { TbMoodSadDizzy } from "react-icons/tb";
import { Link } from "react-router-dom";

const Error404 = () => {
    return (<section className="text-center text-xl sm:text-3xl text-desc flex flex-col justify-center items-center gap-5 h-screen bg-secondary">
        <Helmet>
            <title>404 Not Found | Crowd Cube</title>
        </Helmet>

        <span className="text-9xl text-warning">
            <TbMoodSadDizzy />
        </span>

        <h1 className="text-2xl text-warning font-bold sm:text-6xl uppercase">404 Not found</h1>
        <p>The page you want to visit doesn&apos;t exist!</p>
        <p>Go to <Link className="text-info font-semibold" to="/">Home Page</Link></p>
    </section>);
};

export default Error404;