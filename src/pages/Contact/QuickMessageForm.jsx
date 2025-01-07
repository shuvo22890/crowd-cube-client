import { FaPaperPlane } from "react-icons/fa";
import swal from "sweetalert";

const QuickMessageForm = () => {
    const handleSend = e => {
        e.preventDefault();
        swal("Done", "Thanks for your message. We will contact you asap.", "success");
        e.target.reset();
    }

    return (<form className="w-full mt-4" onSubmit={handleSend}>
        <div className="form-control">
            <label className="label">
                <span className="label-text text-xl font-semibold text-desc dark:text-lite">
                    Name
                </span>
            </label>
            <input type="text" placeholder="Name" className="input input-bordered dark:bg-dark dark:text-lite border-dark-lite" required />
        </div>

        <div className="form-control mt-4">
            <label className="label">
                <span className="label-text text-xl font-semibold text-desc dark:text-lite">
                    Email
                </span>
            </label>
            <input type="email" placeholder="Email" className="input input-bordered dark:bg-dark dark:text-lite border-dark-lite" required />
        </div>

        <div className="form-control mt-4">
            <label className="label">
                <span className="label-text text-xl font-semibold text-desc dark:text-lite">Message</span>
            </label>
            <textarea
            required
                rows={4}
                placeholder="Message"
                className="textarea textarea-bordered textarea-lg dark:bg-dark dark:text-lite border-dark-lite"></textarea>
        </div>
        <div className="form-control mt-6">
            <button className="btn flex items-center gap-2 hover:bg-info hover:text-lite text-info border-dark-lite bg-transparent text-xl font-semibold w-fit px-8">
                <span><FaPaperPlane /></span>
                <span>Send</span>
            </button>
        </div>
    </form>);
};

export default QuickMessageForm;