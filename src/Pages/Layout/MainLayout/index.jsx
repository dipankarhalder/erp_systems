import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
      <div>
        {/*<Sidebar />*/}
        <div>
          <Outlet />
        </div>
      </div>
  );
};
