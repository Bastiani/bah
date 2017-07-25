import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from './Button';

const DialogStyled = styled.div`
  ${props => !props.display && 'display:none;'} position:fixed;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 200px;
  margin-top: -9em;
  margin-left: -15em;
  border: 1px solid #ccc;
  background-color: #f3f3f3;
  padding: 5px;
`;

class Dialog extends Component {
  constructor(props) {
    super(props);
    this.state = { display: false };

    this.setDisplay = display => () => {
      this.setState({ display });
    };

    this.onConfirm = () => {
      this.props.onConfirm();
      this.setState({ display: false });
    };

    this.onCancel = () => {
      this.props.onCancel();
      this.setState({ display: false });
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.display === this.props.display) return;
    console.log(nextProps.display);
    this.setState({ display: nextProps.display });
  }

  render() {
    return (
      <DialogStyled display={this.state.display}>
        {this.props.children}
        <br />
        <Button primary inline onClick={this.onConfirm}>
          Ok
        </Button>
        <Button warning inline onClick={this.onCancel}>
          Cancelar
        </Button>
      </DialogStyled>
    );
  }
}

export default Dialog;
