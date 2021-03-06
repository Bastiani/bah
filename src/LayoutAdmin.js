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
  background: ${props => props.theme.bahLayoutArticleBackgroundColor};
  flex: 3 1 60%;
  order: 2;

  @media all and (max-width: 640px) {
    order: 0;
  }
`;

export const Nav = styled.nav`
  border-right: 16px ${props => props.theme.bahLayoutNavBoderRightColor} solid;
  background: ${props => props.theme.bahLayoutNavBackgroundColor};
  order: 1;
  ${props =>
    (props.bahHidden
      ? `flex: 0 6 0;
        overflow: hidden;
        &:hover {
          flex-basis: 10em;
        }
      `
      : `flex: 0 6 ${props.theme.bahNavDefaultFlexBasis};`)};

  transition: flex-basis 500ms ease-in-out;

  @media all and (max-width: 640px) {
    order: 0;
    border-top: 16px #342 solid;
    border-right: 0px;
  }
`;

export const Aside = styled.aside`
  padding: 5px;
  background: ${props => props.theme.bahLayoutAsideBackgroundColor};
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
  background: ${props => props.theme.bahLayoutHeaderBackgroundColor};
`;

export const Footer = Header.extend`
  background: ${props => props.theme.bahLayoutFooterBackgroundColor};
`;

export default LayoutAdmin;
