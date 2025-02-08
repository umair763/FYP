import React, { useContext } from 'react';
import { Routes, Route,Navigate } from 'react-router-dom';
import Signup from '../pages/Auth/Signup';
import Signin from '../pages/Auth/Signin';
import Dashboard from '../pages/Dashboard';
import ConnectToFacebook from '../pages/ConnectToFacebook';
import ConnectToInsta from '../pages/ConnectToInsta';
import ConnectToTwitter from '../pages/ConnectToTwitter';
import ConnectToYoutube from '../pages/ConnectToYoutube';
import AddLinkedin from '../pages/AddLinkedin';
import ProtectedRoutes from '../../ProtectedRoutes';
import Layout from '../layout/Layout';
import Scheduling from '../pages/Scheduling';
import Analytics from '../pages/Analytics';
import Calendar from '../pages/Calendar';
import Sentiment from '../pages/Sentiment';
import Comparison from '../pages/Comparison';
import Setting from '../pages/Setting';
import ManageChannel from '../pages/ManageChannel';
import ManageTag from '../pages/ManageTag';
import AuthContext from '../context/AuthContext';

function AppRoutes() {
   const { isAuthenticated } = useContext(AuthContext);

   return (
      <Routes>
         <Route path="/Signup" element={<Signup />} />
         <Route path="/Signin" element={<Signin />} />

         <Route element={<ProtectedRoutes />}>
            {/* Protected Routes */}
            <Route
               path="/"
               element={
                  isAuthenticated ? (
                     <Layout>
                        <Dashboard />
                     </Layout>
                  ) : (
                     <Navigate to="/signin" replace />
                  )
               }
            />

            <Route
               path="/connecttofacebook"
               element={
                  <Layout>
                     <ConnectToFacebook />
                  </Layout>
               }
            />
            <Route
               path="/connecttoinsta"
               element={
                  <Layout>
                     <ConnectToInsta />
                  </Layout>
               }
            />
            <Route
               path="/connecttotwitter"
               element={
                  <Layout>
                     <ConnectToTwitter />
                  </Layout>
               }
            />
            <Route
               path="/connecttoyoutube"
               element={
                  <Layout>
                     <ConnectToYoutube />
                  </Layout>
               }
            />
            <Route
               path="/scheduling"
               element={
                  <Layout>
                     <Scheduling />
                  </Layout>
               }
            />
            <Route
               path="/analytics"
               element={
                  <Layout>
                     <Analytics />
                  </Layout>
               }
            />
            <Route
               path="/calendar"
               element={
                  <Layout>
                     <Calendar />
                  </Layout>
               }
            />
            <Route
               path="/sentiment"
               element={
                  <Layout>
                     <Sentiment />
                  </Layout>
               }
            />
            <Route
               path="/comparison"
               element={
                  <Layout>
                     <Comparison />
                  </Layout>
               }
            />
            <Route
               path="/setting"
               element={
                  <Layout>
                     <Setting />
                  </Layout>
               }
            />
            <Route
               path="/AddLinkedin"
               element={
                  <Layout>
                     <AddLinkedin />
                  </Layout>
               }
            />
            <Route
               path="/manageTag"
               element={
                  <Layout>
                     <ManageTag />
                  </Layout>
               }
            />
            <Route
               path="/manageChannel"
               element={
                  <Layout>
                     <ManageChannel />
                  </Layout>
               }
            />
         </Route>
         {/* Public Routes (outside ProtectedRoutes) */}
         <Route path="*" element={<Navigate to={isAuthenticated ? '/' : '/signin'} replace />} />
      </Routes>
   );
}

export default AppRoutes;
