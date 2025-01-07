import { FaPaperPlane } from "react-icons/fa";
import Title from "../Title/Title";
import swal from "sweetalert";

const Newsletter = () => {
const handleSubmit = e=>{
    e.preventDefault();
    swal('Hurrah!', 'Thanks for joining our newsletter', 'success');
    e.target.reset();
}

    return (<div className="sm:col-span-2">
        <Title title="Newsletter" mb="mb-4" />
        <p className="text-desc dark:text-dark-lite text-base xl:text-lg mb-4">Join our newsletter to get the latest update about us and get the news about upcoming campaigns.</p>

        <form onSubmit={handleSubmit} className="flex border border-info rounded-md overflow-hidden">
            <input type="email" placeholder="Email" className="bg-transparent p-3 grow border-r border-info text-base text-desc dark:text-secondary" required />
            <button className="flex items-center gap-2 hover:bg-secondary dark:hover:bg-dark bg-info hover:text-info text-secondary p-3 md:px-5 transition-colors uppercase text-lg font-semibold">
                <span><FaPaperPlane /></span>
                <span>Send</span>
            </button>
        </form>
    </div>);
};

export default Newsletter;