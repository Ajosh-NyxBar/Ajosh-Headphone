import React from "react";
import { MdMenu } from "react-icons/md";
import { SlEarphones } from "react-icons/sl";
import logo from "../../assets/logo.png";
import { UpdateFollower } from "react-mouse-follower";

const navbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Category",
    link: "/",
  },
  {
    id: 3,
    title: "Blog",
    link: "/",
  },
  {
    id: 4,
    title: "About",
    link: "/",
  },
  {
    id: 5,
    title: "Contact",
    link: "/",
  },
];
const Navbar = () => {
  return (
    <>
      <div className="bg-brandDark text-white py-4 font-varela">
        <nav className="container flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <UpdateFollower
              mouseOptions={{
                backgroundColor: "white",
                zIndex: 999,
                followSpeed: 1.5,
                scale: 5,
                mixBlendMode: "difference",
              }}
            >
              <img src={logo} alt="logo" className="w-12 h-12 rounded-full" />{" "}
            </UpdateFollower>
            <a href="#" className="text-xl font-bold uppercase">
              Ajosh{" "}
              <span className="font-extralight text-white/70">Market</span>
            </a>
          </div>
          {/* Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-4">
              {navbarMenu.map((menu) => (
                <li key={menu.id}>
                  <UpdateFollower
                    mouseOptions={{
                      backgroundColor: "white",
                      zIndex: 999,
                      followSpeed: 1.5,
                      scale: 5,
                      mixBlendMode: "difference",
                    }}
                  >
                    <a
                      href={menu.link}
                      className="inline-block text-sm py-2 px-3 uppercase"
                    >
                      {menu.title}
                    </a>
                  </UpdateFollower>
                </li>
              ))}
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 999,
                  followSpeed: 1.5,
                  scale: 5,
                  mixBlendMode: "difference",
                }}
              >
                <div>
                  <button className="text-xl ps-14">
                    <SlEarphones className="hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference "/>
                  </button>
                </div>
              </UpdateFollower>
            </ul>
          </div>
          {/* Mobile humberger */}
          <div className="md:hidden">
            <MdMenu className="text-4xl" />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
