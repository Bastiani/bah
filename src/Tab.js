/* Tab pen from https://codepen.io/josh_vogt/pen/EaaZbP */
import React, { PureComponent } from 'react';
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
    background-color: #e5e9f2;
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
    return tabs.map(
      value => `
    #${value.id}:checked ~ .tabs #${value.id}-label {
      background-color: #fff;
      cursor: default;
      border-left-color: #69be28;
    }
    #${value.id}:checked ~ .tabs #${value.id}-panel {
      display: block;
    }
  `,
    );
  }} @media (max-width: 600px) {
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
          .flex-tabs #${value.id}-label {
            order: ${index + 1};
          }`;
        }
        return `
        .flex-tabs #${value.id}-panel {
          order: ${index + 1};
        }`;
      });
    }} ${(props) => {
      const tabs = props.tabs || [];
      return tabs.map(
          value => `
        #${value.id}:checked ~ .tabs #${value.id}-label {
          border-bottom: none;
        }
        #${value.id}:checked ~ .tabs #${value.id}-panel {
          border-bottom: 1px solid #ccc;
        }`,
        );
    }};
  }
`;

class Tab extends PureComponent {
  constructor(props) {
    super(props);
    const propsTabs = this.props.tabs || [];
    const tabVisible = this.props.tabVisible || {};

    this.updateTabs = (pTabs, pTabVisible) => {
      let tabsAlterKeys = [];
      const newValue = [];
      const itens = {};

      if (Object.keys(pTabVisible).length >= 1) {
        pTabs.map(value => newValue.push(pTabVisible[value.id] || false));
      }

      const tabsAlter = {
        visible: {
          newValue,
        },
      };

      const newTabs = pTabs.map((oKey, index) => {
        tabsAlterKeys = Object.keys(tabsAlter);
        tabsAlterKeys.map(
          tabsKey =>
            (itens[tabsKey] =
              oKey[tabsKey] !== tabsAlter[tabsKey].newValue[index]
                ? tabsAlter[tabsKey].newValue[index]
                : oKey[tabsKey]),
        );
        return Object.assign({}, oKey, itens);
      });

      return newTabs;
    };

    this.state = { newTabs: this.updateTabs(propsTabs, tabVisible) };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.renderInputs = this.renderInputs.bind(this);
    this.renderLabels = this.renderLabels.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!Object.is(this.props, nextProps)) {
      this.setState({ newTabs: this.updateTabs(nextProps.tabs, nextProps.tabVisible) });
    }
  }

  setRadioChecked(value) {
    const selected =
      this.props.selected || this.props.tabs.filter(key => key.active === true)[0].id;

    return selected === value.id;
  }

  handleInputChange(event) {
    this.props.selectTab(event.target.id);
  }

  renderInputs() {
    return this.state.newTabs.map(value =>
      (<If key={`if-input-${value.id}`} test={value.visible}>
        <input
          key={value.id}
          className="state"
          type="radio"
          title={value.id}
          name="tabs-state"
          id={value.id}
          checked={this.setRadioChecked(value)}
          onChange={this.handleInputChange}
        />
      </If>),
    );
  }

  renderLabels() {
    return this.state.newTabs.map(value =>
      (<If key={`if-label-${value.id}`} test={value.visible}>
        <label
          key={`label-${value.id}`}
          htmlFor={value.id}
          id={`${value.id}-label`}
          className="tab"
        >
          {value.tabCaption}
        </label>
      </If>),
    );
  }

  render() {
    return (
      <TabStyle tabs={this.state.newTabs}>
        {this.renderInputs()}
        <div className="tabs flex-tabs">
          {this.renderLabels()}
          {this.state.newTabs.map(value =>
            (<If key={`if-panel-${value.id}`} test={value.visible}>
              <div
                key={`panel-${value.id}`}
                id={`${value.id}-panel`}
                className="flex-tabs panel active"
              >
                {value.content}
              </div>
            </If>),
          )}
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
const mapDispatchToProps = dispatch => bindActionCreators({ selectTab }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Tab);
