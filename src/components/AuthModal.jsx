import { Link } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

const AuthModal = () => {
  return (
    <div className="fixed w-screen h-screen top-0 flex justify-center items-center z-50 backdrop-blur-md md:bg-black/10 bg-black/30 px-10  md:px-0 md:text-base">
      <div className="bg-white p-6">
        <h3 className="font-semibold md:text-lg text-base text-center">Oupss caught on 4K <span className="text-2xl">📸</span><br /> You are not authorized to access this page.</h3>
        <p className="text-center md:text-base mt-4 text-sm">Please login to continue</p>
        <div className="flex flex-wrap justify-center items-center gap-4 mt-6">
          <Link to={"/login"}>
            <PrimaryButton>Yes, I'll be log in</PrimaryButton>
          </Link>
          <Link to={"/"}>
            <SecondaryButton>No, back to home</SecondaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default AuthModal;
