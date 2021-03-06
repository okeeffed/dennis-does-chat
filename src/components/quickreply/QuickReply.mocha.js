const React = require('react');
const Component = require('react').Component;
const shallow = require('enzyme').shallow;
const expect = require('chai').expect;
const Header = require('./Header');

//export default QuickReply = () => {
//	return (
//		<View>
//			<Text>enzyme</Text>
//			<Text>rules</Text>
//		</View>
//	);
//};

describe('<QuickReply />', () => {
	it('should render one View', () => {
		const wrapper = shallow(<QuickReply />);
			expect(wrapper.find(View)).to.have.length(1);
	});
});