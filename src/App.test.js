import App from 'components/app/App';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
  const divEl = document.createElement('div');
  ReactDOM.render(<App />, divEl);
  ReactDOM.unmountComponentAtNode(divEl);
});
