import React from 'react'
import Game from './game'
import {shallow, mount} from 'enzyme'

it('renders without crashing', () => {
  shallow(<Game />);
});

it('render game status with X', () => {
  const wrapper = mount(<Game/>)
  const firstPlayer = wrapper.find('div.status').text()
  expect(firstPlayer).toEqual('Next player: X')
})

it('render game status to O after X click', () => {
  const wrapper = mount(<Game/>)
  const firstPlayer = wrapper.find('div.status').text()
  expect(firstPlayer).toEqual('Next player: X')
  const button = wrapper.find('button.square').first()
  button.simulate('click')
  const secondPlayer = wrapper.find('div.status').text()
  expect(secondPlayer).toEqual('Next player: O')
})

it('Play Game - X win', () => {
  const wrapper = mount(<Game/>)

  //player 1
  const turn1 = wrapper.find('button.square').at(0)
  turn1.simulate('click')
  //player 2
  const turn2 = wrapper.find('button.square').at(1)
  turn2.simulate('click')
  //player 1
  const turn3 = wrapper.find('button.square').at(4)
  turn3.simulate('click')
  //player 2
  const turn4 = wrapper.find('button.square').at(5)
  turn4.simulate('click')
  //player 1
  const turn5 = wrapper.find('button.square').at(8)
  turn5.simulate('click')
  
  const winner = wrapper.find('div.status').text()
  expect(winner).toEqual('Winner: X')
})

it('Play Game - O win', () => {
  const wrapper = mount(<Game/>)

  //player 1
  const turn1 = wrapper.find('button.square').at(0)
  turn1.simulate('click')
  //player 2
  const turn2 = wrapper.find('button.square').at(1)
  turn2.simulate('click')
  //player 1
  const turn3 = wrapper.find('button.square').at(3)
  turn3.simulate('click')
  //player 2
  const turn4 = wrapper.find('button.square').at(4)
  turn4.simulate('click')
  //player 1
  const turn5 = wrapper.find('button.square').at(8)
  turn5.simulate('click')
  //player 2
  const turn6 = wrapper.find('button.square').at(7)
  turn6.simulate('click')
  
  const winner = wrapper.find('div.status').text()
  expect(winner).toEqual('Winner: O')
})