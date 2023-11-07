import { useRouter } from "next/router";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import ToastContext from "./ToastsContext";
import axios from "axios";

const GlobalContext = createContext();

const AuthProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState();
  const [user, setUser] = useState();
  const [notification, setNotification] = useState([]);
  const [chats, setChats] = useState();
  const [allUser, setAllUser] = useState([]);
  const { addToast } = useContext(ToastContext);
  const [token, setToken] = useState("");
  // const history = useHistory();
  const router = useRouter();
  const invokeServer = useCallback(async (method, route, data) => {
    if (method === "post") {
      return axios.post(route, data);
    } else if (method === "get") {
      return axios.get(route);
    } else if (method === "put") {
      return axios.put(route, data);
    } else if (method === "delete") {
      return axios.delete(route);
    }
  }, []);

  // Create Account Data & Login Account
  const handleCreateUser = async (values) => {
    try {
      const result = await invokeServer("post", "/api/auth", values);
      if (result.status === 200) {
        addToast(result?.data.message, "success");
      } else {
        addToast(result?.data.message, "error");
      }
      return result; // Make sure you return the result
    } catch (err) {
      addToast(err?.response?.data?.message || err?.message, "error");
      throw err; // Rethrow the error to be caught by the calling function
    }
  };
  // Get User
  const handleUser = async (id) => {
    try {
      const result = await invokeServer("get", `/api/auth/${id}`);
      if (result.status === 200) {
        setUser(result?.data);
      }
      return result; // Make sure you return the result
    } catch (err) {
      addToast(err?.response?.data?.message || err?.message, "error");
      throw err; // Rethrow the error to be caught by the calling function
    }
  };
  // Get vehicle
  const handleGetVehicle = async (id) => {
    try {
      const result = await invokeServer("get", `/api/vehicle/${id}`);
      return result; // Make sure you return the result
    } catch (err) {
      addToast(err?.response?.data?.message || err?.message, "error");
      throw err; // Rethrow the error to be caught by the calling function
    }
  };

  useEffect(() => {
    const userId = localStorage.getItem("id");
    if (userId) {
      handleUser(userId);
    }
  }, []);

  // Create Account Data & Login Account
  const handleCreateVehicle = async (values) => {
    try {
      const result = await invokeServer("post", "/api/vehicle", values);
      if (result.status === 200) {
        addToast(result?.data.message, "success");
      } else {
        addToast(result?.data.message, "error");
      }
      return result; // Make sure you return the result
    } catch (err) {
      addToast(err?.response?.data?.message || err?.message, "error");
      throw err; // Rethrow the error to be caught by the calling function
    }
  };

  const handleCreateCertificate = async (values) => {
    try {
      const result = await invokeServer("post", "/api/certificate", values);
      if (result.status === 200) {
        addToast(result?.data.message, "success");
      } else {
        addToast(result?.data.message, "error");
      }
      return result;
    } catch (err) {
      addToast(err?.response?.data?.message || err?.message, "error");
      throw err;
    }
  };

  const handleSearchCertificate = async (id, values) => {
    try {
      const result = await invokeServer(
        "post",
        `/api/certificate/${id}`,
        values
      );
      if (result.status === 200) {
        addToast(result?.data.message, "success");
      } else {
        addToast(result?.data.message, "error");
      }
      return result;
    } catch (err) {
      addToast(err?.response?.data?.message || err?.message, "error");
      throw err;
    }
  };
  return (
    <GlobalContext.Provider
      value={{
        selectedChat,
        setSelectedChat,
        user,
        setUser,
        notification,
        setNotification,
        chats,
        setChats,
        allUser,
        setAllUser,
        handleCreateUser,
        handleCreateVehicle,
        handleGetVehicle,
        handleCreateCertificate,
        handleSearchCertificate
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;

export { AuthProvider };
