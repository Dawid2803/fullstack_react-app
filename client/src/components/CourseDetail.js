import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
//import ReactMarkdown from 'react-markdown';

const CourseDetail = (props) => {
  const {context} = props;
  const [courseDetails, setCourseDetails] = useState([]);
  const { id } = useParams();

  useEffect( () => {
    context.data.getCourse(id)
      .then(data => {
        if(data){
          console.log(data);
          setCourseDetails(data)
        }
      })
      .catch(err => {
        console.log(err);
      })
    }
  )
    const selectedCourse = courseDetails.course;
  return (
    <div className='wrap'>
    <h2>Course Detail</h2>
    <form>
      <div className='main--flex'>
        <div>
          <h3 className='course--detail--title'>Course</h3>
          <h4 className='course--name'>{selectedCourse.title}</h4>
          <p>By {selectedCourse.User.firstName} {selectedCourse.User.lastName}</p>
          <p>{selectedCourse.description}</p>
        </div>
        <div>
          <h3 className='course--detail--title'>Materials Needed</h3>
          <ul className='course-detail--list'>
            <li>{selectedCourse.materialsNeeded}</li>
          </ul>
        </div>
      </div>
    </form>
    </div>
  )
}

export default CourseDetail