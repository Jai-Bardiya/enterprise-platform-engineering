import { useEffect, useState } from "react";
import api from "../services/api";
import StatusCard from "./StatusCard";

export default function BackendStatus() {
  const [status, setStatus] = useState("Checking...");

  useEffect(() => {
    async function loadStatus() {
      try {
        const response = await api.get("/health");

        if (response.data.status === "UP") {
          setStatus("Running");
        } else {
          setStatus("Down");
        }
      } catch (error) {
        setStatus("Unavailable");
      }
    }

    loadStatus();
  }, []);

  return (
    <StatusCard
      title="Backend API"
      status={status}
      color={status === "Running" ? "#22c55e" : "#ef4444"}
    />
  );
}
