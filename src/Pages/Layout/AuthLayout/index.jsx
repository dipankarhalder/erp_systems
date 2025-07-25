import { Outlet, useLocation } from "react-router-dom";
import { appPath } from "../../../Constant";

const backgroundMap = {
  [appPath.LOGIN]: "/authbg.png",
  [`/${appPath.REGISTER}`]: "/createbg.png",
  [`/${appPath.OTP}`]: "/otpbg.png",
  [`/${appPath.FORGOT}`]: "/forgotbg.png",
};

export const AuthLayout = () => {
  const location = useLocation();
  const bgImage = backgroundMap[location.pathname];

  return (
    <div className="mainAppsCover">
      <div className="mainAppContent">
        <Outlet />
      </div>
      <div
        className="mainAppBackground"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
    </div>
  );
};
