import React from 'react'
import Board from './board'
import {shallow, mount} from 'enzyme'

it('renders without crashing', () => {
  shallow(<Board />);
});
