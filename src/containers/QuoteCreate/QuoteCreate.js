import React from 'react';
import {Button, Pane, SelectField, TextareaField, TextInputField} from 'evergreen-ui';
import {categories} from '../../consts';

const QuoteCreate = () => {
  return (
      <Pane paddingY={40} display="flex" flexDirection="column">
        <SelectField label="Category">
          {categories.map(category => (
              <option value={category.id}>{category.name}</option>
          ))}
        </SelectField>
        <TextInputField
            label="Author"
            placeholder="Enter author name"
        />
        <TextareaField
            label="Quote text"
            placeholder="Enter quote text"
        />
        <Button alignSelf="flex-end">Save</Button>
      </Pane>
  );
};

export default QuoteCreate;