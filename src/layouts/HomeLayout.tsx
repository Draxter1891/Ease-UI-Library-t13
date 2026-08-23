import { Outlet } from "react-router";
import Navbar from "../components/Personal/Navbar";
import Footer from "@/pages/components/Footer";

type Props = {};

const HomeLayout = ({}: Props) => {
  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar />

      <main className="grow p-6">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default HomeLayout;
