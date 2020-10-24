import React, {useEffect, useState} from 'react';
import {Heading, Pane, Spinner} from 'evergreen-ui';
import CategoryList from '../../components/CategoryList/CategoryList';
import {getQuotes} from '../../helpers';
import {categories} from '../../consts';
import QuoteList from '../../components/QuoteList/QuoteList';

const Quotes = props => {
  const [spinner, setSpinner] = useState(false);
  const [quotes, setQuotes] = useState([]);
  const [category, setCategory] = useState(null);

  const deleleQuoteHandler = quoteId => {
    setQuotes(quotes.filter(({id}) => id !== quoteId));
  };

  useEffect(() => {
    const {categoryId} = props.match.params;
    const categoryObj = categories.find(({id}) => id === categoryId);

    if (categoryId && !categoryObj) {
      props.history.replace('/404');
    }

    setCategory(categoryId ? categoryObj : null);
  }, [props.match.params]);

  useEffect(() => {
    const {categoryId} = props.match.params;
    if (categoryId && !category) return;

    setSpinner(true);
    getQuotes(category).then(quotes => {
      setSpinner(false);
      setQuotes(quotes);
    });
  }, [category]);

  return (
      <Pane paddingY={40} display="flex" className="fadeIn">
        <CategoryList/>
        <Pane padding={10} paddingRight={0} flexGrow={1}>
          <Heading marginBottom={10}>{category ? category.name : 'All'}</Heading>
          {spinner ? <Spinner size={40} marginX="auto"/> : (
              <QuoteList quotes={quotes} onDelete={deleleQuoteHandler}/>
          )}
        </Pane>
      </Pane>
  );
};

export default Quotes;