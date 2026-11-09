import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Toast.css';

const Toast = () => {
  const { toast } = useContext(CartContext);
  if (!toast.show) return null;

  return (
    <div className={`toast toast--${toast.type} toast--show`}>
      <div className="toast__icon">
        {toast.type === 'success' && '✓'}
        {toast.type === 'error' && '✕'}
        {toast.type === 'info' && 'ℹ'}
      </div>
      <p className="toast__message">{toast.message}</p>
    </div>
  );
};

export default Toast;

