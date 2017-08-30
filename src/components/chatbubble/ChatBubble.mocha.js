const React = require('react');
const Component = require('react').Component;
const shallow = require('enzyme').shallow;
const expect = require('chai').expect;
const Header = require('./Header');

//export default ChatBubble = () => {
//	return (
//		<View>
//			<Text>enzyme</Text>
//			<Text>rules</Text>
//		</View>
//	);
//};

describe('<ChatBubble />', () => {
	it('should render one View', () => {
		const wrapper = shallow(<ChatBubble />);
			expect(wrapper.find(View)).to.have.length(1);
	});
});