import React from 'react';
import {Button, Pane, Text} from 'evergreen-ui';

const QuoteCard = () => {
  return (
      <Pane display="flex" flexDirection="column" justifyContent="space-between" border marginBottom={10}>
        <Text padding={10}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolor doloribus ea eos ex,
          fugiat
          impedit inventore mollitia officia possimus quidem sed ut veniam veritatis voluptate. At, eos, libero?
          Beatae?</Text>
        <Pane borderTop padding={10} display="flex" justifyContent="flex-end">
          <Button marginRight={5} intent='warning'>Edit</Button>
          <Button intent='danger'>Delete</Button>
        </Pane>
      </Pane>
  );
};

export default QuoteCard;