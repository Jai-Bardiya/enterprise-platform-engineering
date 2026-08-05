import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />

      <div className="flex min-h-screen bg-slate-900">
        <Sidebar />

        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </>
  );
}
