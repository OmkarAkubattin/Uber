import { Link } from "react-router-dom";
import { useState } from "react";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setCaptainData({
      email: email,
      password: password,
    });
    console.log(captainData);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10 invert"
          src="https://imgs.search.brave.com/iUu_pSUB4XC14yY3lkGujRPUI3q11j4kizg-ipgasO8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1OTc2ODc3/OXViZXItbG9nby13/aGl0ZS5wbmc"
          alt=""
        />
        <form action="" onSubmit={handleSubmit}>
          <h3 className="text-lg font-medium mb-2">What&apos;s your Email?</h3>
          <input
            className="bg-[#eeeeee] mb-4 rounded px-4 py-2 border border-gray-200 w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <h3 className="text-lg font-medium mb-2">Enter your Password</h3>
          <input
            className="bg-[#eeeeee] mb-2 rounded px-4 py-2 border border-gray-200 w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="flex items-center justify-center w-full bg-black text-white font-medium py-3 rounded mt-5">
          Log in as Captain
          </button>
        </form>
        <p className="text-center mt-3">
          Don&apos;t Have Account? &nbsp;
          <Link to="/captain-signup" className="text-blue-600">
            Register As a Captain
          </Link>
        </p>
      </div>
      <div>
        <Link to='/login' className="flex items-center justify-center w-full bg-[#d5622d] text-white font-medium py-3 rounded mt-5">
          Sign in As User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
