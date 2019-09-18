import React from 'react';

import Counter from '../components/counter/Counter';


describe('<Counter />', () => {
  test('', () => {
    const app = mount(<Counter />);
    const decrementButton = app.find('.decrement');
    decrementButton.simulate('click');
    expect(app.state('count')).toEqual(-1);
  });
});
