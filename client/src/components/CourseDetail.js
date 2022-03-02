import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import reactMarkdown from 'react-markdown';

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
          <p>By {courseCreator.firstName} {courseCreator.lastName}</p>
          <ReactMarkdown>{courseDetails.description}</ReactMarkdown>
        </div>
        <div>
          <h3 className='course--detail--title'>Materials Needed</h3>
          <ReactMarkdown className='course-detail--list'>
            {courseDetails.materialsNeeded}
          </ReactMarkdown>
        </div>
      </div>
    </form>
   </div>
  )
}

export default CourseDetail