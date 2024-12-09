// SignOut.jsx

import { BsBoxArrowRight } from "react-icons/bs";

export function SignOut() {
  const logout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      localStorage.removeItem("dummy_user");
      window.location.href = "/";
    }
  };

  return (
    <button
      onClick={logout}
      className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
    >
      <BsBoxArrowRight className="w-5 h-5" />
      <span>Log out</span>
    </button>
  );
}