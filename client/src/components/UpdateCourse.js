import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//not updating ???

const UpdateCourse = (props) => {
    

    const { context } = props;
    const [ title, setTitle] = useState('');
    const [ description, setDescription] = useState('');
    const [ estimatedTime, setEstimatedTime] = useState('');
    const [ materialsNeeded, setMaterialsNeeded] = useState('');

    const { id } = useParams();

    useEffect(() => {
        context.data.getCourse(id)
            .then( data => {
                if (data){
                    setTitle(data.title);
                    setDescription(data.description);
                    setEstimatedTime(data.estimatedTime);
                    setMaterialsNeeded(data.materialsNeeded);
                }
            })
            .catch( err => {
                console.log(err);
                props.history.push('/error');
            })
    }, [])

  return (
    <div className='wrap'>
        <h2>Update Course</h2>
            <form onSubmit={(e) => handleUpdate(e)}>
                <div className="main--flex">
                    <div>
                        <label htmlFor="courseTitle">Course Title</label>
                        <input id="courseTitle" name="courseTitle" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

                        <p>By Joe Smith</p>

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

    const handleUpdate = (e) => {
        e.preventDefault();
        const updatedCourse = {
            title,
            description,
            estimatedTime,
            materialsNeeded,
          };
        
          context.data
            .updateCourse(updatedCourse, id)
            .then(data => {
              if (data) {
                data.length ? console.log(data) : props.history.push(`/courses/${id}`);
              }
            })
            .catch(err => {
              console.log(err);
              props.history.push('/error');
            });
    }

}

export default UpdateCourse