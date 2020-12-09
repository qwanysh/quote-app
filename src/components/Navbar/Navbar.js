import React from 'react';
import { Heading, Pane } from 'evergreen-ui';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Pane
      paddingY={20}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderBottom
    >
      <Heading>Quotes App</Heading>
      <Pane display="flex" alignItems="center">
        <Pane
          is={Link}
          to="/"
          color="inherit"
          textDecoration="none"
          marginRight={20}
        >
          Quotes
        </Pane>
        <Pane is={Link} to="/add-quote" color="inherit" textDecoration="none">
          Submit new Quote
        </Pane>
      </Pane>
    </Pane>
  );
};

export default Navbar;
