import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  IoLogInOutline, //
  IoPersonAddOutline,
  IoSettingsOutline,
  IoLogOutOutline,
} from 'react-icons/io5';

function Navbar() {
  const user = useSelector((state) => state.user.info); // store에 저장한 값 가져오기
  const leftMenuList = [
    { path: '/', text: 'Home' },
    { path: '/favorite', text: 'Favorite' },
  ];
  const rightMenuList = [
    { path: !user ? '/login' : '/logout', icon: !user ? IoLogInOutline : IoLogOutOutline },
    { path: !user ? '/register' : null, icon: !user ? IoPersonAddOutline : null },
    { path: '/admin', icon: IoSettingsOutline },
  ];

  const filtered = rightMenuList.filter((item) => item.path);
  return (
    <>
      <div>
        <nav className="flex justify-between shadow-md">
          <ul className="flex text-3xl rounded-b-lg ">
            {leftMenuList.map((item) => {
              return (
                <li
                  key={item.path}
                  className="
                    text-xl
                    cursor-pointer

                    align-middle
                    transition 
                    ease-in-out 
                    duration-300

                    hover:text-violet-600 
                    hover:translate-y-2
                  "
                >
                  <Link className="block h-full p-3" to={item.path}>
                    {item.text}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className="flex text-3xl rounded-b-lg ">
            {filtered.map((item) => {
              return (
                <li
                  key={item.path}
                  className="
                    w-16
                    cursor-pointer

                    transition 
                    ease-in-out 
                    duration-300

                    hover:text-violet-600 
                    hover:translate-y-2
                  "
                >
                  <Link className="block h-full" to={item.path}>
                    {item.icon({ className: 'mx-auto my-3' })}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
