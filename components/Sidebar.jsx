// import classNames from "classnames";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import React, { useState, useMemo } from "react";
// import {
//   ArticleIcon,
//   CollapsIcon,
//   HomeIcon,
//   LogoIcon,
//   LogoutIcon,
//   UsersIcon,
//   VideosIcon,
// } from "./icons";

// const menuItems = [
//   { id: 1, label: "Home", icon: HomeIcon, link: "/" },
//   { id: 2, label: "Manage Posts", icon: ArticleIcon, link: "/posts" },
//   { id: 3, label: "Manage Users", icon: UsersIcon, link: "/users" },
//   { id: 4, label: "Manage Tutorials", icon: VideosIcon, link: "/tutorials" },
// ];

// const Sidebar = () => {
//   const [toggleCollapse, setToggleCollapse] = useState(false);
//   const [isCollapsible, setIsCollapsible] = useState(false);

//   const router = useRouter();

//   const activeMenu = useMemo(
//     () => menuItems.find((menu) => menu.link === router.pathname),
//     [router.pathname]
//   );

//   const wrapperClasses = classNames(
//     "h-screen px-4 pt-8 pb-4 bg-light flex justify-between flex-col",
//     {
//       ["w-80"]: !toggleCollapse,
//       ["w-20"]: toggleCollapse,
//     }
//   );

//   const collapseIconClasses = classNames(
//     "p-4 rounded bg-light-lighter absolute right-0",
//     {
//       "rotate-180": toggleCollapse,
//     }
//   );

//   const getNavItemClasses = (menu) => {
//     return classNames(
//       "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
//       {
//         ["bg-light-lighter"]: activeMenu.id === menu.id,
//       }
//     );
//   };

//   const onMouseOver = () => {
//     setIsCollapsible(!isCollapsible);
//   };

//   const handleSidebarToggle = () => {
//     setToggleCollapse(!toggleCollapse);
//   };

//   return (
//     <div
//       className={wrapperClasses}
//       onMouseEnter={onMouseOver}
//       onMouseLeave={onMouseOver}
//       style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
//     >
//       <div className="flex flex-col">
//         <div className="flex items-center justify-between relative">
//           <div className="flex items-center pl-1 gap-4">
//             <LogoIcon />
//             <span
//               className={classNames("mt-2 text-lg font-medium text-text", {
//                 hidden: toggleCollapse,
//               })}
//             >
//               Logo
//             </span>
//           </div>
//           {isCollapsible && (
//             <button
//               className={collapseIconClasses}
//               onClick={handleSidebarToggle}
//             >
//               <CollapsIcon />
//             </button>
//           )}
//         </div>

//         <div className="flex flex-col items-start mt-24">
//           {menuItems.map(({ icon: Icon, ...menu }) => {
//             const classes = getNavItemClasses(menu);
//             return (
//               <div className={classes}>
//                 <Link href={menu.link}>
//                   <a className="flex py-4 px-3 items-center w-full h-full">
//                     <div style={{ width: "2.5rem" }}>
//                       <Icon />
//                     </div>
//                     {!toggleCollapse && (
//                       <span
//                         className={classNames(
//                           "text-md font-medium text-text-light"
//                         )}
//                       >
//                         {menu.label}
//                       </span>
//                     )}
//                   </a>
//                 </Link>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       <div className={`${getNavItemClasses({})} px-3 py-4`}>
//         <div style={{ width: "2.5rem" }}>
//           <LogoutIcon />
//         </div>
//         {!toggleCollapse && (
//           <span className={classNames("text-md font-medium text-text-light")}>
//             Logout
//           </span>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useMemo, useRef, useEffect } from "react";
import { BiTrendingUp  } from 'react-icons/bi';
import {FaLaptopCode} from "react-icons/fa"
import { FaNewspaper } from 'react-icons/fa';
import { BiAlarm } from 'react-icons/bi';
import { BiCalendarEvent } from 'react-icons/bi';
import { FaComments } from 'react-icons/fa';
import { FaBookOpen } from 'react-icons/fa';
import { FaRegSmile, FaRegMeh, FaRegFrown } from 'react-icons/fa';

import {
  ArticleIcon,
  CollapsIcon,
  HomeIcon,
  LogoIcon,
  LogoutIcon,
  UsersIcon,
  VideosIcon,
} from "./icons";

const menuItems = [
  { id: 1, label: "Discussion Forum", icon: FaComments, link: "/" },
  { id: 2, label: "Market Stories", icon: FaBookOpen, link: "/posts" },
  { id: 3, label: "Sentiment", icon: FaRegSmile, link: "/users" },
  { id: 4, label: "Market", icon: BiTrendingUp, link: "/tutorials" },
  { id: 5, label: "Sector", icon: FaLaptopCode, link: "/sector" },
  { id: 6, label: "Watchlist", icon: BiAlarm, link: "/watchlist" },
  { id: 7, label: "Events", icon: BiCalendarEvent, link: "/events" },
  { id: 8, label: "News/Interviews", icon: FaNewspaper, link: "/news" },
];

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);
  const [sidebarHeight, setSidebarHeight] = useState("auto");

  const router = useRouter();
  const sidebarRef = useRef(null);

  useEffect(() => {
    if (!toggleCollapse) {
      setSidebarHeight(`${document.body.scrollHeight}px`);
    }
  }, [toggleCollapse]);

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === router.pathname),
    [router.pathname]
  );

  const wrapperClasses = classNames(
    "px-4 pt-8 pb-4 bg-light flex justify-between flex-col sticky top-0",
    {
      ["w-80"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
      ["shadow-lg"]: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames("p-4 rounded bg-light-lighter absolute right-0", {
    "rotate-180": toggleCollapse,
  });

  const getNavItemClasses = (menu) => {
    return classNames(
      "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
      {
        ["bg-light-lighter"]: activeMenu.id === menu.id,
      }
    );
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      ref={sidebarRef}
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s", height: sidebarHeight }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center pl-1 gap-4">
            <LogoIcon />
            <span className={classNames("mt-2 text-lg font-medium text-text", { hidden: toggleCollapse })}>Hello ,User </span>
          </div>
          {isCollapsible && (
            <button className={collapseIconClasses} onClick={handleSidebarToggle}>
              <CollapsIcon />
            </button>
          )}
        </div>

        <div className="flex flex-col items-start mt-24">
          {menuItems.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasses(menu);
            return (
              <div key={menu.id} className={classes}>
                <Link href={menu.link}>
                  <a className="flex py-4 px-3 items-center w-full h-full">
                    <div style={{ width: "2.5rem" }}>
                      <Icon />
                    </div>
                    {!toggleCollapse && (
                      <span className={classNames("text-md font-medium text-text-light")}>{menu.label}</span>
                    )}
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className={`${getNavItemClasses({})} px-3 py-4`}>
        <div style={{ width: "2.5rem" }}>
          <LogoutIcon />
        </div>
        {!toggleCollapse && (
          <span className={classNames("text-md font-medium text-text-light")}>Logout</span>
        )}
      </div>
    </div>
  );
};

export default Sidebar;