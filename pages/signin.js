import React, { useState } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  updateUserStatus,
} from "@/app/features/loginSlicer/loginSlice";
import { v4 as uuidv4 } from "uuid";
import {
  addAuth,
  addDonePage,
  addUserId,
} from "@/app/features/basicAuthSlicer/basicAuthSlice";
import Head from "next/head";
import { message } from "antd";

export default function Login() {
  const { bookingSystem } = useSelector((state) => state.basicAuthReducer);
  const renderLoginError = (
    <span className="text-red-600">Please enter valid email or password</span>
  );
  const [loginError, setLoginError] = useState(false);
  const router = useRouter();
  const loginData = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();

  const formikSignIn = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().email().required(),
      password: yup
        .string()
        .min(6, "Name must have atlest 6 characters")
        .required(),
    }),

    onSubmit: (values) => {
      const person = values;
      let matchFound = false;
      loginData.allUserData.map((user) => {
        if (user.email === person.email && user.password === person.password) {
          const person = {
            ...user,
            status: "active",
          };
          localStorage.setItem("user", JSON.stringify(person));
          matchFound = true;
          if (user.role === "admin") {
            setLoginError(false);
            router.push("/dashboard");
          } else if (bookingSystem) {
            dispatch(addAuth(true));
            dispatch(addDonePage(true));
            dispatch(addUserId(user.userId));
            router.push("/ticket_booking");
          } else {
            setLoginError(false);
            dispatch(addAuth(true));
            dispatch(addUserId(user.userId));
            dispatch(
              updateUserStatus({
                email: user.email,
                password: user.password,
                status: "active",
              })
            );
            router.push("/");
          }
         
        }
      });
      if (!matchFound) {
        setLoginError(true);
      }
    },
  });

  const formikSignUP = useFormik({
    initialValues: {
      userId: "",
      name: "",
      email: "",
      password: "",
    },

    validationSchema: yup.object({
      name: yup
        .string()
        .min(2, "Name must have at least 2 characters")
        .required(),
      email: yup.string().email().required(),
      password: yup
        .string()
        .min(6, "Name must have at least 6 characters")
        .required(),
    }),

    onSubmit: (values, { resetForm }) => {
      const person = {
        ...values,
        userId: uuidv4(),
        status: "active",
        role: "user",
      };
      localStorage.setItem("user", JSON.stringify(person));
      dispatch(addUser(person));

      const { name, email, password, userId } = values;

      if (bookingSystem) {
        dispatch(addAuth(true));
        dispatch(addDonePage(true));
        dispatch(addUserId(person.userId));
        router.push("/ticket_booking");
      } else {
        dispatch(addAuth(true));
        dispatch(addUserId(person.userId));
        router.push("/");
        message.success("Successfully submitted...Now yon can login");
      }

      resetForm({ values: { userId: "", name: "", email: "", password: "" } });
    },
  });

  const renderEmailError = formikSignIn.touched.email &&
    formikSignIn.errors.email && (
      <span className="text-red-600">{formikSignIn.errors.email}</span>
    );

  const renderPasswordError = formikSignIn.touched.password &&
    formikSignIn.errors.password && (
      <span className="text-red-600">{formikSignIn.errors.password}</span>
    );

  const srenderNameError = formikSignUP.touched.name &&
    formikSignUP.errors.name && (
      <span className="text-red-600">{formikSignUP.errors.name}</span>
    );
  const srenderEmailError = formikSignUP.touched.email &&
    formikSignUP.errors.email && (
      <span className="text-red-600">{formikSignUP.errors.email}</span>
    );
  const srenderPasswordError = formikSignUP.touched.password &&
    formikSignUP.errors.password && (
      <span className="text-red-600">{formikSignUP.errors.password}</span>
    );

  const renderData = (
    <div className="bg-black h-screen  ">
      <Head>
        <title>Login</title>
      </Head>
      <div className="bg-black h-full  flex justify-center items-center  md:py-20 py-0 mb:pb-0 pb-10 ">
        <div className="main2 ">
          <input type="checkbox" id="chk" aria-hidden="true" />
          <div className="signup">
            <form onSubmit={formikSignIn.handleSubmit}>
              <label htmlFor="chk" aria-hidden="true">
                Sign In
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={formikSignIn.handleChange}
                value={formikSignIn.values.email}
                placeholder="Email"
              />
              {renderEmailError}
              <br />
              <input
                type="password"
                name="password"
                id="password"
                onChange={formikSignIn.handleChange}
                value={formikSignIn.values.password}
                placeholder="Password"
              />
              {renderPasswordError}
              <br />
              <button className=" btns" type="submit">
                Sign In
              </button>
              {loginError === true ? renderLoginError : ""}
            </form>
          </div>
          <div className="login">
            <form onSubmit={formikSignUP.handleSubmit}>
              <label htmlFor="chk" aria-hidden="true">
                Sign Up
              </label>
              <div className="mt-20">
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={formikSignUP.handleChange}
                  value={formikSignUP.values.name}
                  placeholder="Name"
                />
                {srenderNameError}
                <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={formikSignUP.handleChange}
                  value={formikSignUP.values.email}
                  placeholder="Email"
                />
                {srenderEmailError}
                <br />
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={formikSignUP.handleChange}
                  value={formikSignUP.values.password}
                  placeholder="Password"
                />
                {srenderPasswordError}
                <br />
                <button className="btns" type="submit">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
  return <>{renderData}</>;
}
