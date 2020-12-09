import React from 'react';
import { Heading, Pane, Button } from 'evergreen-ui';
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
        <Button is={Link} to="/" appearance="minimal" paddingX={10}>
          Quotes
        </Button>
        <Button is={Link} to="/add-quote" appearance="minimal" paddingX={10}>
          Submit new Quote
        </Button>
      </Pane>
    </Pane>
  );
};

export default Navbar;
