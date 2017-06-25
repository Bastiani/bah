import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = ({ children, id, type, className, disabled }) => (
  <div className={className}>
    <label htmlFor={id}>{children}</label>
    <input disabled={disabled} type={type} id={id} />
  </div>
);

Input.defaultProps = {
  children: '',
  id: '',
  type: 'text',
  className: '',
  disabled: false,
};

Input.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

const InputStyled = styled(Input)`
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

export default InputStyled;
