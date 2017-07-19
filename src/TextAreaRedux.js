import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button, TextAreaStyled } from './index';

export default class TextAreaRedux extends Component {
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
        <Button
          buttonLink
          success
          inline
          small
          onClick={() => {
            const textVal = this.textAreaRedux;
            const cursorStart = textVal.selectionStart;
            const cursorEnd = textVal.selectionEnd;
            const text = this.state.textareaVal;
            this.setState({
              textareaVal: `${text.substr(0, cursorStart)}***${text.substr(
                cursorStart,
                cursorEnd - cursorStart,
              )}***${text.substr(cursorEnd)}`,
            });
          }}
        >
          Bold
        </Button>
        <label htmlFor={this.props.input.name}>
          {this.props.label}
        </label>
        <textarea
          {...this.props.input}
          ref={(c) => {
            this.textAreaRedux = c;
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

TextAreaRedux.defaultProps = {
  name: '',
  label: '',
  input: {},
  isValid: false,
  isInvalid: false,
  textSize: '16px',
};

TextAreaRedux.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  input: PropTypes.object,
  isValid: PropTypes.bool,
  isInvalid: PropTypes.bool,
  textSize: PropTypes.string,
};
