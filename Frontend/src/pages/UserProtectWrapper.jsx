import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";

const UserProtectWrapper = ({children}) => {
  const token =  localStorage.getItem('token')
  const navigate = useNavigate()
  const { user, setUser } = useContext(UserDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Redirect if token is missing
    if (!token) {
      navigate("/captain-login");
      return;
    }

    const fetchCaptainData = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.status === 200) {
          setUser(res.data.user);
        }
      } catch (error) {
        console.error("Authentication error:", error);
        localStorage.removeItem("token");
        navigate("/user-login");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCaptainData();
  }, [token, navigate, setUser]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}

export default UserProtectWrapper