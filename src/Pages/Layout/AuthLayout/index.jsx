import { Outlet, useLocation } from "react-router-dom";
import { AppMainCover, AppBgSec } from "./style";

const backgroundMap = {
  ["/"]: "/authbg.png",
  [`/register`]: "/createbg.png",
  [`/otp`]: "/otpbg.png",
  [`/forgot-password`]: "/forgotbg.png",
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
