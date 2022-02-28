import Courses from './components/Courses';
import Header from './components/Header';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import withContext from './Context';


function App() {
  
  // const courseListData = fetch('http://localhost:5000/api//courses')
  //   .then(res =>res.json())
  //   .then(data => console.log(data.courses));

    const CoursesWithContext = withContext(Courses);
    const HeaderWithContext = withContext(Header);
    
  return (
    <Router>
      <div>
        <HeaderWithContext />

        <Switch>
            <Route exact path="/" component={CoursesWithContext} />
        </Switch>

      </div>
    </Router>

  );
}

export default App;
