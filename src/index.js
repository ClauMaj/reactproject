import React from "react";    // import react
import ReactDOM from "react-dom";  // import react-dom
import App from "./App";  // component
import JobSearch from "./components/JobSearch";  // component
import JobManager from "./components/JobManager";  // component
import BaseLayout from './components/layout/BaseLayout'; // import the BaseLayout component(covers all pages)
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' // routers and switches for the render
import reducer from "./reducers/reducer";  // import the reducer
import { createStore } from 'redux' //Redux.createStore()
import { Provider } from 'react-redux' // makes available the state by wraping all components
import "bootstrap/dist/css/bootstrap.min.css"; // import bootstrap link
import "./assets/styles/global.css";  // import custom css

// font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash, faEdit)



// save state to local storage (convert to string and save)
const saveToLocalStorage = (reduxGlobalState) => {
  let saveState = { savedJobs: [...reduxGlobalState.savedJobs] }
  try {
    const serializeState = JSON.stringify(saveState);
    localStorage.setItem('jobsState', serializeState)
  }
  catch (e) {
    console.log(e);
  }
}


// load data from local storage (return => if it exist => read and parse | if doesn't exist set initial value of store)
const loadFromLocalStorage = () => {
  const serializeState = localStorage.getItem('jobsState');
  if (serializeState === null) {
    return {
      searchedJobs: { results: [] },
      remainingPages: 0,
      detailedJob: null,
      startAddJobForm: false,
      tempJobForm: {
        jobTitle: "",
        company: "",
        location: "",
        date: new Date(),
        active: true,
        rejected: false,
        interview: false,
        link: "",
        from: "",
        notes: "",
      },
      setJobToEdit: {
        jobTitle: "",
        company: "",
        location: "",
        date: new Date(),
        active: true,
        rejected: false,
        interview: false,
        link: "",
        from: "",
        notes: "",
      },
      savedJobs: [],
    }
  }
  else {
    return {
      searchedJobs: { results: [] },
      remainingPages: 0,
      detailedJob: null,
      startAddJobForm: false,
      savedJobs: JSON.parse(serializeState).savedJobs || [], // JS object
      tempJobForm: {
        jobTitle: "",
        company: "",
        location: "",
        date: new Date(),
        active: true,
        rejected: false,
        interview: false,
        link: "",
        from: "",
        notes: "",
      },
      setJobToEdit: {
        jobTitle: "",
        company: "",
        location: "",
        date: new Date(),
        active: true,
        rejected: false,
        interview: false,
        link: "",
        from: "",
        notes: "",
      },
    }
  }
}

// call the load function and then pass it to the store
const persistedState = loadFromLocalStorage();

// Initializing Redux Store by passing the reducer, initial state and ReduxDev tools link
let store = createStore(reducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// subscribes the saveToLocalStorage to the store (every time the state changes the localStorage is updated)
store.subscribe(() => {
  saveToLocalStorage(store.getState());
})

// default rendering method on the root element (must pass redux store instance to provider via "store")
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <BaseLayout>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/jobsearch" component={JobSearch} />
            <Route path="/jobmanager" component={JobManager} />
          </Switch>
        </BaseLayout>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

