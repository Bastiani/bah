import styled from 'styled-components';

const Sidebar = styled.div`
  background-color: ${props => props.theme.bahSidebarBgColor};
  overflow: hidden;
  height: auto;
  font-family: ${props => props.theme.bahFontFamily};
  font-size: ${props => props.theme.bahSidebarFonteSize};
`;

export const SidebarItem = styled.div`
  input {
    display: none;
  }
  label {
    display: block;
    padding: 10px;
    background: ${props => props.theme.bahSidebarItemLabelBgColor};
    font-size: ${props => props.theme.bahSidebarItemLabelFonteSize};
    cursor: pointer;
    color: ${props => props.theme.bahSidebarItemLabelTextColor};
    border-bottom: ${props => props.theme.bahSidebarItemLabelBorderSize} solid
      ${props => props.theme.bahSidebarItemLabelBorderColor};
  }
  label:hover {
    background-color: ${props => props.theme.bahSidebarItemLabelHoverBgColor};
  }
  ul {
    width: 100%;
    list-style: none;
    overflow: hidden;
    max-height: 0;
    transition: all .2s linear;
  }
  ul li a {
    width: 100%;
    height: 20px;
    padding: 10px;
    display: block;
    text-decoration: none;
    background-color: ${props => props.theme.bahSidebarItemUlBgColor};
    color: ${props => props.theme.bahSidebarItemUlTextColor};
    border-bottom: solid ${props => props.theme.bahSidebarItemUlBorderSize}
      ${props => props.theme.bahSidebarItemUlBorderColor};
  }
  ul li a:hover {
    background-color: ${props => props.theme.bahSidebarItemUlHoverBgColor};
  }
  input:checked ~ ul {
    height: auto;
    max-height: 600px;
    transform: all;
  }
`;

export default Sidebar;
