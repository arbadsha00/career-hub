import { NavLink } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
const Nav = () => {
  return (
    <div className="sticky top-0   z-50 bg-white/30 backdrop-blur-md">
      <nav className="container mx-auto px-4 flex justify-between items-center my-6">
        <h1 className="text-3xl font-extrabold">CareerHub</h1>
        <ul className="hidden md:flex gap-6">
          <NavLink className={({isActive})=>`font-semibold  ${isActive?"text-primary":"text-gray-600"}`} to="/">Home</NavLink>
          <NavLink className={({isActive})=>`font-semibold  ${isActive?"text-primary":"text-gray-600"}`} to="/appliedJobs">Applied Jobs</NavLink>
          <NavLink className={({isActive})=>`font-semibold  ${isActive?"text-primary":"text-gray-600"}`} to="/blog">Blog</NavLink>
        </ul>
        <div className="flex items-center gap-3">
          <button className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] font-semibold  text-white btn ">Star Applying</button>

          <div className="dropdown dropdown-bottom dropdown-end md:hidden">
            <div tabIndex={0} role="button" className="m-1">
              <RiMenu3Fill className="text-xl hover:text-primary" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-slate-100 rounded-xl z-[1] w-52 p-4 mt-4 shadow  space-y-2  "
            >
              <NavLink className={({isActive})=>`font-semibold  ${isActive?"text-primary":"text-gray-600"}`} to="/">Home</NavLink>
              <NavLink className={({isActive})=>`font-semibold  ${isActive?"text-primary":"text-gray-600"}`} to="/appliedJobs">Applied Jobs</NavLink>
              <NavLink className={({isActive})=>`font-semibold  ${isActive?"text-primary":"text-gray-600"}`} to="/blog">Blog</NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
