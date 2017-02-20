import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {RegisterBase} from '../src/Register';
import theme from '../src/Login/style';

describe('<Register />', () => {

    it('should include username input', () => {
        const wrapper = shallow(<RegisterBase theme={theme}/>);
        // console.log(wrapper.debug());
        expect(wrapper.find('#uname')).to.have.length(1);
    });

    it('should include password input', () => {
        const wrapper = shallow(<RegisterBase theme={theme}/>);
        expect(wrapper.find('#pword')).to.have.length(1);
    });

    it('should include fullname input', () => {
        const wrapper = shallow(<RegisterBase theme={theme}/>);
        expect(wrapper.find('#fullname')).to.have.length(1);
    });

    it('should include submit button', () => {
        const wrapper = shallow(<RegisterBase theme={theme}/>);
        expect(wrapper.find('button[type="submit"]')).to.have.length(1);
    });

    it('should include labels', () => {
        const wrapper = shallow(<RegisterBase theme={theme}/>);
        expect(wrapper.find('label')).to.have.length(3);
    });

});
