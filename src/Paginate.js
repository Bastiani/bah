/* Paginate on pen https://codepen.io/rafacdb/pen/mwxwQa */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PaginateStyled = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
list-style-type: none;

li a {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

li { background-color: lightseagreen; }

a {
  font-weight: 300;
  padding-top: 1px;
  text-decoration:none;
  border: 1px solid rgba(0,0,0,.25);
  border-left-width: 0;
  min-width:44px;
  min-height:44px;
  color: rgba(255,255,255,.85);
  box-shadow: inset 0px 1px 0px 0px rgba(255,255,255,.35);
}

li:not([class*="current"]) a:hover {
  background-color: rgba(255,255,255,.2);
  border-top-color: rgba(0,0,0,.35);
  border-bottom-color: rgba(0,0,0,.5);
}

li:not([class*="current"]) a:focus,
li:not([class*="current"]) a:active {;
  box-shadow: 0px 0px 10px 1px rgba(0,0,0,.25);
  border-left-width:1px;
}

li:first-of-type a {
  border-left-width: 1px;
}

li:first-of-type span,
li:last-of-type span,
li:nth-of-type(2) span,
li:nth-last-of-type(2) span {
  /* screen readers only */
  position: absolute;
  top: -9999px;
  left: -9999px;
}

li:first-child a::before,
li:last-child a::after,
li:nth-of-type(2) a::before,
li:nth-last-of-type(2) a::after {
  display: inline-block;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transform: translate(0, 0);
}

li:first-child a::before,
li:last-child a::after { content: "<<"; }

li:nth-of-type(2) a::before,
li:nth-last-of-type(2) a::after { content: "<"; }

li:last-child a::after,
li:nth-last-of-type(2) a::after { transform: rotate(180deg); }

li.current a {
  color: rgba(255,255,255,1);
  background-color: rgba(255,255,255,.15);
  box-shadow: inset 0px 2px 1px 0px rgba(0,0,0,.25);
  cursor: default;
  pointer-events: none;
}

@media only screen and ( max-width: 64.063em ) {
  li:first-child,
  li:last-child {
    /* screen readers only */
    position: absolute;
    top: -9999px;
    left: -9999px;
  }
  li:nth-of-type(2) a { border-left-width: 1px; }
}

@media only screen and ( max-width: 40.063em ) {
  li {
    /* screen readers only */
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  li.current,
  li:first-of-type,
  li:last-of-type,
  li:nth-of-type(2),
  li:nth-last-of-type(2){
    position: initial;
    top: initial;
    left: initial;
  }
  li:nth-of-type(2) a { border-left-width: 0; }
}

@media only screen and ( max-width: 30.063em ) {
  h1 { font-size: 1.35em !important; }
  li:first-child,
  li:last-child {
    /* screen readers only */
    position: absolute;
    top: -9999px;
    left: -9999px;
  }
  li:nth-of-type(2) a { border-left-width: 1px; }
}

@media only screen and ( max-width: 15.063em ) {  /* For watches? */
  li { width: 50%; }
  li.current {
    order: 2;
    width: 100%;
    border-left-width: 1px;
  }
}
`;

class Paginate extends Component {
  constructor(props) {
    super(props);
    this.state = { linkId: 0, linkActive: false };

    this.handleClick = (id, skip) => {
      // this.props.func(this.props.perPage, skip);
      this.setState({ linkId: id, linkActive: true });
    };

    this.generatePageLinks = () => {
      let pagesCount = this.props.count / this.props.perPage;
      if (this.props.count % this.props.perPage === 1) pagesCount += 1;
      const links = [];
      let skip = 0;

      for (let i = 1; i <= pagesCount; i++) {
        links.push({ id: i, skip });
        skip += this.props.perPage;
      }

      return links.map(value => (
        <li
          key={value.id}
          className={
            this.state.linkId === value.id && this.state.linkActive
              ? 'current'
              : ''
          }
        >
          <a href="#" onClick={this.handleClick(value.id, value.skip)}>
            {value.id}
          </a>
        </li>
      ));
    };
  }

  render() {
    return (
      <PaginateStyled key={'paginate'}>
        <li><a href=""><span>First</span></a></li>
        <li><a href=""><span>Previous</span></a></li>
        {this.generatePageLinks(
          this.props.count,
          this.props.perPage,
          this.props.func,
        )}
        <li><a href=""><span>Next</span></a></li>
        <li><a href=""><span>Last</span></a></li>
      </PaginateStyled>
    );
  }
}

Paginate.defaultProps = {
  count: 0,
  perPage: 5,
  func: {},
};

Paginate.propTypes = {
  count: PropTypes.number,
  perPage: PropTypes.number,
  func: PropTypes.func,
};

export default Paginate;
