import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// Redux store is used for the weather application
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './component/combinereducers';
//import formreducers from './component/form/reducers';
import ReduxPromise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

// Breadcrumb  https://github.com/oklas/react-breadcrumbs-dynamic
//import {BreadcrumbsProvider} from 'react-breadcrumbs-dynamic';
//import { BrowserRouter } from 'react-router-dom';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// const BreadCrumbApp=(
//   <BrowserRouter>
//     <BreadcrumbsProvider>
//       <App />
//     </BreadcrumbsProvider>
//   </BrowserRouter>
// )
//ReactDOM.render(BreadCrumbApp, document.getElementById('root'));

// For handling form
// const AppWithForm=(
//         <BrowserRouter>
//           <div>
//             <Switch>
//               <Route path="/posts/new" component={PostsNew}/>
//               <Route path="/posts/:id" component={PostShow}/>
//               <Route path="/" component={PostsIndex}/>
//             </Switch>
//           </div>
//         </BrowserRouter>
//       )
// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <AppWithForm />
//   </Provider>,
//   document.getElementById('root')
// )


registerServiceWorker();
