import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { TextAreaStyled } from './index';

export default class TextArea extends Component {
  constructor(props) {
    super(props);
    this.state = { textareaVal: '' };
  }
  render() {
    return (
      <TextAreaStyled
        isValid={this.props.isValid}
        isInvalid={this.props.isInvalid}
        textSize={this.props.textSize}
      >
        <label htmlFor={this.props.name}>
          {this.props.children}
        </label>
        <textarea
          {...this.props}
          name={this.props.name}
          ref={(c) => {
            this.textArea = c;
          }}
          value={this.state.textareaVal}
          onChange={(event) => {
            this.setState({
              textareaVal: event.target.value,
            });
          }}
        />
      </TextAreaStyled>
    );
  }
}

TextArea.defaultProps = {
  children: '',
  name: '',
  isValid: false,
  isInvalid: false,
  textSize: '16px',
};

TextArea.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string,
  isValid: PropTypes.bool,
  isInvalid: PropTypes.bool,
  textSize: PropTypes.string,
};
