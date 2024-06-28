import React from 'react';

interface ErrorMessageProps {
    message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
    return (
        <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
            <p>{message}</p>
        </div>
    );
};

export default ErrorMessage;