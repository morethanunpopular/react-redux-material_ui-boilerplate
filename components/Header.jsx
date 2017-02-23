import React, { PropTypes, Component } from 'react';

import AppBar from 'material-ui/AppBar';

const defaultStyle = {
  marginLeft: 20
};

class Header extends Component {
  render() {
    return (
      <header className="header">
          <AppBar title="Boilerplate" />
      </header>
    );
  }
}

export default Header;
