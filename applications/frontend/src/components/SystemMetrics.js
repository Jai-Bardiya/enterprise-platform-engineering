import { useEffect, useState } from "react";
import api from "../services/api";

export default function SystemMetrics() {

    const [metrics, setMetrics] = useState({
        cpu: 0,
        memory: 0,
        disk: 0
    });

    useEffect(() => {

        const loadMetrics = async () => {
            try {
                const response = await api.get("/system");
                setMetrics(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        loadMetrics();

    }, []);

    return (
        <div className="status-card">
            <h3>System Metrics</h3>

            <p>CPU Usage : {metrics.cpu}%</p>

            <p>Memory Usage : {metrics.memory}%</p>

            <p>Disk Usage : {metrics.disk}%</p>

        </div>
    );
}
