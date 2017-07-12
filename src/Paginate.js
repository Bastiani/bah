/* Paginate on pen https://codepen.io/rafacdb/pen/mwxwQa */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PaginateStyled = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  list-style-type: none;

  li a {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }

  li {
    background-color: ${props => props.theme.bahPaginateBackgroundColor};
    display: none;
  }

  a {
    font-weight: 300;
    padding-top: 1px;
    text-decoration: none;
    border: 1px solid rgba(0, 0, 0, .25);
    border-left-width: 0;
    min-width: 44px;
    min-height: 44px;
    color: rgba(255, 255, 255, .85);
    box-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, .35);
  }

  li:not([class*="current"]) a:hover {
    background-color: rgba(255, 255, 255, .2);
    border-top-color: rgba(0, 0, 0, .35);
    border-bottom-color: rgba(0, 0, 0, .5);
  }

  li:not([class*="current"]) a:focus,
  li:not([class*="current"]) a:active {
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, .25);
    border-left-width: 1px;
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
  li:last-child a::after {
    content: "<<";
  }

  li:nth-of-type(2) a::before,
  li:nth-last-of-type(2) a::after {
    content: "<";
  }

  li:last-child a::after,
  li:nth-last-of-type(2) a::after {
    transform: rotate(180deg);
  }

  li:nth-last-child(-n + 2) {
    display: inline-block;
  }

  li:nth-child(n + ${props => props.start}):nth-child(-n + ${props => props.end}) {
    display: inline-block;
  }
  li:nth-child(-n + 2) {
    display: inline-block;
  }

  li.current a {
    color: rgba(255, 255, 255, 1);
    background-color: rgba(255, 255, 255, .15);
    box-shadow: inset 0px 2px 1px 0px rgba(0, 0, 0, .25);
    cursor: default;
    pointer-events: none;
  }

  @media only screen and (max-width: 64.063em) {
    li:first-child,
    li:last-child {
      /* screen readers only */
      position: absolute;
      top: -9999px;
      left: -9999px;
    }
    li:nth-of-type(2) a {
      border-left-width: 1px;
    }
  }

  @media only screen and (max-width: 40.063em) {
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
    li:nth-last-of-type(2) {
      position: initial;
      top: initial;
      left: initial;
    }
    li:nth-of-type(2) a {
      border-left-width: 0;
    }
  }

  @media only screen and (max-width: 30.063em) {
    h1 {
      font-size: 1.35em !important;
    }
    li:first-child,
    li:last-child {
      /* screen readers only */
      position: absolute;
      top: -9999px;
      left: -9999px;
    }
    li:nth-of-type(2) a {
      border-left-width: 1px;
    }
  }

  @media only screen and (max-width: 15.063em) {
    /* For watches? */
    li {
      width: 50%;
    }
    li.current {
      order: 2;
      width: 100%;
      border-left-width: 1px;
    }
  }
`;

class Paginate extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { linkId: 0, linkActive: false, skip: 0, start: 3, end: 12 };

    this.handleClick = link => () => {
      let newSkip;
      const { start, end, skip } = this.state;
      const { perPage, count, func } = this.props;

      if (link.id === 'Previous') {
        newSkip = skip !== 0 ? skip - perPage : skip;
      } else if (link.id === 'Next') {
        newSkip = skip <= count && skip + perPage < count ? skip + perPage : skip;
      } else if (link.id === 'First') {
        newSkip = 0;
        if (start - 3 < link.pages && start !== 3) {
          this.setState({ start: start - 10, end: end - 10 });
        }
      } else if (link.id === 'Last') {
        newSkip = link.skip;
        if (end - 2 < link.pages) {
          this.setState({ start: start + 10, end: end + 10 });
        }
      } else {
        newSkip = link.skip;
      }
      func(perPage, newSkip);
      this.setState({ linkId: link.id, linkActive: true, skip: newSkip });
    };

    this.buttonPages = link =>
      (<li
        key={`li-${link.id}`}
        className={
          this.state.linkId === link.id &&
          this.state.linkActive &&
          link.id !== 'First' &&
          link.id !== 'Previous' &&
          link.id !== 'Next' &&
          link.id !== 'Last'
            ? 'current'
            : ''
        }
      >
        <a href="#" onClick={this.handleClick(link)}>
          <span>
            {link.id}
          </span>
        </a>
      </li>);

    this.generatePageLinks = () => {
      let pagesCount = this.props.count / this.props.perPage;
      pagesCount = Math.ceil(pagesCount);

      const links = [];
      let skip = 0;

      for (let i = 1; i <= pagesCount; i++) {
        if (i === 1) {
          links.push({ id: 'First', skip, pages: pagesCount });
          links.push({
            id: 'Previous',
            skip,
            pages: pagesCount,
          });
        }

        links.push({ id: i, skip, pages: pagesCount });

        if (i === pagesCount) {
          links.push({ id: 'Next', skip, pages: pagesCount });
          links.push({
            id: 'Last',
            skip,
            pages: pagesCount,
          });
        }
        skip += this.props.perPage;
      }

      return links.map(link => this.buttonPages(link));
    };
  }

  render() {
    return (
      <PaginateStyled start={this.state.start} end={this.state.end}>
        {this.generatePageLinks()}
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
