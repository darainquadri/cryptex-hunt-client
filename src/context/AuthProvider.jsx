import { createContext, useState, useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const AuthContext = createContext({
  isAuthenticated: false,
  user: null,
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [quesError, setQuesError] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        setIsLoading(true);
        const res = await axios.post(
          `${API_URL}/google-auth`,
          {},
          {
            headers: { Authorization: `Bearer ${response.access_token}` },
          }
        );
        setUser(res.data.user);
        setIsAuthenticated(true);
        setError(null);
        localStorage.setItem("token", res.data.user.token);
      } catch (err) {
        setError(err?.response?.data?.message);
      } finally {
        setIsLoading(false);
      }
    },
    onError: () => console.error("Google Login Failed"),
  });

  const logout = () => {
    setUser({});
    setIsLoading(false);
    setIsAuthenticated(false);
    localStorage.removeItem("token");
  };

  const checkAnswer = async (answer) => {
    try {
      setIsLoading(true);
      const res = await axios.post(
        `${API_URL}/submit-answer`,
        { answer },
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      );
      setUser(res.data.user);
      setIsAuthenticated(true);
      setQuesError(null);
      setQuesError(null);
      localStorage.setItem("token", res.data.user.token);
    } catch (err) {
      if (err.response.data == "Incorrect Answer") {
        setQuesError(err.response.data);
        return;
      } else {
        setError(err.response.data.message);
        logout();
      }
    } finally {
      setIsLoading(false);
    }
  };

  const getLeaderboard = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`${API_URL}/getleaderboard`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setLeaderboard(res.data.leaderboard);
    } catch (err) {
      logout();
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchState = async () => {
      if (localStorage.getItem("token")) {
        try {
          const res = await axios.get(`${API_URL}/protected`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          setUser(res.data.user);
          setIsAuthenticated(true);
          localStorage.setItem("token", res.data.user.token);
        } catch (err) {
          setError(err.response.data.message);
          logout();
        }
      }
    };
    fetchState();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
        isLoading,
        error,
        checkAnswer,
        leaderboard,
        getLeaderboard,
        quesError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
