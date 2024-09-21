import React from 'react';

export const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button {...props} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" />;
};
