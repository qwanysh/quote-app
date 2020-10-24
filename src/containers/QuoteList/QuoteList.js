import React, {useEffect, useState} from 'react';
import {Heading, Pane, Spinner} from 'evergreen-ui';
import CategoryList from '../../components/CategoryList/CategoryList';
import QuoteCard from '../../components/QuoteCard/QuoteCard';
import {getQuotes} from '../../helpers';
import {categories} from '../../consts';

const QuoteList = props => {
  const [spinner, setSpinner] = useState(false);
  const [quotes, setQuotes] = useState([]);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const {categoryId} = props.match.params;

    if (categoryId) {
      setCategory(categories.find(({id}) => id === categoryId));
    } else {
      setCategory(null);
    }
  }, [props.match.params]);

  useEffect(() => {
    setSpinner(true);
    getQuotes(category).then(quotes => {
      setSpinner(false);
      setQuotes(quotes);
    });
  }, [category]);

  return (
      <Pane paddingY={40} display="flex">
        <CategoryList/>
        <Pane padding={10} flexGrow={1}>
          <Heading marginBottom={10}>{category ? category.name : 'All'}</Heading>
          {spinner ? <Spinner size={40} marginX="auto"/> : quotes.map(quote => (
              <QuoteCard key={quote.id} quote={quote}/>
          ))}
        </Pane>
      </Pane>
  );
};

export default QuoteList;