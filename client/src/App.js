import Courses from './components/Courses';
import Header from './components/Header';
import CourseDetail from './components/CourseDetail';
import CreateCourse from './components/CreateCourse';
import UpdateCourse from './components/UpdateCourse';


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
    const UpdateCourseWithContext = withContext(UpdateCourse);
    const CreateCourseWithContext = withContext(CreateCourse);
    
  return (
    <Router>
      <div>
        <HeaderWithContext />

        <Switch>
            <Route exact path="/" component={CoursesWithContext} />
            <Route path='/courses/create' component={CreateCourseWithContext} />
            <Route exact path='/courses/:id' component={CourseDetailWithContext} />
            <Route path='/courses/:id/update' component={UpdateCourseWithContext}/>

        </Switch>

      </div>
    </Router>

  );
}

export default App;
