import { Provider } from 'react-redux'
import Modal from 'react-modal'
import {store} from '../redux/store'
import '../styles/globals.css';

Modal.setAppElement('#__next');

export default function App({ Component, pageProps }) {
  return (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
  );
}