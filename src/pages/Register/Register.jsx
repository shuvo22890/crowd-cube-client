import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Title from "../../components/Title/Title";
import Loading from "../../components/Loading/Loading";
import Button from "../../components/Button/Button";
import swal from "sweetalert";
import register from "../../assets/img/register.svg";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createNewUser, user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formProcessing, setFormProcessing] = useState(false);

  useEffect(() => {
    if (formProcessing) return;
    if (user) navigate('/');
  }, [user, navigate, formProcessing])

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const pass = form.password.value;
    const passRequirement = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (!passRequirement.test(pass)) {
      swal('Error!', 'Password must have an uppercase & a lowercase character, a digit & length should be at least 6 characters', 'error');
      return;
    }

    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;

    setLoading(true);
    setFormProcessing(true);
    createNewUser(email, pass, name, photoURL)
      .then(() => {
        setLoading(false);
        swal('Success', 'Your are a registered user now.', 'success')
          .then(() => {
            navigate('/');
          })
      }).catch(({ code }) => {
        let message = 'Something went wrong. Please check your internet connection & try again.';
        code === 'auth/email-already-in-use' && (message = 'Email already exists.');

        swal('Error!', message, 'error');
        setLoading(false);
      })
  }

  return (<section className="max-w-screen-xl mx-auto py-10">
    <Helmet>
      <title>Register | Crowd Cube</title>
    </Helmet>

    <div className="flex items-center justify-between flex-col-reverse md:flex-row gap-3 lg:gap-5 px-2">
      <div className="w-full md:w-1/2 max-w-md border relative border-info shadow rounded-md p-3 sm:p-5">
        <Title title="Register" />
        <form className="flex flex-wrap gap-5" onSubmit={handleRegister}>
          {loading ? <Loading /> : null}

          <label className="input input-bordered border-info flex h-auto p-0 basis-full text-sm sm:text-lg font-semibold overflow-hidden">
            <span className="basis-28 text-center bg-info py-3 text-white">Name</span>
            <input type="text" name="name" placeholder="Enter your Name" className="grow text-desc dark:text-secondary px-2 bg-white dark:bg-dark" required />
          </label>

          <label className="input input-bordered border-info flex h-auto p-0 basis-full text-sm sm:text-lg font-semibold overflow-hidden">
            <span className="basis-28 text-center bg-info py-3 text-white">Email</span>
            <input type="email" name="email" placeholder="Enter your email" className="grow text-desc dark:text-secondary px-2 bg-white dark:bg-dark" required />
          </label>

          <label className="input input-bordered border-info flex h-auto p-0 basis-full text-sm sm:text-lg font-semibold overflow-hidden">
            <span className="basis-28 text-center bg-info py-3 text-white">Photo URL</span>
            <input type="text" name="photoURL" placeholder="Photo URL" className="grow text-desc dark:text-secondary px-2 bg-white dark:bg-dark" required />
          </label>

          <label className="input input-bordered border-info flex h-auto p-0 basis-full text-sm sm:text-lg font-semibold overflow-hidden">
            <span className="basis-28 text-center bg-info py-3 text-white">Password</span>
            <input type="password" name="password" placeholder="Enter your password" className="grow text-desc dark:text-secondary px-2 bg-white dark:bg-dark" required />
          </label>

          <label className="label basis-full text-desc dark:text-secondary font-semibold text-base sm:text-lg">
            <p>Already have an account? <Link className="text-info dark:hover:text-secondary" to="/login">Login</Link></p>
          </label>

          <Button text="Register" />
        </form>
      </div>

      <div className="grow w-full max-w-md md:w-1/2 md:max-w-full">
        <img src={register} alt="Register" />
      </div>
    </div>
  </section>
  )
};

export default Register;