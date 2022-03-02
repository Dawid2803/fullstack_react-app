import Courses from './components/Courses';
import Header from './components/Header';
import CourseDetail from './components/CourseDetail';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import withContext from './Context';


function App() {
  
    const CoursesWithContext = withContext(Courses);
    const HeaderWithContext = withContext(Header);
    const CourseDetailWithContext = withContext(CourseDetail);
    
  return (
    <Router>
      <div>
        <HeaderWithContext />

        <Switch>
            <Route exact path="/" component={CoursesWithContext} />
            <Route path='/courses/:id' component={CourseDetailWithContext} />

        </Switch>

      </div>
    </Router>

  );
}

export default App;
