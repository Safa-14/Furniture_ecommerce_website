import ReactDOM from 'react-dom/client';
// import MainLayout from '@components/layout/MainLayout/MainLayout.tsx';
import AppRouter from '@routes/AppRouter';

// REDUX
// import { store } from './store'
import { Provider } from 'react-redux'
import { store } from '@store/store';

// STYLES
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@styles/global.css';




ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
