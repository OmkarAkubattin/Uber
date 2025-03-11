import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { captain, setCaptain } = useContext(CaptainDataContext);
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
          setCaptain(res.data.captain);
        }
      } catch (error) {
        console.error("Authentication error:", error);
        localStorage.removeItem("token");
        navigate("/captain-login");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCaptainData();
  }, [token, navigate, setCaptain]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default CaptainProtectWrapper;
