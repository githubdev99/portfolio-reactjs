/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { GoogleAuth } from "@codetrix-studio/capacitor-google-auth";

const CTA = (props) => {
  const [user, setUser] = useState({});

  // CDN Version
  // const handleCallbackResponse = (response) => {
  //   if (response) {
  //     let userObject = jwtDecode(response.credential);

  //     console.log("Encode JWT: ", userObject);
  //     setUser(userObject);
  //   }
  // };

  // const handleSignOut = (event) => {
  //   setUser({});
  // };

  // useEffect(() => {
  //   google.accounts.id.initialize({
  //     client_id:
  //       "288682191358-k8t2tp18ijpkdlrqbf50q0c8cqvnmnot.apps.googleusercontent.com",
  //   //   callback: handleCallbackResponse,
  //   });

  //   google.accounts.id.renderButton(document.getElementById("google-login"), {
  //     theme: "outline",
  //     size: "large",
  //   });
  // }, []);

  // Capacitor Version
  const signIn = async () => {
    console.log(GoogleAuth.signIn());
  };

  return (
    <div className="cta">
      {/* <a
        href={props.profileData.urlCv}
        target="_blank"
        rel="noreferrer"
        className="btn"
      >
        Unduh CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Kontak Saya
      </a> */}
      <a href="#" className="btn btn-primary" onClick={signIn}>
        Login here with Google
      </a>
    </div>
  );
};

export default CTA;
