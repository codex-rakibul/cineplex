import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
    const loginCheck = useSelector(state=> state.basicAuthReducer.loginChecked)
  const router = useRouter();

  useEffect(() => {

    if (loginCheck) {
      router.push("/"); 
    }
  }, [loginCheck]);

  return children;
};

export default PrivateRoute;
