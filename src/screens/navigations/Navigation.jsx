/* eslint-disable no-constant-condition */
import { BrowserRouter } from "react-router-dom";
import Auth from "./Auth";
import Authenticate from "./Authenticate";
import { useEffect, useState } from "react";
import { getCurrentUser } from "../../utils/TokenFunc";

const Navigation = () => {
  const [token, setToken] = useState(null);
  useEffect(() => {
    setToken(getCurrentUser());
  }, []);
  return (
    <>
      <BrowserRouter>
        {token === null || token === "" || token === undefined ? (
          <Auth />
        ) : (
          <Authenticate />
        )}
      </BrowserRouter>
    </>
  );
};

export default Navigation;
