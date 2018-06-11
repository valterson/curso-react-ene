import React, { Component } from 'react';
import PropTypes from 'prop-types';

const getCurrentPath = () => {
  const path = document.location.pathname
  return path.substring(path.lastIndexOf('/'))
};

export class Router extends Component {
  state = {
    route: getCurrentPath()
  };

  static childContextTypes = {
    route: PropTypes.string,
    linkHandler: PropTypes.func
  }

  getChildContext() {
    return {
      route: this.state.route,
      linkHandler: this.handleLinkClick
    }
  }

  handleLinkClick = (route) => {
    this.setState({ route });
    // eslint-disable-next-line
    history.pushState(null, '', route);
  }

  render() {
    return <div>{this.props.children}</div>
  }
};