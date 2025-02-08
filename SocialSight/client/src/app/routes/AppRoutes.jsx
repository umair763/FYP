import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import ConnectToFacebook from '../pages/ConnectToFacebook';
import ConnectToInsta from '../pages/ConnectToInsta';
import ConnectToTwitter from '../pages/ConnectToTwitter';
import ConnectToYoutube from '../pages/ConnectToYoutube';
import ConnectToLinkedin from '../pages/ConnectToLinkedin';
import ProtectedRoutes from '../../ProtectedRoutes';
import Layout from '../layout/Layout';
import Scheduling from '../pages/Scheduling';
import Analytics from '../pages/Analytics';
import Calendar from '../pages/Calendar';
import Sentiment from '../pages/Sentiment';
import Comparison from '../pages/Comparison';
import Setting from '../pages/Setting';

function AppRoutes() {
   return (
      <Routes>
         <Route element={<ProtectedRoutes />}>
            {/* Protected Routes */}
            <Route
               path="/"
               element={
                  <Layout>
                     <Dashboard />
                  </Layout>
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
               path="/linkedin"
               element={
                  <Layout>
                     <ConnectToLinkedin />
                  </Layout>
               }
            />
         </Route>
         {/* Public Routes (outside ProtectedRoutes) */}
      </Routes>
   );
}

export default AppRoutes;
