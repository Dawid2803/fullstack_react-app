import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

//populates the initial courses list on the home page dynamically
const Courses = (props) => {


    const [courses, setCourses] = useState([]);
    const {context} = props;

    useEffect(() => {
        context.data.getCourses()
        .then(data => {
            if(data){
                setCourses(data)
            }else {
                props.history.push('/error')
            }
        })
        .catch(err => {
            console.log(err);
        });
    }, [context.data, props.history]);

    
        const courseList = courses.map( course => {
            return(
                <Link to={`/courses/${course.id}`} className='course--module course--link' key={course.id}>
                    <h2 className='course--label'>Course</h2>
                    <h3 className='course--title'>{course.title}</h3>
                </Link>
            )
        
        })

        return(
            <div className='wrap main--grid'>
                {courseList}
                <Link to={'courses/create'} className='course--module course--add--module'>
                <span className="course--add--title">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 13 13" className="add">
                        <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
                    </svg>
                    New Course
                 </span>
                </Link>
            </div>
        )
   

}

export default Courses