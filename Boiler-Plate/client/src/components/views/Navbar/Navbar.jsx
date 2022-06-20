import React from 'react';
import { Link } from 'react-router-dom';
import {
  IoHomeOutline, //
  IoLogInOutline,
  IoPersonAddOutline,
  IoSettingsOutline,
} from 'react-icons/io5';

function Navbar() {
  return (
    <>
      <div>
        <nav className="flex justify-end ">
          <ul className="flex text-3xl w-64 rounded-b-lg shadow-md p-3">
            <li className="grow">
              <Link className="" to="/">
                <IoHomeOutline className="mx-auto" />
              </Link>
            </li>
            <li className="grow">
              <Link className="" to="/login">
                <IoLogInOutline className="mx-auto" />
              </Link>
            </li>
            <li className="grow">
              <Link className="" to="/register">
                <IoPersonAddOutline className="mx-auto" />
              </Link>
            </li>
            <li className="grow">
              <Link className="" to="/setting">
                <IoSettingsOutline className="mx-auto" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
