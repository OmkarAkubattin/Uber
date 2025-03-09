import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserLogout = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem("token");
  console.log(token);
  const logout = () => {
    axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          localStorage.removeItem("token");
          console.log('User Logout')
          navigate('/login')
        }
      });
  };
  logout();
  return <div>UserLogout</div>;
};

export default UserLogout;
