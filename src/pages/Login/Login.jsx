import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import googleImg from '../../assets/img/google.png';
import swal from 'sweetalert';
import Loading from "../../components/Loading/Loading";

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

  return (<div className="max-w-screen-sm mx-auto px-2 py-10">
    <Title title="Login" />

    <form className="border relative border-info shadow rounded-md p-3 sm:p-5 flex flex-wrap gap-5" onSubmit={handleLogin}>
      {loading ? <Loading /> : null}

      <label className="input input-bordered border-info flex h-auto p-0 basis-full text-sm sm:text-lg font-semibold overflow-hidden">
        <span className="basis-28 text-center bg-info py-3 text-white">Email</span>
        <input type="email" name="email" placeholder="Enter your email" className="grow text-special-txt dark:text-secondary px-2 bg-white dark:bg-dark" required />
      </label>

      <label className="input input-bordered border-info flex h-auto p-0 basis-full text-sm sm:text-lg font-semibold overflow-hidden">
        <span className="basis-28 text-center bg-info py-3 text-white">Password</span>
        <input type="password" name="password" placeholder="Enter your password" className="grow text-special-txt dark:text-secondary px-2 bg-white dark:bg-dark" required />
      </label>

      <label className="label basis-full text-special-txt dark:text-secondary font-semibold text-base sm:text-lg">
        <p>Don&apos;t have an account? <Link className="text-info" to="/register">Register</Link></p>
      </label>

      <Button text="Login" />

      <button type="button" className="border border-warning hover:border-special-txt transition-colors rounded-md px-5 py-3 flex items-center gap-4 text-warning text-base sm:text-xl font-semibold mx-auto bg-white dark:bg-dark hover:text-special-txt dark:hover:text-secondary" onClick={handleGoogleLogin}>
        <img src={googleImg} alt="Google" />
        <span>Login With Google</span>
      </button>
    </form>

  </div>);
};

export default Login;