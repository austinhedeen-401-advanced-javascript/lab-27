import React from 'react';

import Header from '../components/header/Header';


describe('<Header />', () => {
  test('Renders at application start', () => {
    const app = shallow(<Header />);
    expect(app.find('h1').exists()).toBeTruthy();
    expect(app.find('h1').text()).toEqual('Counters R Fun');
  });
});
