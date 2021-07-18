import logo from './logo.svg';
import './App.css';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import RootLayout from './layouts/RootLayourt';
import { ToastProvider } from "react-toast-notifications";



// Redux imports
import { Provider } from "react-redux";
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const hist = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router history={hist} >
          <ToastProvider
            placement="top-center"
            autoDismiss
            autoDismissTimeout={3000}
          >
            <RootLayout />
          </ToastProvider>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
