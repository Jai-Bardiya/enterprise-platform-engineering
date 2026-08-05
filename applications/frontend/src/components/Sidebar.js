import {
  HomeIcon,
  CircleStackIcon,
  CubeIcon,
  CloudIcon,
  CommandLineIcon,
  ChartBarIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const menus = [
  { name: "Dashboard", icon: HomeIcon },
  { name: "Kubernetes", icon: CubeIcon },
  { name: "Docker", icon: CircleStackIcon },
  { name: "AWS", icon: CloudIcon },
  { name: "Jenkins", icon: CommandLineIcon },
  { name: "Monitoring", icon: ChartBarIcon },
  { name: "Settings", icon: Cog6ToothIcon },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-800 border-r border-slate-700">
      <div className="p-6">
        <h2 className="text-slate-300 text-lg font-semibold">
          Navigation
        </h2>

        <ul className="mt-6 space-y-2">
          {menus.map((menu) => (
            <li
              key={menu.name}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700 cursor-pointer transition"
            >
              <menu.icon className="w-5 h-5 text-sky-400" />
              <span>{menu.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
