import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

//populates course details according to the creator
const CourseDetail = (props) => {
  const {context} = props;
  const [courseDetails, setCourseDetails] = useState('');
  const [courseCreator, setCourseCreator] = useState('');
  const { id } = useParams();

  const {authenticatedUser} = context;

  const isAuthenticated = () => {
    if(authenticatedUser){
      if(authenticatedUser.user.id === courseCreator.id)
      return (
        <>
          <Link className="button" to={`/courses/${id}/update`}>
            Update Course
          </Link>
          <Link className="button" to={`/courses/${id}/delete`}>
            Delete Course
          </Link>
        </>
      );
    }
  }

  useEffect( () => {
    context.data.getCourse(id)
      .then(data => {
        if(data){
          setCourseDetails(data);
          setCourseCreator(data.User);
        }
      })
      .catch(err => {
        console.log(err);
      })
    },
    [context.data, id]);

  return (
    <main>
      <div className="actions--bar">
            <div className="wrap">
                {isAuthenticated()}
                <Link className="button button-secondary" to="/">Return to List</Link>
            </div>
          </div>

          <div className='wrap'>
          <h2>Course Detail</h2>
          <form>
            <div className='main--flex'>
              <div>
                <h3 className='course--detail--title'>Course</h3>
                <h4 className='course--name'>{courseDetails.title}</h4>
                <p>By {courseCreator.firstName} {courseCreator.lastName}</p>
                <ReactMarkdown>{courseDetails.description}</ReactMarkdown>
              </div>
              <div>
                <h3 className='course--detail--title'>Estimated Time</h3>
                <p>{courseDetails.estimatedTime}</p>
                <h3 className='course--detail--title'>Materials Needed</h3>
                <ReactMarkdown className='course-detail--list'>
                  {courseDetails.materialsNeeded}
                </ReactMarkdown>
              </div>
            </div>
          </form>
        </div>
    </main>
   
  )
}

export default CourseDetail