import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CourseDataService from '../service/CourseDataService';

const INSTRUCTOR = 'in28minutes'

class CourseComponent extends React.Component  {
  
  constructor(props) {
    super(props)

    this.state = {
        id: this.props.match.params.id,
        description: ""
    }
  }

  // 상태 업데이트
  componentDidMount() {

    console.log("CourseComponent.jsx에서 componentDidMount() 호출", this.state.id)

    //eslint-disable-next-line
    if(this.state.id == -1) {
        return
    }
    
    CourseDataService.retrieveCourse(INSTRUCTOR, this.state.id)
        .then(response => this.setState({
            description: response.data.description
        }))
  }

  onSubmit(values) {
        let username = INSTRUCTOR

        let course = {
            id: this.state.id,
            description: values.description
        }

        if (this.state.id === -1) {
            CourseDataService.createCourse(username, course)
                .then(() => this.props.history.push('/courses'))
        } else {
            CourseDataService.updateCourse(username, this.state.id, course)
                .then(() => this.props.history.push('/courses'))
        }

        console.log(values);
    }
  
    render() {
        console.log("ID: ", this.state.id);
        console.log("DC: ", this.state.description);

        // eslint-disable-next-line
        let { description, id } = this.state
        //let description = this.state.description
        //let id = this.state.id

        return (
            <div>
                <h3>Course</h3>
                <div className="container">
                    <Formik
                        initialValues={this.state}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Id</label>
                                        <Field className="form-control" type="text" name="id" disabled />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>
        )
    }

}

export default CourseComponent