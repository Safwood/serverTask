import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";
// import { HashRouter } from "react-router-dom";
// import 'fontsource-roboto';
import { store, persistor } from "./redux/store"
import {PersistGate} from 'redux-persist/integration/react'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();


// const mapStateToProps = (state) => ({
//   isCardSaved: state.card.isCardSaved
// })

// const mapDispatchToProps = dispatch => ({
//   auth: (email, password) => dispatch(authenticate({email, password}))
// })

// export default connect(mapStateToProps)(Profile);