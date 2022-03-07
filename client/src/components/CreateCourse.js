import React, { useState, useEffect } from 'react';

const CreateCourse = (props) => {

    const { context } = props;
    const [ title, setTitle] = useState('');
    const [ description, setDescription] = useState('');
    const [ estimatedTime, setEstimatedTime] = useState('');
    const [ materialsNeeded, setMaterialsNeeded] = useState('');
    const [ errors, setErrors] = useState([]);

    return (
        <main>
        <div class="wrap">
            <h2>Create Course</h2>
            <ShowErrors errors={errors} />
            <form>
                <div class="main--flex">
                    <div>
                        <label for="courseTitle">Course Title</label>
                        <input id="courseTitle" name="courseTitle" type="text" onChange={(e) => setTitle(e.target.value)} />

                        <p>By Joe Smith</p>

                        <label for="courseDescription">Course Description</label>
                        <textarea id="courseDescription" name="courseDescription" onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                    <div>
                        <label for="estimatedTime">Estimated Time</label>
                        <input id="estimatedTime" name="estimatedTime" type="text" onChange={(e) => setEstimatedTime(e.target.value)} />

                        <label for="materialsNeeded">Materials Needed</label>
                        <textarea id="materialsNeeded" name="materialsNeeded" onChange={(e) => setMaterialsNeeded(e.target.value)}></textarea>
                    </div>
                </div>
                <button class="button" type="submit">Create Course</button><button class="button button-secondary" onclick="event.preventDefault(); location.href='index.html';">Cancel</button>
            </form>
        </div>
        </main>
    )


    function ShowErrors({ errors }) {
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
}

export default CreateCourse