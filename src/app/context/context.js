"use client";
import { createContext, useContext, useEffect, useState } from "react";
export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState(null);
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);

  const login = (loginInfo) => {
    setLoading(true);

    fetch("http://localhost:5000/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.status === "fail") {
          setLoginError(data.message);
        }
        if (data?.status === "success") {
          localStorage.setItem("usnota_jwt", data?.token);

          fetch("http://localhost:5000/api/v1/user/me", {
            headers: {
              authorization: `bearer ${localStorage.getItem("usnota_jwt")}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.status === "success") {
                setLoggedUser(data);
              }
            });
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/user/me", {
      headers: {
        authorization: `bearer ${localStorage.getItem("usnota_jwt")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setLoggedUser(data);
        }
      });
  }, []);

  const contextInfo = {
    loggedUser,
    setLoggedUser,
    login,
    loginError,
    loading,
  };
  return <Context.Provider value={contextInfo}>{children}</Context.Provider>;
};

export const UseContext = () => {
  const context = useContext(Context);
  return context;
};

export default ContextProvider;
