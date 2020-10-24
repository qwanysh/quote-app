import React from 'react';
import QuoteCard from './QuoteCard/QuoteCard';
import {Text} from 'evergreen-ui';

const QuoteList = ({quotes}) => {
  return quotes.length ? quotes.map(quote => (
      <QuoteCard key={quote.id} quote={quote}/>
  )) : <Text>No quotes here</Text>;
};

export default QuoteList;