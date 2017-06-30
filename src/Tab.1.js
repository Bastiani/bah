/* Tab pen from https://codepen.io/josh_vogt/pen/EaaZbP */
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import If from './operator/if';
import { selectTab } from './tabActions';

const TabStyle = styled.div`
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
  padding: 2px;
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
    }
    #tab-${value.id}:checked ~ .tabs #tab-${value.id}-panel {
      display: block;
    }
  `);
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
    return tabs.map(value => `
    #tab-${value.id}:checked ~ .tabs #tab-${value.id}-label {
      border-bottom: none;
    }
    #tab-${value.id}:checked ~ .tabs #tab-${value.id}-panel {
      border-bottom: 1px solid #ccc;
    }`);
  }}
}
`;

class Tab extends Component {
  constructor(props) {
    super(props);
    const tabActive = this.props.tabs.filter(value => value.active === true)[0]
      .id;
    this.state = {
      checked: this.props.selected || `tab-${tabActive}`,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.renderInputs = this.renderInputs.bind(this);
    this.renderLabels = this.renderLabels.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    this.props.selectTab(target.id);
    // console.log(this.props.selected);
    this.setState({
      checked: target.id,
    });
  }

  setRadioChecked(value) {
    /* console.log(
      this.state.checked === `tab-${this.props.selected}`,
    );
    console.log(`${this.state.checked} -> tab-${this.props.selected}`);
    console.log(`${this.state.checked} === tab-${value.id}`);*/
    /* console.log(
      (this.state.checked === `tab-${this.props.selected}` && this.state.checked === `tab-${value.id}`) ||
      (this.state.checked === `tab-${value.id}`),
      this.props.selected,
    );
    return (
      (this.state.checked === `tab-${this.props.selected}` && this.state.checked === `tab-${value.id}`) ||
      (this.state.checked === `tab-${value.id}`)
    );*/
    /* console.log(this.state.checked === this.props.selected);
    console.log(`${this.state.checked} === ${this.props.selected}`);*/
    const selected = this.props.selected !== `tab-${this.props.selected}`
      ? `tab-${this.props.selected}`
      : this.props.selected;
    console.log(selected);
    return selected === `tab-${value.id}`;
  }

  renderInputs() {
    const tabs = this.props.tabs || [];
    return tabs.map(value => (
      <If key={`if-input-${value.id}`} test={value.visible}>
        <input
          key={`tab-${value.id}`}
          className="state"
          type="radio"
          title={`tab-${value.id}`}
          name="tabs-state"
          id={`tab-${value.id}`}
          checked={this.setRadioChecked(value)}
          onChange={this.handleInputChange}
        />
      </If>
    ));
  }

  renderLabels() {
    const tabs = this.props.tabs || [];
    return tabs.map(value => (
      <If key={`if-label-${value.id}`} test={value.visible}>
        <label
          key={`label-${value.id}`}
          htmlFor={`tab-${value.id}`}
          id={`tab-${value.id}-label`}
          className="tab"
        >
          {value.tabCaption}
        </label>
      </If>
    ));
  }

  render() {
    const tabs = this.props.tabs || [];
    const tabVisible = this.props.tabVisible || {};
    if (Object.keys(tabVisible).length >= 1) {
      tabs.map(value => value.visible = tabVisible[value.id] || false);
    }
    return (
      <TabStyle tabs={tabs}>
        {this.renderInputs()}
        <div className="tabs flex-tabs">
          {this.renderLabels()}
          {tabs.map(value => (
            <If key={`if-tab-${value.id}`} test={value.visible}>
              <div
                key={`tab-${value.id}`}
                id={`tab-${value.id}-panel`}
                className="flex-tabs panel active"
              >
                {value.content}
              </div>
            </If>
          ))}
        </div>
      </TabStyle>
    );
  }
}

Tab.defaultProps = {
  tabs: [{}],
  selected: '',
  tabVisible: {},
};

Tab.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object),
  selected: PropTypes.string,
  tabVisible: PropTypes.object,
};

const mapStateToProps = state => ({
  selected: state.tab.selected,
  tabVisible: state.tab.tabVisible,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ selectTab }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Tab);
