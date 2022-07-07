import Meta from './Meta';
import Banner from '../navbar/Banner';
import Footer from '../footer/Footer';
import tw, { styled } from 'twin.macro';
import React, { ReactNode } from 'react';

//######################### COMPONENT TYPES ################################################
type Props = {
  children?: ReactNode;
};

//######################### COMPONENT STYLES ###############################################
const Wrapper = styled.div`
  grid-template-rows: auto 1fr auto;
  ${tw`grid min-h-screen overscroll-contain`};
`;

const MainWrapper = tw.div``;
const Main = tw.main``;

//######################### COMPONENT #######################################################
const Layout = ({ children }: Props) => {
  return (
    <Wrapper>
      <Meta />
      <Banner />
      <MainWrapper>
        <Main>{children}</Main>
      </MainWrapper>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
