import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {LoginBase} from '../src/Login';
import theme from '../src/Login/style';

describe('<Login />', () => {

    it('should include username input', () => {
        const wrapper = shallow(<LoginBase theme={theme}/>);
        // console.log(wrapper.find('[type="text"]').debug());
        expect(wrapper.find('[type="text"]')).to.have.length(1);
    });

    it('should include password input', () => {
        const wrapper = shallow(<LoginBase theme={theme}/>);
        expect(wrapper.find('[type="password"]')).to.have.length(1);
    });

    it('should include checkbox input', () => {
        const wrapper = shallow(<LoginBase theme={theme}/>);
        expect(wrapper.find('[type="checkbox"]')).to.have.length(1);
    });

    it('should include submit button', () => {
        const wrapper = shallow(<LoginBase theme={theme}/>);
        expect(wrapper.find('button[type="submit"]')).to.have.length(1);
    });

    it('should include labels', () => {
        const wrapper = shallow(<LoginBase theme={theme}/>);
        expect(wrapper.find('label')).to.have.length(3);
    });

});
