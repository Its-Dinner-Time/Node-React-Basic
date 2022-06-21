import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  IoHomeOutline, //
  IoLogInOutline,
  IoPersonAddOutline,
  IoSettingsOutline,
  IoLogOutOutline,
} from 'react-icons/io5';

function Navbar() {
  const user = useSelector((state) => state.user.info); // store에 저장한 값 가져오기

  const listItems = [
    { path: '/', icon: IoHomeOutline },
    { path: !user ? '/login' : '/logout', icon: !user ? IoLogInOutline : IoLogOutOutline },
    { path: !user ? '/register' : null, icon: !user ? IoPersonAddOutline : null },
    { path: '/setting', icon: IoSettingsOutline },
  ];

  const filtered = listItems.filter((item) => item.path);
  return (
    <>
      <div>
        <nav className="flex justify-end shadow-md">
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
