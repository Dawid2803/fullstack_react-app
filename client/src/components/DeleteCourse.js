import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';



//removes cookie and signs user out, reroute to home page
export const DeleteCourse = (props) => {
    const { context } = props;
    const { id } = useParams();
    const authenticatedUser = context.authenticatedUser;

    useEffect(() => {
        context.data.deleteCourse(id, authenticatedUser);
        console.log("Course deleted" );;    
    });



    return(
        <>
            {props.history.push('/')}
        </>
    )
  
}