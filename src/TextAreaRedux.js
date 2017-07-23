import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button, TextAreaStyled } from './index';

export default class TextAreaRedux extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.onChange = () => {
      const { value } = this.textAreaRedux;
      this.setState({ value });
      this.props.input.onChange(value);
    };

    this.formatText = () => {
      const textVal = this.textAreaRedux;
      const cursorStart = textVal.selectionStart;
      const cursorEnd = textVal.selectionEnd;
      const text = textVal.value;
      const textResult = `${text.substr(0, cursorStart)}**${text.substr(
        cursorStart,
        cursorEnd - cursorStart,
      )}**${text.substr(cursorEnd)}`;
      this.setState(
        {
          value: textResult,
        },
        this.onChange,
      );
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.input.value === this.props.input.value) return;
    this.setState({ value: nextProps.input.value });
  }

  render() {
    const { input } = this.props;
    return (
      <TextAreaStyled
        isValid={this.props.isValid}
        isInvalid={this.props.isInvalid}
        textSize={this.props.textSize}
      >
        <label htmlFor={input.name}>
          {this.props.label}
        </label>
        <Button buttonLink success inline small onClick={this.formatText}>
          Bold
        </Button>
        <textarea
          ref={(c) => {
            this.textAreaRedux = c;
          }}
          {...input}
          value={this.state.value || input.value}
          onChange={this.onChange}
        />
      </TextAreaStyled>
    );
  }
}

TextAreaRedux.defaultProps = {
  label: '',
  input: {},
  isValid: false,
  isInvalid: false,
  textSize: '16px',
};

TextAreaRedux.propTypes = {
  label: PropTypes.string,
  input: PropTypes.object,
  isValid: PropTypes.bool,
  isInvalid: PropTypes.bool,
  textSize: PropTypes.string,
};
