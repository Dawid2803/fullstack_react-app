import Courses from './components/Courses';
import Header from './components/Header';
import CourseDetail from './components/CourseDetail';
import CreateCourse from './components/CreateCourse';
import UpdateCourse from './components/UpdateCourse';
import UserSignUp from './components/UserSignUp';
import UserSignIn from './components/UserSignIn';
import { UserSignOut } from './components/UserSignOut';
import { DeleteCourse } from './components/DeleteCourse';


import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import withContext from './Context';
import PrivateRoute from './PrivateRoute';


function App() {
  
    const CoursesWithContext = withContext(Courses);
    const HeaderWithContext = withContext(Header);
    const CourseDetailWithContext = withContext(CourseDetail);
    const UpdateCourseWithContext = withContext(UpdateCourse);
    const CreateCourseWithContext = withContext(CreateCourse);
    const CreateUserWithContext = withContext(UserSignUp);
    const SignInWithContext = withContext(UserSignIn);
    const SignOutWithContext = withContext(UserSignOut);
    const DeleteCourseWithContext = withContext(DeleteCourse);
    
  return (
    <Router>
      <div>
        <HeaderWithContext />

        <Switch>
            <Route exact path="/" component={CoursesWithContext} />
            <Route path='/signup' component={CreateUserWithContext} />
            <Route path='/signin' component={SignInWithContext} />
            <Route path='/signout' component={SignOutWithContext} />
            <PrivateRoute path='/courses/create' component={CreateCourseWithContext} />
            <Route exact path='/courses/:id' component={CourseDetailWithContext} />
            <PrivateRoute path='/courses/:id/update' component={UpdateCourseWithContext}/>
            <Route path='/courses/:id/delete' component={DeleteCourseWithContext} />

        </Switch>

      </div>
    </Router>

  );
}

export default App;
