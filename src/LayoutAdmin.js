import styled from 'styled-components';

const LayoutAdmin = styled.div`
  min-height: 550px;
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: row;

  @media all and (max-width: 640px) {
    flex-direction: column;
  }
`;

export const Article = styled.article`
  padding: 5px;
  background: ${props => props.theme.bahColors.gray100};
  flex: 3 1 60%;
  order: 2;

  @media all and (max-width: 640px) {
    order: 0;
  }
`;

export const Nav = styled.nav`
  border-right: 16px #342 solid;
  background: ${props => props.theme.bahColors.gray800};
  flex: 0 6 0;
  order: 1;
  overflow: hidden;
  transition: flex-basis 500ms ease-in-out;

  :hover {
    flex-basis: 10em;
  }

  @media all and (max-width: 640px) {
    order: 0;
    border-top: 16px #342 solid;
    border-right: 0px;
  }
`;

export const Aside = styled.aside`
  padding: 5px;
  background: ${props => props.theme.bahColors.gray600};
  flex: 1 6 20%;
  order: 3;

  @media all and (max-width: 640px) {
    order: 0;
    min-height: 50px;
    max-height: 50px;
  }
`;

export const Header = styled.div`
  display: block;
  padding: 5px;
  min-height: 40px;
  background: ${props => props.theme.bahColors.gray400};
`;

export const Footer = Header.extend`
  background: ${props => props.theme.bahColors.gray500};
`;

export default LayoutAdmin;
