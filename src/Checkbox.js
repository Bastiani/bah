import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Checkbox = ({ children, id, type, className }) => (
  <div className={className}>
    <label htmlFor={id}>{children}</label>
    <input className="checkbox-style" type={type} id={id} />
  </div>
);

Checkbox.defaultProps = {
  children: '',
  id: '',
  type: 'checkbox',
  className: '',
};

Checkbox.propTypes = {
  children: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};

const CheckboxStyled = styled(Checkbox)`

`;

export default CheckboxStyled;
