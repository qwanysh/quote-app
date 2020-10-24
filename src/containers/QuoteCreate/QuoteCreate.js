import React, {useState} from 'react';
import {Button, Pane, SelectField, TextareaField, TextInputField, toaster} from 'evergreen-ui';
import {categories} from '../../consts';
import {createQuote, isValid} from '../../helpers';

const QuoteCreate = ({history}) => {
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
      createQuote(quote).then(() => {
        setSpinner(false);
        toaster.success('Quote added');
        history.push('/');
      });
    }
  };

  return (
      <Pane paddingY={40} display="flex" flexDirection="column">
        <SelectField
            label="Category"
            defaultValue={quote.category}
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
        <Button
            alignSelf="flex-end"
            onClick={submitHandler}
            isLoading={spinner}
            disabled={!isValid(quote)}
        >Save</Button>
      </Pane>
  );
};

export default QuoteCreate;