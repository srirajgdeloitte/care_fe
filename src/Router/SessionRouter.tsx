import React from "react";
import loadable from "@loadable/component";
import {
  ForgotPassword,
  Login,
  Register,
  ResetPassword,
} from "../Components/Auth";
import { useRoutes } from "raviger";
import { PublicDashboard } from "../Components/Dashboard/PublicDashboard";
import "./styles/nav.css"
const TopBar = loadable(() => import("../Components/Common/TopBar"));

const routes = {
  "/": () => <Login />,
  "/login": () => <Login />,
  "/dashboard": () => <PublicDashboard />,
  "/register": () => <Register />,
  "/forgot-password": () => <ForgotPassword />,
  "/password_reset/:token": ({ token }: any) => <ResetPassword token={token} />,
};

const SessionRouter = () => {
  const content = useRoutes(routes) || <Login />;
  const path =
    content &&
    content.props &&
    content.props.children &&
    content.props.children.props &&
    content.props.children.props.value;
  const login =
    !path || path === "/" || path === "/login" || path === "/login/";
  return (
    <div className={!login ? "bg-green-100" : ""}>
      {!login && <TopBar />}
      <div className={!login ? "p-4 container max-w-5xl mx-auto" : ""}>
        {content}
      </div>
      {login ?
        <div className="bg-white flex items-center margin-small-screen">
          <div className="max-w-5xl mx-auto flex md:flex-row flex-col p-4 f-full flex items-center">
            <div className="mx-auto p-2">
              <img
                src="https://cdn.coronasafe.network/light-logo.svg"
                className="h-8 w-auto"
                alt="care logo"
              />{" "}
            </div>
            <div className="max-w-xl text-sm">
                Powered by CoronaSafe Network
            </div>
          </div>
        </div> : null}
    </div>
  );
};

export default SessionRouter;
