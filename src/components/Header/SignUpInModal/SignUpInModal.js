import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const SignUpInModal = ({ formToggle, setFormToggle }) => {

  return (
    <dialog id="my_modal_2" className="modal text-neutral">
    <div method="dialog" className="modal-box w-[450px]">

      {formToggle === "login" && <LoginForm />} 
      {formToggle === "signup" && <SignupForm />} 

      <div>
        <div className="divider text-neutral/50">OR</div>
        <button className="mt-4 w-full py-2 font-medium  border border-neutral/50 rounded hover:bg-gray-200 duration-300 flex gap-4 justify-center items-center">
          <FcGoogle className="text-xl" /> Continue with Google
        </button>
      </div>

      <div className="border-t border-neutral/20 mt-6 pt-4 text-center">
            <div className={`${formToggle === "signup" && "hidden"} text-sm`}>
              Dont have an account?
              <button
                onClick={() => setFormToggle("signup")}
                className="text-primary  pl-2 hover:underline"
              >
                Signup
              </button>
            </div>

            <div className={`${formToggle === "login" && "hidden"} text-sm`}>
              Already have an account?
              <button
                onClick={() => setFormToggle("login")}
                className="text-primary  pl-2 hover:underline"
              >
                Login
              </button>
            </div>
      </div>
    </div>


    <form method="dialog" className="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
  );
};

export default SignUpInModal;