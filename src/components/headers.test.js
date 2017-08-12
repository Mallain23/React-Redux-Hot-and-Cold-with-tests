
import React from 'react';
import {shallow} from 'enzyme';

import Header from './header';

describe('<Header />', () => {
    it('Renders without crashing', () => {
        shallow(<Header />);
    });

    it('Hides the info modal initially', () => {
        const wrapper = shallow(<Header showInfoModal={false}/>);
        expect(wrapper.find('InfoModal').exists()).toEqual(false);
    });

    it('Shows the info modal if set to true', () => {
        const wrapper = shallow(<Header showInfoModal={true}/>);
        expect(wrapper.find('InfoModal').exists()).toEqual(true);
    });
});
