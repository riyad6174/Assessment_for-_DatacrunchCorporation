import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogout } from "../services/actions/authAction";

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [location, setLocation] = useState({});
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
 


  //retrive user location and set to location state
  const success = (position) => {
    setLocation(position.coords);
  };

  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition(success);
  };

  const handleLogout = () => {
    dispatch(userLogout());
    localStorage.removeItem("loggedData")
    navigate("/login");
  };
  useEffect(() => {
    

    let isValid=localStorage.getItem("loggedData")
    if(!isValid){
      navigate('/login')
      
  
    }
    handleLocation();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="bg-gray-900 ">
      <nav className="w-full bg-black">
        <div className="container py-2 flex items-center justify-between text-white">
          <div className="font-bold ">LOGO</div>
          <div>
            <button
              onClick={handleLogout}
              className="hover:text-gray-400 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
      <div className="container flex items-center justify-center mt-4">
        <div className="flex flex-col items-start justify-center border border-black shadow bg-gray-800 rounded text-gray-400  left-0 mx-auto p-10 uppercase">
          <p className="text-2xl flex items-center justify-center ">Welcome</p>
          <p className="text-sm ">Your Latitude is : {location.latitude}</p>
          <p className="text-sm">your Longitude is : {location.longitude}</p>
          <p className="text-sm">Is Logged in: {isLoggedIn}</p>
        </div>
      </div>
      <div className="container  mt-10 grid lg:grid-cols-4 md:grid-cols-3 gap-4 mb-4">
        <div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1528297506728-9533d2ac3fa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1526925712774-2833a7ecd0d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1274&q=80"
              alt=""
            />
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1664574654578-d5a6a4f447bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
            />
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1664574654578-d5a6a4f447bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
            />
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1544931170-3ca1337cce88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1185&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
      <footer className="flex items-center justify-center text-gray-400 bg-black w-full text-xs py-2 uppercase">
        Assessment For Datacrunch Corporation
      </footer>
    </div>
  );
};

export default HomePage;
