import React, { useCallback, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Switch from 'react-switch';
import { shade } from 'polished';
import { FiUserPlus, FiPower } from 'react-icons/fi';
import { ThemeContext } from 'styled-components';

import { Container } from './styles';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  const history = useHistory();

  const signOut = useCallback(() => {
    localStorage.removeItem('@2sow:token');
    history.push('/');
  }, [history]);

  return (
    <Container>
      <Link to="/">2SowUser</Link>

      <div>
        <Link to="/user-new">
          <FiUserPlus />
        </Link>
        <button type="button" onClick={signOut}>
          <FiPower />
        </button>
        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          height={10}
          width={30}
          handleDiameter={20}
          checkedIcon={false}
          uncheckedIcon={false}
          offColor={shade(0.2, colors.background)}
          onColor={colors.background}
        />
      </div>
    </Container>
  );
};

export default Header;
