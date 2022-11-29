import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsCartCheck } from "react-icons/bs";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { CgUserList } from "react-icons/cg";
import { myContext } from "../contextApi/Authcontext";
import useAdminHook from "../CustomeHOOk/MakeAdmin/useAdminHook";
import useSellerHook from "../CustomeHOOk/MakeSellerHook/useSellerHook";
import Footer from "../Pages/Shared/Footer/Footer";
import NavbarTop from "../Pages/Shared/Navbar/NavbarTop";

const DashboardLayout = () => {
  const { user } = useContext(myContext);
  const [admin] = useAdminHook(user?.email);
  const [seller] = useSellerHook(user?.email);

  return (
    <div>
      <NavbarTop></NavbarTop>
      <div className="flex">
        <div className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto border-r">
        <div className="flex flex-col justify-between mt-6">
          <aside>
          <ul>
            <li>
              <Link to="/dashboard" className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200">
              <BsCartCheck></BsCartCheck>

                  <span className="mx-4 font-medium">My orders</span>
                  </Link>
            </li>

            {seller && (
              <>
                <li>
                  <Link to="/dashboard/myproducts" className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200">
                  <TfiShoppingCartFull></TfiShoppingCartFull>

                  <span className="mx-4 font-medium">My products</span>
                  </Link>
                </li>

                <li>
                  <Link to="/dashboard/addproducts" className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200">
                  <BsCartPlus></BsCartPlus>

                  <span className="mx-4 font-medium">Add Products</span>
                  </Link>
                </li>
              </>
            )}

            {admin && (
              <>
                <li>
                  <Link to="/dashboard/allseller" className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200">
                  <HiOutlineUserGroup></HiOutlineUserGroup>

                  <span className="mx-4 font-medium">All Seller</span>
                  </Link>
                </li>
                <li>
                <Link to="/dashboard/allbyer" className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200">
                  <CgUserList></CgUserList>

                  <span className="mx-4 font-medium">All Buyer</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/report" className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200">
                  <CgUserList></CgUserList>

                  <span className="mx-4 font-medium">Report</span>
                </Link>
                </li>
              </>
            )}
          </ul>
          </aside>
        </div>
      </div>
      <div className="w-full h-full p-4 m-8 overflow-y-auto">
        <div className="flex items-center justify-center p-20 border-4 border-dotted">
        <Outlet></Outlet>
        </div>
      </div>
      </div>
      <Footer></Footer>
      </div>
  );
};

export default DashboardLayout;
