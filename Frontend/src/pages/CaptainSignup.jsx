import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [color, setColor] = useState("");
  const [plate, setPlate] = useState("");
  const [capacity, setCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const navigate = useNavigate();

  const { captain, setCaptain } = useContext(CaptainDataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCaptain = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
      color: color,
      plate: plate,
      capacity: capacity,
      vehicleType: vehicleType
    }
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      newCaptain
    );
    if (response.status === 200) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }
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
          <h3 className="text-lg font-medium mb-2">
            What&apos;s your First Name?
          </h3>
          <div className="flex gap-4 mb-3">
            <input
              className="bg-[#eeeeee] rounded px-4 py-2 border border-gray-200 w-full text-lg placeholder:text-base"
              type="text"
              placeholder="John"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              className="bg-[#eeeeee] rounded px-4 py-2 border border-gray-200 w-full text-lg placeholder:text-base"
              type="text"
              placeholder="Doe"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <h3 className="text-lg font-medium mb-2">What&apos;s your Email?</h3>
          <input
            className="bg-[#eeeeee] mb-3 rounded px-4 py-2 border border-gray-200 w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <h3 className="text-lg font-medium mb-2">Enter your Password</h3>
          <input
            className="bg-[#eeeeee] mb-3 rounded px-4 py-2 border border-gray-200 w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="flex gap-4 mb-3">
            <div>
              <h3 className="text-lg font-medium mb-2">
              Vehicle Color:
              </h3>
              <input
                className="bg-[#eeeeee] rounded px-4 py-2 border border-gray-200 w-full text-lg placeholder:text-base"
                type="text"
                placeholder="Red"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                required
              />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">
              Vehicle Plate No.:
              </h3>
              <input
                className="bg-[#eeeeee] rounded px-4 py-2 border border-gray-200 w-full text-lg placeholder:text-base"
                type="text"
                placeholder="XY 12 XY 1234"
                value={plate}
                onChange={(e) => setPlate(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex gap-4 mb-3">
            <div>
              <h3 className="text-lg font-medium mb-2">
              Vehicle Capacity:
              </h3>
              <input
                className="bg-[#eeeeee] rounded px-4 py-2 border border-gray-200 w-full text-lg placeholder:text-base"
                type="Number"
                placeholder="4"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
                required
                min={1}
                max={8}
              />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">
              Vehicle Type:
              </h3>
              <select 
                className="bg-[#eeeeee] rounded px-4 py-2 border border-gray-200 w-full text-lg placeholder:text-base"
                type="text"
                placeholder="Car / Motorcar / Auto"
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}>
                <option value="" disabled>Select Vehicle Type</option>
                <option value="car">Car</option>
                <option value="motorcar">Motorcar</option>
                <option value="auto">Auto</option>
              </select>
              {/* <input
                className="bg-[#eeeeee] rounded px-4 py-2 border border-gray-200 w-full text-lg placeholder:text-base"
                type="text"
                placeholder="Car / Motorcar / Auto"
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                required */}
              {/* /> */}
            </div>
          </div>
          <button className="flex items-center justify-center w-full bg-black text-white font-medium py-3 rounded mt-5">
            Sign Up as Captain
          </button>
        </form>
        <p className="text-center mt-3">
          Already Have Account? &nbsp;
          <Link to="/captain-login" className="text-blue-600">
            Login As a Captain
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
