import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
//import ReactMarkdown from 'react-markdown';

const CourseDetail = (props) => {
  const {context} = props;
  const [courseDetails, setCourseDetails] = useState('');
  const [courseCreator, setCourseCreator] = useState('');
  const { id } = useParams();

  useEffect( () => {
    context.data.getCourse(id)
      .then(data => {
        if(data){
          console.log(data);
          console.log(data.User);
          setCourseDetails(data);
          setCourseCreator(data.User);
        }
      })
      .catch(err => {
        console.log(err);
      })
    },
    []);

  return (
    <div className='wrap'>
    <h2>Course Detail</h2>
    <form>
      <div className='main--flex'>
        <div>
          <h3 className='course--detail--title'>Course</h3>
          <h4 className='course--name'>{courseDetails.title}</h4>
          <p>By {courseDetails.User.firstName} {courseDetails.User.lastName}</p>
          <p>{courseDetails.description}</p>
        </div>
        <div>
          <h3 className='course--detail--title'>Materials Needed</h3>
          <ul className='course-detail--list'>
            <li>{courseDetails.materialsNeeded}</li>
          </ul>
        </div>
      </div>
    </form>
   </div>
  )
}

export default CourseDetail