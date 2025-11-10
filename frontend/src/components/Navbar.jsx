import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/dashboard" className="text-xl font-bold text-primary-600">
              PMS
            </Link>
            <Link
              to="/dashboard"
              className="ml-8 text-gray-700 hover:text-primary-600 font-medium"
            >
              Projects
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">{user?.name}</span>
              <span className={`badge ${user?.role === 'admin' ? 'badge-high' : 'badge-low'}`}>
                {user?.role}
              </span>
            </div>
            <button
              onClick={handleLogout}
              className="btn btn-secondary text-sm"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
