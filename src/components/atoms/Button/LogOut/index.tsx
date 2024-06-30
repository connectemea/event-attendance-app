import React, { ReactNode } from 'react';

interface LogOutButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: ReactNode;
}

const LogOutButton: React.FC<LogOutButtonProps> = ({ onClick, disabled = false, children }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded cursor-pointer w-full"
    >
      {children}
    </button>
  );
};

export default LogOutButton;
