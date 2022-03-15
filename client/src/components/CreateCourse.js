import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';



//TODO: After authentication has been implemented:
 //set auth user as person that created course

const CreateCourse = (props) => {

    const { context } = props;
    const authenticatedUser = context.authenticatedUser;
    const [ title, setTitle] = useState('');
    const [ description, setDescription] = useState('');
    const [ estimatedTime, setEstimatedTime] = useState('');
    const [ materialsNeeded, setMaterialsNeeded] = useState('');
    const [ errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCourse = {
            title,
            description,
            estimatedTime,
            materialsNeeded,
            userId: authenticatedUser.user.id
          };
        
          context.data
            .createCourse(newCourse)
            .then(errors => {
                if (errors) {
                  setErrors(errors);
                } else {
                  props.history.push('/');
                }
            })
            .catch(err => {
              console.log(err);
              props.history.push('/error');
            });
    }

    const ShowErrors = ({ errors }) => {
        let DisplayErrors = null;
        if (errors.length) {
            DisplayErrors = (
            <div className="validation--errors">
                <h3>Validation Errors</h3>
                <ul>
                {errors.map((error, index) => (
                    <li key={index}>{error}</li>
                ))}
                </ul>
            </div>
            );
        }
  
    return DisplayErrors;
    }

    const isAuthenticated = () =>  {
        if(authenticatedUser){
            return (
                <main>
                    <div className="wrap">
                        <h2>Create Course</h2>
                        <ShowErrors errors={errors} />
                        <form onSubmit={handleSubmit}>
                            <div className="main--flex">
                                <div>
                                    <label htmlFor="courseTitle">Course Title</label>
                                    <input id="courseTitle" name="courseTitle" type="text" onChange={(e) => setTitle(e.target.value)} />
            
                                    <p>By {authenticatedUser.user.firstName} {authenticatedUser.user.lastName}</p>
            
                                    <label htmlFor="courseDescription">Course Description</label>
                                    <textarea id="courseDescription" name="courseDescription" onChange={(e) => setDescription(e.target.value)}></textarea>
                                </div>
                                <div>
                                    <label htmlFor="estimatedTime">Estimated Time</label>
                                    <input id="estimatedTime" name="estimatedTime" type="text" onChange={(e) => setEstimatedTime(e.target.value)} />
            
                                    <label htmlFor="materialsNeeded">Materials Needed</label>
                                    <textarea id="materialsNeeded" name="materialsNeeded" onChange={(e) => setMaterialsNeeded(e.target.value)}></textarea>
                                </div>
                            </div>
                            <button className="button" type="submit">Create Course</button><button className="button button-secondary" onClick={(e) => props.history.push('/')}>Cancel</button>
                        </form>
                    </div>
                </main>
            )
        }else{
            return <Redirect to="/signin" />;
        }
    }

    return isAuthenticated();

  
      
    




  
}

export default CreateCourse