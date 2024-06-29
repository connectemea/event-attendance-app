import React, { ReactNode } from 'react';

interface SubmitButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: ReactNode;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick, disabled = false, children }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={disabled}
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded cursor-pointer"
    >
      {children}
    </button>
  );
};

export default SubmitButton;
