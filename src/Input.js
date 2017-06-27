import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputStyled = styled.div`
  input {
    appearance: none;
    background-color: ${props => props.theme.bahFormInputBackgroundColor};
    border: 2px solid ${props => props.theme.bahFormInputBorderColor};
    border-radius: ${props => props.theme.bahFormFieldsDefaultBorder};
    color: inherit;
    font-size: 1rem;
    height: ${props => props.theme.bahFormInputDefaultHeight};
    padding: ${props => props.theme.bahFormInputDefaultPadding};
    vertical-align: middle;
    box-shadow:inset 0 2px 3px ${props => props.theme.bahFormInputBoxShadowColor};
    width: 100%;
    margin-bottom: 10px;

    &:disabled {
      background-color: ${props => props.theme.bahFormInputDisabledColor};
    }

    &:focus {
      box-shadow:inset 0 2px 3px ${props => props.theme.bahFormInputFocusShadowColor};
      border-color: ${props => props.theme.bahFormInputFocusBorderColor};
      outline: 0;
    }

    ${props => props.isValid && `
      box-shadow:inset 0 2px 3px ${props.theme.bahColors.green100};
      border-color: ${props.theme.bahColors.green300};
      outline: 0;
      &:focus {
        box-shadow:inset 0 2px 3px ${props.theme.bahColors.green200};
        border-color: ${props.theme.bahColors.green400};
        outline: 0;
      }
    `}

    ${props => props.isInvalid && `
      box-shadow:inset 0 2px 3px ${props.theme.bahColors.red100};
      border-color: ${props.theme.bahColors.red300};
      outline: 0;
      &:focus {
        box-shadow:inset 0 2px 3px ${props.theme.bahColors.red200};
        border-color: ${props.theme.bahColors.red400};
        outline: 0;
      }
    `}
  }
`;

const Input = ({ children, name, type, disabled, ...props }) => (
  <InputStyled>
    <label htmlFor={name}>{children}</label>
    <input {...props} disabled={disabled} type={type} name={name} />
  </InputStyled>
);

export const InputRedux = ({ disabled, ...props }) => (
  <InputStyled>
    <label htmlFor={props.input.name}>{props.label}</label>
    <input
      {...props.input}
      placeholder={props.placeholder}
      readOnly={props.readOnly}
      type={props.type}
      disabled={disabled}
    />
  </InputStyled>
);

Input.defaultProps = {
  children: '',
  name: '',
  type: 'text',
  disabled: false,
};

Input.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

InputRedux.defaultProps = {
  name: '',
  label: '',
  input: {},
  placeholder: '',
  type: 'text',
  readOnly: false,
  disabled: false,
};

InputRedux.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  input: PropTypes.object,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Input;
