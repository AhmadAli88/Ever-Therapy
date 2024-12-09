// Header.jsx
import { FaBars } from 'react-icons/fa';
import { SignOut } from './SignOut';
import PropTypes from 'prop-types';
import { IMAGES } from '../images';


export function Header({ toggleSidebar }) {

  const dummyUser = JSON.parse(localStorage.getItem('dummy_user'));

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <button onClick={toggleSidebar} className="text-gray-600 hover:text-gray-800">
            <FaBars className="w-6 h-6" />
          </button>
          <img
            src={IMAGES.PROFILE}
            alt="Logo"
            className="h-10 w-auto"
          />
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <img
              src={IMAGES.PROFILE}
              alt="Profile"
              className="h-8 w-8 rounded-full"
            />
            <span className="text-gray-700 font-medium">
              {dummyUser?.name || 'User'}
            </span>
          </div>
          <SignOut />
        </div>
      </div>
    </header>
  );
}

Header.propTypes ={
  toggleSidebar: PropTypes.func.isRequired,
}