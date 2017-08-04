import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from './Button';

const DialogStyled = styled.div`
  ${props => !props.display && 'display:none;'} position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

const DialogContentStyled = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
`;

const DialogCloseStyled = styled.span`
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;

  &:hover,
  &:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;

class Dialog extends Component {
  constructor(props) {
    super(props);
    this.state = { display: false };

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
    this.setState({ display: nextProps.display });
  }

  render() {
    return (
      <DialogStyled display={this.state.display}>
        <DialogContentStyled>
          <DialogCloseStyled onClick={this.onCancel}>&times;</DialogCloseStyled>
          {this.props.children}
          <br />
          <Button primary inline onClick={this.onConfirm}>
            Ok
          </Button>
          <Button warning inline onClick={this.onCancel}>
            Cancelar
          </Button>
        </DialogContentStyled>
      </DialogStyled>
    );
  }
}

Dialog.defaultProps = {
  onConfirm: () => null,
  onCancel: () => null,
  display: false,
  children: null,
};

Dialog.propTypes = {
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  display: PropTypes.bool,
  children: PropTypes.node,
};

export default Dialog;
