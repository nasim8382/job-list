import React, { useEffect, useState } from "react";

const Header = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://refertest.pythonanywhere.com/user/data", {
      method: "GET",
      Headers: {
        uid: 136,
      },
    })
      .then((res) => res.json())
      .then((data) => setUser(data.data));
  }, []);

  return (
    <div className="navbar bg-base-100 pt-7">
      <div className="mx-auto">
        <div className="flex">
          <h2 className="text-2xl mr-7">Name: <span className="font-bold">{user.name}</span></h2>
          <h2 className="text-2xl mr-7">College: <span className="font-bold">{user.college}</span></h2>
        </div>
        <div>
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.pictureUrl} alt="" />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
