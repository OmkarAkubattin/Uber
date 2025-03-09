import {Route, Routes} from "react-router-dom"
import Launch from "./pages/Launch"
import UserSginup from "./pages/UserSignup"
import UserLogin from "./pages/UserLogin"
import UserLogout from "./pages/UserLogout"
import CaptainSignup from "./pages/CaptainSignup"
import CaptainLogin from "./pages/CaptainLogin"
import Home from "./pages/Home"
import CaptainHome from "./pages/CaptainHome"
import UserProtectWrapper from "./pages/UserProtectWrapper";
import CaptainProtectWrapper from "./pages/CaptainProtectWrapper";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Launch />} />
      <Route path="/signup" element={<UserSginup />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/logout" element={<UserLogout />} />
      <Route path="/captain-login" element={<CaptainLogin />} />
      <Route path="/captain-signup" element={<CaptainSignup />} />
      <Route path="/captain-logout" element={<CaptainSignup />} />
      <Route path="/home" element={
        <UserProtectWrapper><Home /></UserProtectWrapper>
        } />
      <Route path="/captain-home" element={
        <CaptainProtectWrapper><CaptainHome /></CaptainProtectWrapper>
        } />

    </Routes>
  )
}

export default App