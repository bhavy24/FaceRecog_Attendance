import ReactDOM from 'react-dom';
import ApolloProvider from './ApolloProvider';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(ApolloProvider, document.getElementById('root'));

serviceWorker.unregister();
 