import StatusCard from "../components/StatusCard";
import BackendStatus from "../components/BackendStatus";
import SystemMetrics from "../components/SystemMetrics";
import SystemOverview from "../components/charts/SystemOverview";

export default function Dashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Jai Enterprise Platform
        </h1>

        <p className="text-slate-400 mt-2">
          Production Platform Engineering Dashboard
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        <StatusCard
          title="Docker"
          status="Running"
          color="#22c55e"
        />

        <StatusCard
          title="Kubernetes"
          status="Healthy"
          color="#3b82f6"
        />

        <BackendStatus />

        <StatusCard
          title="MySQL"
          status="Connected"
          color="#f59e0b"
        />

        <StatusCard
          title="AWS"
          status="Configured"
          color="#ff9900"
        />

        <StatusCard
          title="Jenkins"
          status="Ready"
          color="#ef4444"
        />

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

        <SystemMetrics />

        <SystemOverview />

      </div>

    </div>
  );
}
