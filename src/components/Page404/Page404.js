import React from 'react';
import { ErrorIcon, Heading, Pane } from 'evergreen-ui';

const Page404 = () => {
  return (
    <Pane
      paddingY={40}
      className="fadeIn"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <ErrorIcon color="muted" size={40} marginBottom={20} />
      <Heading>404 Not found</Heading>
    </Pane>
  );
};

export default Page404;
