import { getTokenData } from "@/utils/token";
import { useEffect, useState } from "react";

export const useNotification = () => {
  const [loading, setLoading] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const getNotifications = (userId: string) => {
    setLoading(true);

    fetch(`http://localhost:5276/api/notification/${userId}`, {
      method: "GET",
    })
      .then(async (res) => res.json())
      .then((data) => {
        setLoading(false);
        setNotifications(data);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const info = getTokenData(token);

      // eslint-disable-next-line react-hooks/set-state-in-effect
      getNotifications(info.userId);
    }
  }, []);

  return { loading, notifications };
};
