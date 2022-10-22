import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../services/actions/authAction";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedInData = useSelector((state) => state.isLoggedIn);
  const usersData = useSelector((state) => state.users);
  console.log(usersData);

  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const OnchangeHandler = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
    console.log(name, value);
  };

  useEffect(() => {
    if (isLoggedInData) {
    }
    let isValid = localStorage.getItem("loggedData");
    if (isValid) {
      navigate("/");
    }
     // eslint-disable-next-line
  }, []);

  const handleOnClick = async (e) => {
    e.preventDefault();
    const userLoginData = usersData.filter((user) => {
      if (data.username === user.username && data.password === user.password) {
        return user;
      }
      return null;
    });
    if (userLoginData[0]) {
      dispatch(userLogin());
      localStorage.setItem("loggedData", true);
      navigate("/");
    } else {
      setError(true);
    }
  };

  return (
    <>
      <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
        <form>
          <section className="flex  flex-col space-y-10">
            <div className="text-center text-4xl font-medium">Log In</div>
            {error ? (
              <div className="text-xs text-red-700">
                Incorrect username or password
              </div>
            ) : null}
            <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
              <input
                type="text"
                name="username"
                autoComplete="true"
                onChange={OnchangeHandler}
                value={data.username}
                placeholder="Email or Username"
                className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              />
            </div>

            <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                value={data.password}
                onChange={OnchangeHandler}
                placeholder="Password"
                className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              />
            </div>

            <button
              onClick={handleOnClick}
              className="transform rounded-sm bg-gray-600 py-2 font-bold duration-300 hover:bg-indigo-400"
            >
              LOG IN
            </button>

            <p className="text-center text-lg">
              No account?
              <Link
                to="/registration"
                className="font-medium text-indigo-500 underline-offset-4 hover:underline"
              >
                Create One
              </Link>
            </p>
          </section>
        </form>
      </main>
    </>
  );
};

export default Login;
