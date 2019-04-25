import React from 'react'
import Square from './square'
import { shallow, mount } from 'enzyme'

it('renders without crashing', () => {
    let squares = Array(9).fill(null)
    shallow(<Square value={squares} />);
});

it('calls onClick event on click of a board square', () => {
    let squares = Array(9).fill(null)
    const onClick = jest.fn();
    let wrapper = mount(<Square value={squares} onClick={onClick} />);
    wrapper.find('button.square').first().simulate('click');
    expect(onClick).toBeCalled();
})