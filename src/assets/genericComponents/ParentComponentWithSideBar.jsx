// ParentComponentWithSideBar.jsx
import { useState } from "react";
import { Header } from "./Header";
import Sidebar from "./SideBar";

export function ParentComponentWithSideBar({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} />
        <main className={`flex-1 p-8 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
          {children}
        </main>
      </div>
    </div>
  );
}