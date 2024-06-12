import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { store } from './store/index.ts';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
	<Provider store={store}>
		<BrowserRouter basename='/github-search-frontend/'>
			<App />
		</BrowserRouter>
	</Provider>
);
