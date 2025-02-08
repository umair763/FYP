import { useNavigate } from 'react-router-dom';

function Dashboard() {
   const navigate = useNavigate();

   const handleLogout = () => {
      localStorage.removeItem('user');
      navigate('/signin'); // Redirect to signin after logout
   };

   return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center ">
         <div className="bg-white p-8 rounded shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4 ">Dashboard</h2>
            <p>Welcome to your dashboard!</p>

            <button onClick={handleLogout} className="mt-4 py-2 px-4 bg-red-500 text-white rounded">
               Logout
            </button>
         </div>
      </div>
   );
}

export default Dashboard;
