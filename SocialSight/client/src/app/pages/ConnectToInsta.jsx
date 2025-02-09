import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';

function ConnectToInsta() {
   const navigate = useNavigate();
   return (
      <>
         <div className="min-h-screen bg-gray-100 flex items-center justify-center ">
            <h1>Let's Connect you to Instagram</h1>
         </div>
         <Button
            onClick={() => {
               navigate('/createsharepost');
            }}
            className="z-50 bottom-15 bg-blue-500 hover:bg-blue-600 cursor-pointer fixed text-white p-3 rounded-full right-20"
         >
            <b>+</b> Create Post
         </Button>
      </>
   );
}

export default ConnectToInsta;
