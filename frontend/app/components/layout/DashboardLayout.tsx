import Sidebar from "./Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-gray-50 dark:bg-black min-h-screen overflow-y-auto">
        {children}
      </main>
    </div>
  );
}