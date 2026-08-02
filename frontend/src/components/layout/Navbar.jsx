import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    {
      label: "Submit",
      path: "/",
    },
    {
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      label: "Wall",
      path: "/wall",
    },
  ];

  return (
    <header className="border-b border-white/10 bg-[#080808]">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <NavLink
          to="/"
          className="text-lg font-semibold tracking-tight text-white"
        >
          Testimonial<span className="text-gray-500">.</span>
        </NavLink>

        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `rounded-lg px-4 py-2 text-sm transition ${
                  isActive
                    ? "bg-white text-black"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
