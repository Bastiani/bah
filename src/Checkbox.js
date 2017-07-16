/* https://codepen.io/rafacdb/pen/jwRWmM */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CheckboxStyled = styled.div`
  height: ${props => props.theme.bahFormInputDefaultHeight};
  padding: ${props => props.theme.bahFormInputRadioCheckDefaultPadding};
  vertical-align: middle;
  width: 100%;
  margin-bottom: ${props => props.theme.bahFormFieldsDefaultMarginBottom};

  /* Hide base elements */
  input[type="checkbox"] {
    position: absolute;
    left: -9999px;
  }

  /* Position the <label> */
  input[type="checkbox"] + label {
    position: relative;
    display: inline-block;
    height: 17px;
    line-height: 17px;
    padding-left: 30px;
    cursor: pointer;
  }

  /* SHARED STYLES - Radio & Checkbox - Unchecked */
  input[type="checkbox"] + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    border: 2px solid ${props => props.theme.bahFormInputBorderColor};
    background-color: ${props => props.theme.bahFormInputBackgroundColor};
  }

  /* CHECKBOX - Unchecked */
  input[type="checkbox"]:not(:checked) + label:before {
    /* Add styles if needed */
  }

  /* CHECKBOX - Checked ( CSS Tick ) */
  input[type="checkbox"]:checked + label:after {
    position: absolute;
    content: "";
    left: 7px;
    top: 0px;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    /* Short Arm */
    width: 5px;
    border-bottom: 3px solid ${props => props.theme.bahFormInputBorderColor};
    /* Long Arm */
    height: 11px;
    border-right: 3px solid ${props => props.theme.bahFormInputBorderColor};
  }

  /* SHARED STYLES - Radio & Checkbox - Disabled */
  input[type="checkbox"]:disabled + label:before {
    border-color: #bbb;
    background-color: #ddd;
  }

  input[type="checkbox"]:disabled + label {
    color: #999;
  }
`;

const Checkbox = ({ children, disabled, name, id }) =>
  (<CheckboxStyled>
    <input type={'checkbox'} disabled={disabled} name={name} id={id} />
    <label htmlFor={id}>
      {children}
    </label>
  </CheckboxStyled>);

Checkbox.defaultProps = {
  children: '',
  name: '',
  id: '',
  disabled: false,
};

Checkbox.propTypes = {
  children: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Checkbox;
