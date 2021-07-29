import ReactDom from 'react-dom';
import Button from 'components/button/Button';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import renderer from 'react-test-renderer';

afterEach(cleanup);
it('Renders without crashing', () => {
    let div = document.createElement('div');
    ReactDom.render(<Button />, div);
})

it('renders button correctly',  () => {
    const {getByTestId} = render(<Button label={"Click me please"}/>);
    expect(getByTestId('button')).toHaveTextContent('Click me please');
})

it('renders button correctly',  () => {
    const {getByTestId} = render(<Button label={"Save"}/>);
    expect(getByTestId('button')).toHaveTextContent('Save');
})

it('matches snapshot 1' , () => {
    const tree = renderer.create(<Button label={'Save'}/>).toJSON();
    expect(tree).toMatchSnapshot();
})

it('matches snapshot 2' , () => {
    const tree = renderer.create(<Button label={'click me please'}/>).toJSON();
    expect(tree).toMatchSnapshot();
})