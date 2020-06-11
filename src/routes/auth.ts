export const isAuthenticated = (): string | null =>
  localStorage.getItem('@2sow:token');
