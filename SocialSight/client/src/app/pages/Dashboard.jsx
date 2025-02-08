import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { useContext } from 'react';
import Button from '../../components/common/Button';

function Dashboard() {
   const navigate = useNavigate();
   const { setIsAuthenticated, setUser } = useContext(AuthContext);

   const handleLogout = () => {
      localStorage.removeItem('user'); // Clear user data
      setIsAuthenticated(false);
      setUser(null);
      navigate('/signin');
   };

   return (
      <>
         <div className="min-h-screen bg-gray-100 flex items-center justify-center ">
            <div className="bg-white p-8 rounded shadow-lg w-96">
               <h2 className="text-2xl font-bold mb-4 ">Dashboard</h2>
               <p>Welcome to your dashboard!</p>

               <Button
                  onClick={handleLogout}
                  className="text-lg mt-4 cursor-pointer hover:bg-red-600 bg-red-500 p-2 rounded-full text-white"
               >
                  Sign out
               </Button>
            </div>
         </div>
      </>
   );
}

export default Dashboard;
