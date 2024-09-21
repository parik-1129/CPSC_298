import React from 'react';

export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <input {...props} className="p-2 border rounded-md" />;
};
