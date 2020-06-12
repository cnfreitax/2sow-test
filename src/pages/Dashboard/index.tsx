import React, { useCallback } from 'react';
import { FiUser, FiPower } from 'react-icons/fi';
import { useHistory, Link } from 'react-router-dom';

import { Container, Header } from './styles';

const Dashboard: React.FC = () => {
  const history = useHistory();

  const signOut = useCallback(() => {
    localStorage.removeItem('@2sow:token');

    history.push('/');
  }, [history]);

  return (
    <Container>
      <Header>
        <Link to="/">2SowUser</Link>

        <div>
          <Link to="/user-new">
            <FiUser />
          </Link>
          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </div>
      </Header>
    </Container>
  );
};

export default Dashboard;
