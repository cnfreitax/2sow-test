import React, { useEffect } from 'react';
import { FiXCircle } from 'react-icons/fi';

import { ToastMessage, useToast } from '../../../hooks/toast';

import { Container } from './styles';

interface ToastProps {
  message: ToastMessage;
}

const Toast: React.FC<ToastProps> = ({ message }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message.id]);

  return (
    <Container>
      <FiXCircle size={20} />

      <div>
        <strong>Aviso</strong>
        <p>Uusário deletado com sucesso.</p>
      </div>

      <button onClick={() => removeToast(message.id)} type="button">
        <FiXCircle size={28} />
      </button>
    </Container>
  );
};

export default Toast;
