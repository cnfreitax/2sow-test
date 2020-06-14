import React, { createContext, useContext, useState, useCallback } from 'react';
import { uuid } from 'uuidv4';

import ToastContainer from '../components/ToastContainer';

interface ToastContext {
  addToast(): void;
  removeToast(id: string): void;
}

export interface ToastMessage {
  id: string;
}

const Toast = createContext<ToastContext>({} as ToastContext);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);
  const addToast = useCallback(() => {
    const id = uuid();

    const toast = {
      id,
    };

    setMessages([...messages, toast]);
  }, [messages]);

  const removeToast = useCallback((id: string) => {
    setMessages((state) => state.filter((message) => message.id !== id));
  }, []);

  return (
    <Toast.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </Toast.Provider>
  );
};

function useToast(): ToastContext {
  const context = useContext(Toast);

  if (!context) {
    throw new Error('useToas muste be used with a ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };
