import { Routes, Route } from 'react-router-dom';
import Signin from './pages/Auth/Signin';
import Signup from './pages/Auth/Signup';
import Dashboard from './pages/Dashboard';
import ProtectedRoutes from './ProtectedRoutes';

function App() {
   return (
      <div className="font-sans antialiased">
         <Routes>
            <Route element={<ProtectedRoutes />}>
               <Route index path="/" element={<Dashboard />} />
            </Route>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<h1>Not Found</h1>} />
         </Routes>
      </div>
   );
}

export default App;
