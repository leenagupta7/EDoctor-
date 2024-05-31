import React from 'react';
const Success = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-blue-100">
            <div className="bg-white p-4 rounded text-gray-500">
                <h1>Payment Successful!</h1>
                <p>Thank you for your purchase.</p>
            </div>
        </div>
    );
}

export default Success;