import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import Signin from '../../pages/Signin';

const mockHistoryPush = jest.fn();
const mockAddToast = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockHistoryPush,
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

jest.mock('../../hooks/toast', () => {
  return {
    useToast: () => ({
      addToast: mockAddToast,
    }),
  };
});

describe('SignIn Page', () => {
  beforeEach(() => {
    mockHistoryPush.mockClear();
  });
  it('should be able SignIn', async () => {
    const { getByPlaceholderText, getByText } = render(<Signin />);

    const emailInput = getByPlaceholderText('E-mail');
    const passwordInput = getByPlaceholderText('Senha');

    const buttonSubmit = getByText('Entrar');

    fireEvent.change(emailInput, { target: { value: 'emailtest@gmail.com' } });
    fireEvent.change(passwordInput, { target: { value: '1234' } });

    fireEvent.click(buttonSubmit);

    await wait(() => {
      expect(mockHistoryPush).toHaveBeenCalledWith('/dashboard');
    });
  });

  it('should not be able signin with invalid credencials', async () => {
    const { getByPlaceholderText, getByText } = render(<Signin />);

    const emailInput = getByPlaceholderText('E-mail');
    const passwordInput = getByPlaceholderText('Senha');
    const buttonSubmit = getByText('Entrar');

    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.change(passwordInput, { target: { value: '123456' } });
    fireEvent.click(buttonSubmit);

    await wait(() => {
      expect(mockAddToast).toHaveBeenCalledWith(
        expect.objectContaining({
          type: 'error',
        }),
      );
    });
  });
});
