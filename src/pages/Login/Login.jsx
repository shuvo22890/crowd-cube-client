import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import googleImg from '../../assets/img/google.png';
import swal from 'sweetalert';
import Loading from "../../components/Loading/Loading";
import login from '../../assets/img/login.svg';

const Login = () => {
  const { loginUser, googleSignin, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { state } = useLocation();
  const [loading, setLoading] = useState(false);
  const [formProcessing, setFormProcessing] = useState(false);

  useEffect(() => {
    if (formProcessing) return;
    if (user) navigate(state || '/');
  }, [user, navigate, state, formProcessing])

  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;

    setLoading(true);
    setFormProcessing(true);
    loginUser(email, pass)
      .then(() => {
        setLoading(false);
        swal("Done", "Login is successfull", "success")
          .then(() => {
            navigate(state || '/');
          })
      }).catch(({ code }) => {
        setLoading(false);
        let msg = "Someting went wrong!";
        if (code === 'auth/invalid-credential') {
          msg = "Invalid Email Or Password";
        }
        swal("Error!", msg, "error");
      })
  }

  const handleGoogleLogin = () => {
    setLoading(true);
    setFormProcessing(true);
    googleSignin()
      .then(() => {
        swal("Done", "Login is successfull", "success")
          .then(() => {
            navigate(state || '/');
          })
      })
      .catch(() => {
        swal("Oops!", "Someting went wrong!", "error");
      })
  }

  return (<section className="max-w-screen-xl mx-auto py-10">
    <div className="flex items-center justify-between flex-col-reverse md:flex-row gap-3 lg:gap-5 px-2">
    <div className="w-full md:w-1/2 max-w-md border relative border-info shadow rounded-md p-3 sm:p-5">
    <Title title="Login" />
    <form className="flex flex-wrap gap-5" onSubmit={handleLogin}>
      {loading ? <Loading /> : null}

      <label className="input input-bordered border-info flex h-auto p-0 basis-full text-sm sm:text-lg font-semibold overflow-hidden">
        <span className="basis-28 text-center bg-info py-3 text-white">Email</span>
        <input type="email" name="email" placeholder="Enter your email" className="grow text-desc dark:text-secondary px-2 bg-white dark:bg-dark-main-sec" required />
      </label>

      <label className="input input-bordered border-info flex h-auto p-0 basis-full text-sm sm:text-lg font-semibold overflow-hidden">
        <span className="basis-28 text-center bg-info py-3 text-white">Password</span>
        <input type="password" name="password" placeholder="Enter your password" className="grow text-desc dark:text-secondary px-2 bg-white dark:bg-dark-main-sec" required />
      </label>

      <label className="label basis-full text-desc dark:text-secondary font-semibold text-base sm:text-lg">
        <p>Don&apos;t have an account? <Link className="text-info dark:hover:text-secondary" to="/register">Register</Link></p>
      </label>

      <Button text="Login" />

      <div className="divider w-full divider-warning text-warning text-2xl my-10">OR</div>

      <button type="button" className="border border-warning hover:border-info transition-colors rounded-md px-5 py-3 flex items-center gap-4 text-warning text-base sm:text-xl font-semibold mx-auto bg-white dark:bg-dark hover:text-info dark:hover:text-secondary" onClick={handleGoogleLogin}>
        <img src={googleImg} alt="Google" />
        <span>Login With Google</span>
      </button>
    </form>
    </div>

    <div className="w-full max-w-md md:w-1/2 md:max-w-full">
      <img src={login} alt="Login" />
    </div>
    </div>
  </section>);
};

export default Login;