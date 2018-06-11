import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Link extends Component {
  static contextTypes = {
    route: PropTypes.string,
    linkHandler: PropTypes.func
  }

  handleClick = (evt) => {
    evt.preventDefault();
    // eslint-disable-next-line
    // history.pushState(null, '', this.props.to);
    this.context.linkHandler(this.props.to);
  }

  render() {
    const activeClass = this.context.route === this.props.to ? 'active' : '';

    return (
      // eslint-disable-next-line
      <a href="#" onClick={this.handleClick} className={activeClass}>
        {this.props.children}
      </a>
    )
  }
}