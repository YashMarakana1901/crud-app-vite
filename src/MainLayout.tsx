import { Outlet, Route, Routes } from "react-router-dom";
import Header from "./shared/header/Header";
import Dashboard from "./components/dashboard/Dashboard";
import Sidebar from "./shared/sidebar/Sidebar";
import UsersTable from "./components/user-table/UsersTable";
import NotFound from "./shared/not-found/NotFound";
import Profile from "./components/profile/components/Profile";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="lg:pl-72 md:py-[35px] py-[22px] px-4 sm:px-6 lg:px-[30px]">
        <Routes>
          <Route path="" element={<Outlet />}>
            <Route index element={<Dashboard />} />
            <Route path="users" element={<UsersTable />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Sidebar />
    </>
  );
};

export default MainLayout;
