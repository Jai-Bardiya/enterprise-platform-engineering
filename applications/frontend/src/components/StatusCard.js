import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/solid";

export default function StatusCard({
  title,
  status,
  color,
}) {
  const healthy =
    status === "Running" ||
    status === "Healthy" ||
    status === "Configured" ||
    status === "Ready" ||
    status === "Connected";

  return (
    <div className="bg-slate-800 rounded-xl shadow-lg p-6 border border-slate-700 hover:border-sky-500 transition">

      <div className="flex items-center justify-between">

        <h3 className="text-lg font-semibold">
          {title}
        </h3>

        {healthy ? (
          <CheckCircleIcon className="w-6 h-6 text-green-400" />
        ) : (
          <ExclamationTriangleIcon className="w-6 h-6 text-red-400" />
        )}

      </div>

      <div className="mt-6">

        <p
          className="font-bold text-xl"
          style={{ color }}
        >
          {status}
        </p>

      </div>

    </div>
  );
}
