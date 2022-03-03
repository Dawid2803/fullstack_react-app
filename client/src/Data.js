import config from './config';

export default class Data {
  api(path, method = 'GET', body = null, requiresAuth = false, credentials = null) {
    const url = config.apiBaseUrl + path;
  
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    };

    if (body !== null) {
      options.body = JSON.stringify(body);
    }

    // if (requiresAuth) {    
    //   const encodedCredentials = btoa(`${credentials.username}:${credentials.password}`);
    //   options.headers['Authorization'] = `Basic ${encodedCredentials}`;
    // }
    return fetch(url, options);
  }

  // sends out a API request to GET a list of courses
    async getCourses(){
      const response = await this.api('/courses', 'GET');
      if (response.status === 200){
        return response.json().then(data => {
          return data.courses;
        });
      }
      else if (response.status === 401){
        return null;
      }
      else {
        throw new Error();
      }

    }

  // sends out a API request to GET a course per id 
    async getCourse(id){
      const response = await this.api(`/courses/${id}`, 'GET');
      if(response.status === 200){
        return response.json().then(data => {
          return data.course;
        });
      }
      else if (response.status === 401){
        return null;
      }
      else {
        throw new Error();
      }

    }

    // sends out a API request to update a course according to id
      async updateCourse(course, id){
        const response = await this.api(`/courses/${id}`, 'PUT', course);
        if(response.status === 204){
            return response.json().then(data => {
              return data.course;
            })
        }
      }


    // TODO: sends out a API request to POST/Create a new course
      // async createCourse(){
      //   const response = await this.api('/courses', 'POST')
      // }

  // async getUser(username, password) {
  //   const response = await this.api(`/users`, 'GET', null, true, { username, password });
  //   if (response.status === 200) {
  //     return response.json().then(data => data);
  //   }
  //   else if (response.status === 401) {
  //     return null;
  //   }
  //   else {
  //     throw new Error();
  //   }
  // }
  
  // async createUser(user) {
  //   const response = await this.api('/users', 'POST', user);
  //   if (response.status === 201) {
  //     return [];
  //   }
  //   else if (response.status === 400) {
  //     return response.json().then(data => {
  //       return data.errors;
  //     });
  //   }
  //   else {
  //     throw new Error();
  //   }
  // }
}
