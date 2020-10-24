import React, {useState} from 'react';
import {Button, Heading, Pane, Text, toaster} from 'evergreen-ui';
import {deleteQuote} from '../../../helpers';
import {Link} from 'react-router-dom';

const QuoteCard = ({quote, onDelete}) => {
  const [spinner, setSpinner] = useState(false);
  const deleteHandler = () => {
    setSpinner(true);
    deleteQuote(quote.id).then(() => {
      setSpinner(false);
      onDelete();
      toaster.success('Quote deleted');
    });
  };

  return (
      <Pane display="flex" flexDirection="column" justifyContent="space-between" border marginBottom={10}
            className="fadeIn">
        <Text padding={10}>{quote.text}</Text>
        <Pane borderTop padding={10} display="flex" justifyContent="flex-end" alignItems="center">
          <Heading size={100} marginRight="auto">{quote.author}</Heading>
          <Button
              marginRight={5}
              intent="warning"
              is={Link}
              to={`/quotes/${quote.id}/edit`}
          >Edit</Button>
          <Button
              intent="danger"
              isLoading={spinner}
              onClick={deleteHandler}
          >Delete</Button>
        </Pane>
      </Pane>
  );
};

export default QuoteCard;