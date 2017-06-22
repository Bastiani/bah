/* Tab pen from https://codepen.io/josh_vogt/pen/EaaZbP */
import React, { Component } from 'react';
import styled from 'styled-components';

export class TabItem extends Component {
  renderInputs() {
    const tabs = this.props.tabs || [];
    return tabs.map(value => (
      <input
        key={`tab-${value.id}`}
        className="state"
        type="radio"
        title={`tab-${value.id}`}
        name="tabs-state"
        id={`tab-${value.id}`}
        defaultChecked={value.active || false}
      />
    ));
  }

  renderLabels() {
    const tabs = this.props.tabs || [];
    return tabs.map(value => (
      <label
        key={`${value.id}`}
        htmlFor={`tab-${value.id}`}
        id={`tab-${value.id}-label`}
        className="tab"
      >
        {value.tabCaption}
      </label>
    ));
  }
  render() {
    const tabs = this.props.tabs || [];
    return (
      <div>
        {this.renderInputs()}
        <div className="tabs flex-tabs">
          {this.renderLabels()}
          {tabs.map(value => (
            <div
              key={`tab-${value.id}`}
              id={`tab-${value.id}-panel`}
              className="flex-tabs panel active"
            >
              {value.content}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const Tabs = styled.div`
.state {
  position: absolute;
  left: -10000px;
}
.flex-tabs {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.flex-tabs .tab {
  flex-grow: 1;
  max-height: 40px;
}
.flex-tabs .panel {
  background-color: #E5E9F2;
  padding: 20px;
  min-height: 300px;
  display: none;
  width: 100%;
  flex-basis: auto;
}
.tab {
  display: inline-block;
  padding: 10px;
  vertical-align: top;
  background-color: #eee;
  cursor: hand;
  cursor: pointer;
  border-left: 10px solid #ccc;
}
.tab:hover {
  background-color: #fff;
}
${(props) => {
  const tabs = props.tabs || [];
  return tabs.map(value => `
  #tab-${value.id}:checked ~ .tabs #tab-${value.id}-label {
    background-color: #fff;
    cursor: default;
    border-left-color: #69be28;
  }`);
}}

${(props) => {
  const tabs = props.tabs || [];
  return tabs.map(value => `
  #tab-${value.id}:checked ~ .tabs #tab-${value.id}-panel {
    display: block;
  }`);
}}

@media (max-width: 600px) {
  .flex-tabs {
    flex-direction: column;
  }
  .flex-tabs .tab {
    background: #fff;
    border-bottom: 1px solid #ccc;
  }
  .flex-tabs .tab:last-of-type {
    border-bottom: none;
  }
  ${(props) => {
    const tabs = props.tabs || [];
    return tabs.map((value, index) => {
      if (Math.abs((index + 1) % 2) === 1) {
        return `
          .flex-tabs #tab-${value.id}-label {
            order: ${index + 1};
          }`;
      }
      return `
        .flex-tabs #tab-${value.id}-panel {
          order: ${index + 1};
        }`;
    });
  }}

  ${(props) => {
    const tabs = props.tabs || [];
    return tabs.map(value => `#tab-${value.id}:checked ~ .tabs #tab-${value.id}-label {
      border-bottom: none;
    }`);
  }}

  ${(props) => {
    const tabs = props.tabs || [];
    return tabs.map(value => `#tab-${value.id}:checked ~ .tabs #tab-${value.id}-panel {
      border-bottom: 1px solid #ccc;
    }`);
  }}
}
`;

export default Tabs;
