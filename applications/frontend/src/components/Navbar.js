import { CloudIcon, UserCircleIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  return (
    <header className="h-16 bg-slate-800 border-b border-slate-700 flex items-center justify-between px-8 shadow-lg">
      <div className="flex items-center gap-3">
        <CloudIcon className="w-8 h-8 text-sky-400" />

        <div>
          <h1 className="text-xl font-bold text-white">
            Jai Enterprise Platform
          </h1>

          <p className="text-xs text-slate-400">
            Platform Engineering Dashboard
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <UserCircleIcon className="w-8 h-8 text-white" />

        <div>
          <p className="text-sm font-semibold">Jai Bardiya</p>
          <p className="text-xs text-slate-400">Administrator</p>
        </div>
      </div>
    </header>
  );
}
