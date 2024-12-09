// Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SidebarData } from './SideBarData';

export default function Sidebar({ isOpen }) {
  const location = useLocation();

  const renderNavItem = (item) => {
    const isActive = location.pathname === item.path;
    
    return (
      <div key={item.title} className="mb-2">
        <Link
          to={item.path || '#'}
          className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
            isActive
              ? 'bg-blue-100 text-blue-700'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          {item.icon && <span className="w-5 h-5">{item.icon}</span>}
          <span className="font-medium">{item.title}</span>
        </Link>
        
        {item.subNav && (
          <div className="ml-4 mt-2 space-y-2">
            {item.subNav.map((subItem) => (
              <Link
                key={subItem.title}
                to={subItem.path || '#'}
                className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                  location.pathname === subItem.path
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {subItem.icon && (
                  <span className="w-4 h-4">{subItem.icon}</span>
                )}
                <span className="text-sm">{subItem.title}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside
      className={`fixed left-0 top-[73px] h-[calc(100vh-73px)] bg-white shadow-lg transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-0'
      } overflow-hidden`}
    >
      <nav className="p-4 h-full overflow-y-auto">
        {SidebarData.map(renderNavItem)}
      </nav>
    </aside>
  );
}