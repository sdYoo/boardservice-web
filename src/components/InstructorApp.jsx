import React from 'react';
import ListCoursesComponent from './ListCoursesComponent';                                    

class InstructorApp extends React.Component {
    render() {
        return (<>
              <h1>Instructor Application</h1>
              <ListCoursesComponent/>
            </>
        )
    }
}

export default InstructorApp;