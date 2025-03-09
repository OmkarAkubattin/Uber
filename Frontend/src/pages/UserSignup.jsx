import { Link, useNavigate } from "react-router-dom"
import { useState, useContext } from "react"
import axios from 'axios'
import { UserDataContext } from "../context/UserContext";

const UserSignup = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const [userData, setUserData] = useState({})

  const navigate = useNavigate()

  const { user, setUser } = useContext(UserDataContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
    }
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)
    console.log(response.status)
    if(response.status === 200){
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }
  }
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
              What&aposs your First Name?
            </h3>
          <div className="flex gap-4 mb-4">
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
          <h3 className="text-lg font-medium mb-2">What&aposs your Email?</h3>
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
            Sign Up
          </button>
        </form>
        <p className="text-center mt-3">
          Already Have Account? &nbsp;
          <Link to="/login" className="text-blue-600">
            Login As a User
          </Link>
        </p>
      </div>
    </div>
  )
}

export default UserSignup
