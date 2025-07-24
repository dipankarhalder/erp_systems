import { Outlet,  } from "react-router-dom"; // useLocation
// import { appPath } from "../../../constant";

// const backgroundMap = {
//   [appPath.LOGIN]: "/authbg.png",
//   [`/${appPath.REGISTER}`]: "/createbg.png",
//   [`/${appPath.OTP}`]: "/otpbg.png",
//   [`/${appPath.FORGOT}`]: "/forgotbg.png",
// };


export const AuthLayout = () => {
  // const location = useLocation();
  // const bgImage = backgroundMap[location.pathname];

  return (
      <div>
        <Outlet />
      </div>
  );
};
