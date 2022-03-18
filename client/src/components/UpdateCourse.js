import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//TODO: After authentication has been implemented:
 //set auth user as person that updated course

const UpdateCourse = (props) => {
    

    const { context } = props;
    const authenticatedUser = context.authenticatedUser;
    
    const [ title, setTitle] = useState('');
    const [ description, setDescription] = useState('');
    const [ estimatedTime, setEstimatedTime] = useState('');
    const [ materialsNeeded, setMaterialsNeeded] = useState('');


    const { id } = useParams();

    useEffect(() => {
        context.data.getCourse(id)
            .then( data => {
                if (data.User.emailAddress === authenticatedUser.user.emailAddress){
                  console.log(data);
                    setTitle(data.title);
                    setDescription(data.description);
                    setEstimatedTime(data.estimatedTime);
                    setMaterialsNeeded(data.materialsNeeded);
                }else{
                  console.log("Authorisation denied");
                  props.history.push('/')
                }
            })
            .catch( err => {
                console.log(err);
                props.history.push('/error');
            })
    }, []);

    const handleUpdate = (e) => {
      e.preventDefault();
      const updatedCourse = {
          title,
          description,
          estimatedTime,
          materialsNeeded,
        };
      
        context.data
          .updateCourse(updatedCourse, id, authenticatedUser)
          .then(data => {
            if (data ) {
              data.length ? console.log(data) : props.history.push(`/courses/${id}`);
            }
          })
          .catch(err => {
            console.log(err);
            props.history.push('/error');
          });
  }

  return (
    <div className='wrap'>
        <h2>Update Course</h2>
            <form onSubmit={(e) => {handleUpdate(e)}}>
                <div className="main--flex">
                    <div>
                        <label htmlFor="courseTitle">Course Title</label>
                        <input id="courseTitle" name="courseTitle" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

                        <p>By {authenticatedUser.user.firstName} {authenticatedUser.user.lastName}</p>

                        <label htmlFor="courseDescription">Course Description</label>
                        <textarea id="courseDescription" name="courseDescription" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                    <div>
                        <label htmlFor="estimatedTime">Estimated Time</label>
                        <input id="estimatedTime" name="estimatedTime" type="text" value={estimatedTime} onChange={(e) => setEstimatedTime(e.target.value)} />

                        <label htmlFor="materialsNeeded">Materials Needed</label>
                        <textarea id="materialsNeeded" name="materialsNeeded" value={materialsNeeded} onChange={(e) => setMaterialsNeeded(e.target.value)}></textarea>
                    </div>
                </div>
                <button className="button" type="submit">Update Course</button><button className="button button-secondary" onClick={() => props.history.push(`/courses/${id}`)}>Cancel</button>
            </form>
    </div>
  )

}

export default UpdateCourse