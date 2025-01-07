import PropTypes from 'prop-types';
import { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { FaDonate, FaRegListAlt } from 'react-icons/fa';
import { LuCirclePlus, LuLogOut } from 'react-icons/lu';
import { Link, useNavigate } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import swal from 'sweetalert';

const linkClasses = "flex my-5 items-center gap-3 text-lg font-semibold text-prime hover:text-info";

const Avatar = ({ name, image, logOut }) => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        swal({
            title: "Warning!",
            text: "Do you want to logout?",
            icon: "warning",
            dangerMode: true,
            buttons: {
                cancel: 'Cancel',
                confirm: 'Yes'
            }
        }).then(confirmed => {
            if (confirmed) {
                setOpen(false);
                logOut().then(() => {
                    navigate('/login');
                })
            }
        })

    }

    return (<div className="navbar-end w-fit">
        <Tooltip id='show-full-name' />
        <div className="avatar group relative z-30">
            <div role='button' onClick={() => setOpen(!open)} className="w-12 sm:w-[60px] rounded-full relative border border-info p-1">
                <img
                    className="cursor-pointer border rounded-full"
                    src={image}
                    data-tooltip-id='show-full-name'
                    data-tooltip-content={name}
                />
            </div>

            <div className={`absolute bg-white dark:bg-dark-main-sec ${open ? "-bottom-72" : "bottom-64"} h-72 w-56 right-0 border border-desc rounded-md px-5 py-5 text-title dark:text-lite`}>
                <p className="flex items-center gap-3 text-lg font-semibold mt-1">
                    <CgProfile className="text-3xl text-info" />
                    <span className='text-title dark:text-secondary'>
                        {name && name?.length > 12 ? name?.slice(0, 12) + '...' : name}
                    </span>
                </p>

                <Link to="/add-campaign" className={linkClasses} onClick={() => setOpen(false)}>
                    <LuCirclePlus className="text-3xl text-info" />
                    <span>Add Campaign</span>
                </Link>

                <Link to="/my-campaigns" className={linkClasses} onClick={() => setOpen(false)}>
                    <FaRegListAlt className="text-3xl text-info" />
                    <span>My Campaigns</span>
                </Link>

                <Link to="/my-donations" className={linkClasses} onClick={() => setOpen(false)}>
                    <FaDonate className="text-3xl text-info" />
                    <span>My Donations</span>
                </Link>

                <button className="flex items-center gap-3 text-lg font-semibold text-prime text-warning" onClick={handleLogout} >
                    <LuLogOut className="text-3xl" />
                    <span>Log Out</span>
                </button>
            </div>
        </div>
    </div>);
};

Avatar.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    logOut: PropTypes.func
};

export default Avatar;