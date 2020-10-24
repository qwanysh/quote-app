import React from 'react';
import {Button, Heading, Pane, Text} from 'evergreen-ui';

const QuoteCard = ({quote}) => {
  return (
      <Pane display="flex" flexDirection="column" justifyContent="space-between" border marginBottom={10}>
        <Text padding={10}>{quote.text}</Text>
        <Pane borderTop padding={10} display="flex" justifyContent="flex-end" alignItems="center">
          <Heading size={100} marginRight="auto">{quote.author}</Heading>
          <Button marginRight={5} intent="warning">Edit</Button>
          <Button intent="danger">Delete</Button>
        </Pane>
      </Pane>
  );
};

export default QuoteCard;