import React from 'react';
import {Heading, Pane} from 'evergreen-ui';
import CategoryList from '../../components/CategoryList/CategoryList';
import QuoteCard from '../../components/QuoteCard/QuoteCard';

const QuoteList = () => {
  return (
      <Pane paddingY={40} display="flex">
        <CategoryList/>
        <Pane padding={10}>
          <Heading marginBottom={10}>All</Heading>
          <QuoteCard/>
        </Pane>
      </Pane>
  );
};

export default QuoteList;