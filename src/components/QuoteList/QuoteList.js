import React from 'react';
import QuoteCard from './QuoteCard/QuoteCard';
import {Text} from 'evergreen-ui';

const QuoteList = ({quotes, onDelete}) => {
  return quotes.length ? quotes.map(quote => (
      <QuoteCard key={quote.id} quote={quote} onDelete={onDelete.bind(this, quote.id)}/>
  )) : <Text className="fadeIn">No quotes here :(</Text>;
};

export default QuoteList;