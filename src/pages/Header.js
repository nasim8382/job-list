import React, { useEffect, useState } from "react";

const Header = () => {
 const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("http://refertest.pythonanywhere.com/user/data", {
      method: "GET",
      Headers: {
        "uid": 136
      },
    })
      .then((res) => res.json())
      .then((data) => setUser(data.data));
  }, []);

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <h2>Name: {user.name}</h2>
        <h2>College: {user.college}</h2>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user.pictureUrl} alt="" />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
