// src/hooks/useUserName.js
import { useState, useEffect } from "react";
import { fetchUserName } from "../services/authUser";

export function useUserName() {
  const [name, setName] = useState(null);

  useEffect(() => {
    const fetchAndSetUserName = async () => {
      const userName = await fetchUserName();
      setName(userName);
    };
    fetchAndSetUserName();
  }, []);

  return name;
}
