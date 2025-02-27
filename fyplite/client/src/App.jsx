// App.jsx
import React from 'react';
import './index.css';
import CreatePost from './components/CreatePost';

const App = () => {
   return (
      <>
         <div className="p-8 flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Welcome to the App</h1>
            <CreatePost />
            <div className="space-y-4"></div>

         </div>
      </>
   );
};

export default App;
