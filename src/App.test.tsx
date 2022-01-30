import { render } from '@testing-library/react';
import Title from './Title'
import SubTitle from './SubTitle'

test('renders h3 tag with text', () => {
	const { getByText } = render(<Title>Positive game - find the happy face</Title>);
	expect(getByText('Positive game - find the happy face')).toBeInTheDocument()
});

test('renders h4 tag with text', () => {
	const { getByText } = render(<SubTitle>0 of ∞</SubTitle>);
	expect(getByText('0 of ∞')).toBeInTheDocument()
});


