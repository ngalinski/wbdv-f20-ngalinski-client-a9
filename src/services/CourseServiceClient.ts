import {Injectable} from '@angular/core';

const courseUrl = 'https://wbdv-generic-server.herokuapp.com/api/001357876/courses';

@Injectable()
export class CourseServiceClient {
    findAllCourses = () =>
        fetch(courseUrl)
            .then(response => response.json())

    deleteCourse = (courseId) =>
        fetch(`${courseUrl}/${courseId}`, {
            method: 'DELETE'
        })
            .then(response => response.json())

    createCourse = () =>
        fetch(courseUrl, {
            method: 'POST',
            body: JSON.stringify({title: 'New Course', editing: false}),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())

    updateCourse = (course) =>
        fetch(`${courseUrl}/${course._id}`, {
            method: 'PUT',
            body: JSON.stringify(course),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())

    findCourseById = (cid) =>
        fetch(`${courseUrl}/${cid}`)
            .then(response => response.json())
}
