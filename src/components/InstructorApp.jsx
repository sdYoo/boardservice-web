import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListCoursesComponent from './ListCoursesComponent';
import CourseComponent from './CourseComponent';          

//import Signup from './login/Login';
// Layout Config
import Header from './layouts/Header';
import Navigation from './layouts/Navigation';
import styled from 'styled-components';

class InstructorApp extends React.Component {
    render() {
        return (               
            <Router>

                <LayoutHeader>
                    <Header />
                    <Navigation />
                </LayoutHeader> 
                <>                
                </>
                <LayoutBody>
                <Switch>
                        <Route path="/" exact component={ListCoursesComponent} />
                        <Route path="/courses" exact component={ListCoursesComponent} />
                        <Route path="/courses/:id" component={CourseComponent} />                        
                </Switch>
                </LayoutBody>                
              
            </Router>
        )
    }
}

const LayoutHeader = styled.div`
    order: 1;
    margin 0 auto;
    display: flex;
    width: 100%;
    flex-flow: row wrap;
`

const LayoutBody = styled.div`
    order: 2;
    margin 0 auto;
    display: flex;
    width: 100%;
    flex-flow: row wrap;
`

export default InstructorApp;