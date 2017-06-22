import styled from 'styled-components';

const Sidebar = styled.div`
  background-color: #222;
  overflow: hidden;
  height: auto;
  font-family: ${props => props.theme.bahFontFamily};
  font-size: 12px;
`;

export const SidebarItem = styled.div`
  input {
    display: none;
  }
  label {
    display: block;
    padding: 10px;
    background: #1e1e1e;
    font-size: 20px;
    cursor: pointer;
    color: #fff;
    border-bottom: 2px solid #3fa338;
  }
  label:hover {
    background-color: #3fa338;
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
    background-color: #ffffff;
    color: #333;
    border-bottom: solid 2px #aaa;
  }
  ul li a:hover {
    background-color: #F5F5F5;
  }
  input:checked~ul {
    height: auto;
    max-height: 200px;
    transform: all;
  }
`;

export default Sidebar;
