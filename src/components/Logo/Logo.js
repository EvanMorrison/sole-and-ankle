import React from 'react';
import styled from 'styled-components/macro';

import Header from '../Header';
import { WEIGHTS } from '../../constants';

const Logo = (props) => {
  console.log(Header.MainHeader);
  return (
    <Link href="/">
      <Wrapper {...props}>Sole&amp;Ankle</Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.h1`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.bold};
`;

export default Logo;
