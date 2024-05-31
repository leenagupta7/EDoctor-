import React from 'react';

const Cancel = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-blue-100">
            <div className="bg-white p-4 rounded text-gray-500">
                <h1>Payment Cancelled</h1>
                <p>Your payment was cancelled. Please try again.</p>
            </div>
        </div>
    );
}

export default Cancel;
