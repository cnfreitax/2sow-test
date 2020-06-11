import React from 'react';
import {
  Redirect,
  RouteProps as ReactDomProps,
  Route as ReactDomRoute,
} from 'react-router-dom';

import { isAuthenticated } from './auth';

interface ReactProps extends ReactDomProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}
const Route: React.FC<ReactProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const auth = isAuthenticated();

  return (
    <ReactDomRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!auth ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
