/* Buttons pen from https://codepen.io/valentin/pen/kahKl */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonStyled = styled.div`
  ${props =>
    props.inline
      ? `
        display: inline-block;
        vertical-align: middle;
        margin-right: 5px;
    `
      : 'display: block;'} ${props => (props.buttonLink ? 'a' : 'button')} {
    display: block;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    border: none;
    height: 40px;
    padding: 0 14px;
    border-radius: 5px;
    -webkit-box-shadow: inset 0 -3px 0 0 rgba(0, 0, 0, 0.15);
    -moz-box-shadow: inset 0 -3px 0 0 rgba(0, 0, 0, 0.15);
    box-shadow: inset 0 -3px 0 0 rgba(0, 0, 0, 0.15);
    font-size: 18px;
    line-height: 37px;
    -webkit-transition-property: background-color;
    -webkit-transition-duration: 0.2s;
    -webkit-transition-timing-function: linear;
    -moz-transition-property: background-color;
    -moz-transition-duration: 0.2s;
    -moz-transition-timing-function: linear;
    -ms-transition-property: background-color;
    -ms-transition-duration: 0.2s;
    -ms-transition-timing-function: linear;
    -o-transition-property: background-color;
    -o-transition-duration: 0.2s;
    -o-transition-timing-function: linear;
    transition-property: background-color;
    transition-duration: 0.2s;
    transition-timing-function: linear;
    background: #fafafa;
    color: #222;

    i {
      line-height: 37px;
    }
    &:active,
    &:active i {
      line-height: 40px;
      transform: translateY(2px);
    }
    ${props =>
      (props.primary ||
        props.info ||
        props.success ||
        props.warning ||
        props.danger ||
        props.inverse) &&
      `
      -webkit-box-shadow: inset 0 -3px 0 0 rgba(0, 0, 0, 0.2);
      -moz-box-shadow: inset 0 -3px 0 0 rgba(0, 0, 0, 0.2);
      box-shadow: inset 0 -3px 0 0 rgba(0, 0, 0, 0.2);
    `} ${props =>
        props.primary &&
        `
      background: #0088cc;
      color: #fafafa;
    `} ${props =>
        props.primary &&
        `
        &:hover,
        &:focus {
          background: #006da3;
          color: #fafafa;
        }
    `} ${props =>
        props.info &&
        `
        background: #49afcd;
        color: #fafafa;
    `} ${props =>
        props.info &&
        `
        &:hover,
        &:focus {
          background: #339bba;
          color: #fafafa;
        }
    `} ${props =>
        props.success &&
        `
        background: #5bb75b;
        color: #fafafa;
    `} ${props =>
        props.success &&
        `
        &:hover,
        &:focus {
          background: #47a247;
          color: #fafafa;
        }
    `} ${props =>
        props.warning &&
        `
        background: #faa732;
        color: #fafafa;
    `} ${props =>
        props.warning &&
        `
        &:hover,
        &:focus {
          background: #f9960a;
          color: #fafafa;
        }
    `} ${props =>
        props.danger &&
        `
        background: #da4f49;
        color: #fafafa;
    `} ${props =>
        props.danger &&
        `
        &:hover,
        &:focus {
          background: #d0312a;
          color: #fafafa;
        }
    `} ${props =>
        props.inverse &&
        `
        background: #363636;
        color: #fafafa;
    `} ${props =>
        props.inverse &&
        `
        &:hover,
        &:focus {
          background: #222222;
          color: #fafafa;
        }
    `} span {
      pointer-events: none;
    }
    &:hover {
      text-decoration: none;
    }
    &:focus {
      text-decoration: none;
      outline: none;
    }
    &:active {
      -webkit-box-shadow: none !important;
      -moz-box-shadow: none !important;
      box-shadow: none !important;
    }

    ${props =>
      props.small &&
      `
      height: 30px;
      padding: 0 10px;
      border-radius: 4px;
      -webkit-box-shadow: inset 0 -2px 0 0 rgba(0, 0, 0, 0.15);
      -moz-box-shadow: inset 0 -2px 0 0 rgba(0, 0, 0, 0.15);
      box-shadow: inset 0 -2px 0 0 rgba(0, 0, 0, 0.15);
      font-size: 14px;
      line-height: 28px;
      i {
        line-height: 28px;
      }
    `} ${props =>
        props.small &&
        `
        &:active,
        &:active i {
          line-height: 30px;
        }
    `} ${props =>
        props.small &&
        (props.primary ||
          props.info ||
          props.success ||
          props.warning ||
          props.danger ||
          props.inverse) &&
        `
        -webkit-box-shadow: inset 0 -2px 0 0 rgba(0, 0, 0, 0.2);
        -moz-box-shadow: inset 0 -2px 0 0 rgba(0, 0, 0, 0.2);
        box-shadow: inset 0 -2px 0 0 rgba(0, 0, 0, 0.2);
    `} ${props =>
        props.xsmall &&
        `
      height: 20px;
      min-width: 20px;
      padding-bottom: 27px;
      padding-left: 8px;
      padding-right: 8px;
      border-radius: 4px;
      -webkit-box-shadow: inset 0 -2px 0 0 rgba(0, 0, 0, 0.15);
      -moz-box-shadow: inset 0 -2px 0 0 rgba(0, 0, 0, 0.15);
      box-shadow: inset 0 -2px 0 0 rgba(0, 0, 0, 0.15);
      font-size: 14px;
      line-height: 25px;
      i {
        line-height: 25px;
      }
    `} ${props =>
        props.xsmall &&
        `
        &:active,
        &:active i {
          line-height: 25px;
        }
    `} ${props =>
        props.xsmall &&
        (props.primary ||
          props.info ||
          props.success ||
          props.warning ||
          props.danger ||
          props.inverse) &&
        `
        -webkit-box-shadow: inset 0 -2px 0 0 rgba(0, 0, 0, 0.2);
        -moz-box-shadow: inset 0 -2px 0 0 rgba(0, 0, 0, 0.2);
        box-shadow: inset 0 -2px 0 0 rgba(0, 0, 0, 0.2);
    `} ${props =>
        props.large &&
        `
        height: 50px;
        padding: 0 18px;
        border-radius: 6px;
        -webkit-box-shadow: inset 0 -4px 0 0 rgba(0, 0, 0, 0.15);
        -moz-box-shadow: inset 0 -4px 0 0 rgba(0, 0, 0, 0.15);
        box-shadow: inset 0 -4px 0 0 rgba(0, 0, 0, 0.15);
        font-size: 22px;
        line-height: 46px;
        i {
          line-height: 46px;
        }
    `} ${props =>
        props.large &&
        `
        &:active,
        &:active i {
          line-height: 50px;
        }
    `} ${props =>
        props.large &&
        (props.primary ||
          props.info ||
          props.success ||
          props.warning ||
          props.danger ||
          props.inverse) &&
        `
        -webkit-box-shadow: inset 0 -4px 0 0 rgba(0, 0, 0, 0.2);
        -moz-box-shadow: inset 0 -4px 0 0 rgba(0, 0, 0, 0.2);
        box-shadow: inset 0 -4px 0 0 rgba(0, 0, 0, 0.2);
    `} ${props =>
        props.xlarge &&
        `
        height: 60px;
        padding: 0 22px;
        border-radius: 7px;
        -webkit-box-shadow: inset 0 -5px 0 0 rgba(0, 0, 0, 0.15);
        -moz-box-shadow: inset 0 -5px 0 0 rgba(0, 0, 0, 0.15);
        box-shadow: inset 0 -5px 0 0 rgba(0, 0, 0, 0.15);
        font-size: 26px;
        line-height: 55px;
        i {
          line-height: 55px;
        }
    `} ${props =>
        props.xlarge &&
        `
        &:active,
        &:active i {
          line-height: 60px;
        }
    `} ${props =>
        props.xlarge &&
        (props.primary ||
          props.info ||
          props.success ||
          props.warning ||
          props.danger ||
          props.inverse) &&
        `
        -webkit-box-shadow: inset 0 -5px 0 0 rgba(0, 0, 0, 0.2);
        -moz-box-shadow: inset 0 -5px 0 0 rgba(0, 0, 0, 0.2);
        box-shadow: inset 0 -5px 0 0 rgba(0, 0, 0, 0.2);
    `} &:disabled {
      background: #606263;
      color: #9ea1a3;
    }
  }
`;

const Button = ({
  children,
  primary,
  info,
  success,
  warning,
  danger,
  inverse,
  inline,
  small,
  xsmall,
  large,
  xlarge,
  buttonLink,
  ...props
}) =>
  (<ButtonStyled
    primary={primary}
    info={info}
    success={success}
    warning={warning}
    danger={danger}
    inverse={inverse}
    inline={inline}
    small={small}
    xsmall={xsmall}
    large={large}
    xlarge={xlarge}
    buttonLink={buttonLink}
  >
    {buttonLink
      ? <a href="#" {...props}>
        {children}
      </a>
      : <button {...props}>
        {children}
      </button>}
  </ButtonStyled>);

Button.defaultProps = {
  children: '',
  primary: false,
  info: false,
  success: false,
  warning: false,
  danger: false,
  inverse: false,
  inline: false,
  small: false,
  xsmall: false,
  large: false,
  xlarge: false,
  buttonLink: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
  info: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  inverse: PropTypes.bool,
  inline: PropTypes.bool,
  small: PropTypes.bool,
  xsmall: PropTypes.bool,
  large: PropTypes.bool,
  xlarge: PropTypes.bool,
  buttonLink: PropTypes.bool,
};

export default Button;
