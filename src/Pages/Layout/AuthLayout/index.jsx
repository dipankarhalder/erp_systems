import { Outlet, useLocation } from "react-router-dom";
import { mainPaths } from "../../../Constant";
import { AppMainCover, AppBgSec } from "./style";

const backgroundMap = {
  [mainPaths.LOGIN]: "/authbg.png",
  [`/${mainPaths.REGISTER}`]: "/createbg.png",
  [`/${mainPaths.OTP}`]: "/otpbg.png",
  [`/${mainPaths.FORGOT}`]: "/forgotbg.png",
};

export const AuthLayout = () => {
  const location = useLocation();
  const bgImage = backgroundMap[location.pathname];

  return (
    <AppMainCover>
      <Outlet />
      {bgImage && <AppBgSec $image={bgImage} />}
    </AppMainCover>
  );
};
