import React from 'react';

import CourseDataService from '../service/CourseDataService';

const INSTRUCTOR = 'in28minutes'

class ListCoursesComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            courses: [],
            message: null
        }
        
        console.log("생성자 호출 : constructor(prop)");
        console.log("조회 바인드 : this.refreshCourses.bind(this)");
        this.refreshCourses = this.refreshCourses.bind(this);
        
        console.log("삭제 바인드 : this.deleteCourseClicked.bind(this)");
        this.deleteCourseClicked = this.deleteCourseClicked.bind(this);
    }

    componentDidMount() {
        console.log("함수 호출 : componentDidMount()");
        this.refreshCourses();        
    }

    refreshCourses() {
        console.log("함수 호출 : refreshCourses()");
        CourseDataService.retrieveAllCourses(INSTRUCTOR)//HARDCODED
            .then(
                response => {                    
                    console.log(response);
                    this.setState({ courses: response.data })
                }
            )
    }

    deleteCourseClicked(id) {
        CourseDataService.deleteCourse(INSTRUCTOR, id)
            .then(
                response => {
                    this.setState({ message: `Delete of course ${id} Successful` })
                    this.refreshCourses()
                }
            )
    
    }

    render() {
        console.log("함수 호출 : render()")
        return (
            <div className="container">
                <h3>All Courses</h3>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Description</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.courses.map(
                                    course =>
                                        <tr key={course.id}>
                                            <td>{course.id}</td>
                                            <td>{course.description}</td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteCourseClicked(course.id)}>삭제</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListCoursesComponent;