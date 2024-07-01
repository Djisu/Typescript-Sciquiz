import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import store from './store';



// Get the root element
const rootElement: HTMLElement | null = document.getElementById('root');

// Ensure root element is not null before rendering
if (rootElement !== null) {
  // Create a root
  const root = createRoot(rootElement);

  // Render the application
  root.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  );
} else {
  console.error('Root element with id "root" not found.');
}



// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './App.tsx';
// import store from './store.ts';

// // Get the root element
// const rootElement: HTMLElement | null = document.getElementById('root');

// // Ensure root element is not null before rendering
// if (rootElement !== null) {
//   // Render the application
//   ReactDOM.render(
//     <Provider store={store}>
//       <React.StrictMode>
//         <App />
//       </React.StrictMode>
//     </Provider>,
//     rootElement
//   );
// } else {
//   console.error('Root element with id "root" not found.');
// }

