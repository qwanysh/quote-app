import React, {useEffect, useState} from 'react';
import {Button, Pane, SelectField, TextareaField, TextInputField, toaster} from 'evergreen-ui';
import {categories} from '../../consts';
import {getQuoteDetails, isValid, updateQuote} from '../../helpers';
import {Link} from 'react-router-dom';

const QuoteEdit = props => {
  const [spinner, setSpinner] = useState(false);
  const [quote, setQuote] = useState({
    category: '',
    author: '',
    text: '',
  });

  const changeHandler = event => {
    const quoteCopy = {...quote};
    quoteCopy[event.target.name] = event.target.value;
    setQuote(quoteCopy);
  };

  const submitHandler = () => {
    if (isValid(quote)) {
      setSpinner(true);
      updateQuote(quote).then(() => {
        setSpinner(false);
        toaster.success('Quote saved');
      });
    }
  };

  useEffect(() => {
    const {quoteId} = props.match.params;
    getQuoteDetails(quoteId).then(quote => {
      setQuote(quote);
    });
  }, [props.match.params]);

  return (
      <Pane paddingY={40} display="flex" flexDirection="column">
        <SelectField
            label="Category"
            value={quote.category}
            name="category"
            onChange={changeHandler}
        >
          {categories.map(category => (
              <option
                  key={category.id}
                  value={category.id}
              >{category.name}</option>
          ))}
        </SelectField>
        <TextInputField
            label="Author"
            placeholder="Enter author name"
            value={quote.author}
            name="author"
            onChange={changeHandler}
        />
        <TextareaField
            label="Quote text"
            placeholder="Enter quote text"
            value={quote.text}
            name="text"
            onChange={changeHandler}
        />
        <Pane display="flex" justifyContent="flex-end" alignItems="center">
          <Button
              is={Link}
              to="/"
              marginRight={10}
          >Back to quotes</Button>
          <Button
              onClick={submitHandler}
              isLoading={spinner}
              disabled={!isValid(quote)}
              intent="success"
          >Save</Button>
        </Pane>
      </Pane>
  );
};

export default QuoteEdit;