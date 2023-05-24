import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../../components/navbar";
import { useFormik } from "formik";
import * as yup from "yup";
import { message } from "antd";

export default function index() {
  const [userSignUpData, setUserSignUpData] = useState();
  console.log("User sign up uP data----------", userSignUpData);
  const [userSignInData, setUserSignInData] = useState();
  console.log("User sign in data----------", userSignInData);

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
      setUserSignInData(person);

      if (
        person.email === userSignUpData.email &&
        person.password === userSignUpData.password
      ) {
        message.success(`Successfully signed in`);
      } else {
        message.success(`Your email and password wrong. Please try again`);
      }
    },
  });

  const formikSignUP = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .min(2, "Name must have atlest 2 characters")
        .required(),
      email: yup.string().email().required(),
      password: yup
        .string()
        .min(6, "Name must have atlest 6 characters")
        .required(),
    }),

    onSubmit: (values) => {
      const person = values;
      setUserSignUpData(person);
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
    <div className="bg-black h-screen">
      <Head>
        <title>Login</title>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossorigin="anonymous"
        />
      </Head>
      <Navbar />
      <div className="bg-black  md:h-screen flex justify-center items-center md:pt-0 pt-16 ">
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