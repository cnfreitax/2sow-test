import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import Dashboard from '../../pages/Dashboard';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockHistoryPush,
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('Dashboard page', () => {
  it('should be able log out', () => {
    const { getByTestId } = render(<Dashboard />);

    const buttonLogout = getByTestId('button-logout');

    fireEvent.click(buttonLogout);

    expect(mockHistoryPush).toHaveBeenCalledWith('/');
  });
});
