import {Link} from "react-router-dom"

const Launch = () => {
  return (
    <div className="bg-cover bg-center bg-[url(https://media.istockphoto.com/id/1283670525/video/mini-city-with-a-taxi-transportation-background-3d-rendering.jpg?s=640x640&k=20&c=HTGwH2K-NbNzw4zLxSNUD-sMFlshA5mRA1Y9D9EM-oI=)] h-screen pt-8 flex justify-between flex-col w-full bg-red-400">
      <img className="w-16 ml-8 invert" src="https://imgs.search.brave.com/iUu_pSUB4XC14yY3lkGujRPUI3q11j4kizg-ipgasO8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1OTc2ODc3/OXViZXItbG9nby13/aGl0ZS5wbmc" alt="" />
      <div className="bg-white pb-7 py-4 px-4">
        <h2 className="text-3xl font-bold text-center">Get Started with Uber</h2>
        <Link to="/login" className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5">Continue</Link>
      </div>
      
    </div>
  )
}

export default Launch