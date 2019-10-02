import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListCoursesComponent from './ListCoursesComponent';
import CourseComponent from './CourseComponent';          
import Signup from './login/Login';          

class InstructorApp extends React.Component {
    render() {
        return (
            <Router>
                <>
                <h1>Instructor Application</h1>
                <Switch>
                        <Route path="/" exact component={ListCoursesComponent} />
                        <Route path="/courses" exact component={ListCoursesComponent} />
                        <Route path="/courses/:id" component={CourseComponent} />
                        <Route path="/signup" component={Signup} />
                </Switch>
                </>
            </Router>
        )
    }
}

export default InstructorApp;