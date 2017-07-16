/* https://codepen.io/rafacdb/pen/jwRWmM */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RadioStyled = styled.div`
  height: ${props => props.theme.bahFormInputDefaultHeight};
  padding: ${props => props.theme.bahFormInputRadioCheckDefaultPadding};
  vertical-align: middle;
  width: 100%;
  margin-bottom: ${props => props.theme.bahFormFieldsDefaultMarginBottom};

  /* Hide base elements */
  input[type="radio"] {
    position: absolute;
    left: -9999px;
  }

  /* Position the <label> */
  input[type="radio"] + label {
    position: relative;
    display: inline-block;
    height: 17px;
    line-height: 17px;
    padding-left: 30px;
    cursor: pointer;
  }

  /* SHARED STYLES - Radio & Checkbox - Unchecked */
  input[type="radio"] + label:before {
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

  /* RADIO - Unchecked */
  input[type="radio"]:checked + label:before,
  input[type="radio"]:not(:checked) + label:before {
    border-radius: 50%;
  }

  /* RADIO - Checked */
  input[type="radio"]:checked + label:after {
    position: absolute;
    content: '';
    top: 50%;
    transform: translateY(-50%);
    left: 6px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${props => props.theme.bahFormInputBorderColor};
  }

  /* SHARED STYLES - Radio & Checkbox - Disabled */
  input[type="radio"]:disabled + label:before {
    border-color: #bbb;
    background-color: #ddd;
  }

  input[type="radio"]:disabled + label {
    color: #999;
  }
`;

const Radio = ({ children, id, disabled, name }) =>
  (<RadioStyled>
    <input type={'radio'} disabled={disabled} name={name} id={id} />
    <label htmlFor={id}>
      {children}
    </label>
  </RadioStyled>);

Radio.defaultProps = {
  children: '',
  id: '',
  disabled: false,
  name: '',
};

Radio.propTypes = {
  children: PropTypes.string,
  id: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string,
};

export default Radio;
