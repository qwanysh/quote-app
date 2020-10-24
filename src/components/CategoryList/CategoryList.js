import React from 'react';
import {Menu, Pane} from 'evergreen-ui';
import {Link} from 'react-router-dom';
import {categories} from '../../consts';

const CategoryList = () => {
  return (
      <Pane borderRight>
        <Menu>
          <Menu.Group>
            <Menu.Item is={Link} to="/">All</Menu.Item>
          </Menu.Group>
          <Menu.Divider/>
          <Menu.Group>
            {categories.map(category => (
                <Menu.Item key={category.id}>{category.name}</Menu.Item>
            ))}
          </Menu.Group>
        </Menu>
      </Pane>
  );
};

export default CategoryList;