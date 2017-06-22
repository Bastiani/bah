import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Radio = ({ children, id, type, className, disabled, name }) => (
  <div className={className}>
    <label htmlFor={id}>{children}</label>
    <input name={name} disabled={disabled} type={type} id={id} />
  </div>
);

Radio.defaultProps = {
  children: '',
  id: '',
  type: 'radio',
  className: '',
  disabled: false,
  name: '',
};

Radio.propTypes = {
  children: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string,
};

const RadioStyled = styled(Radio)`
  input {
    border: 2px solid black;
  }
  label {
    margin-right: 5px;
  }
`;

export default RadioStyled;
