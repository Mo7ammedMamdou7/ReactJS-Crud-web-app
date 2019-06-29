import React , {Component} from 'react';
import './App.css';
import Form from './components/form/Form';
import List from './components/list/List';

class App extends Component {
  state = {
    courses: [
      {id: 1, name :"HTML"},
      {id: 2, name :"Java Script"},
      {id: 3, name :"CSS"}
    ],
    current : ''
  }
  handelChange = (e) => {
    this.setState({
      current : e.target.value
    })
  }
  addCourse = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    const random = Math.random();
    if(current){
      courses.push({id:random,name: current});
      this.setState({courses,current:''});
    }
    else{
      alert("Please insert value");
    }
  }
  delCourse = (index) =>{
    let courses = this.state.courses;
    courses.splice(index , 1 )
    this.setState({courses});
  }
  editCourse = (index , newValue) => {
    let {courses} = this.state;
    let course = courses[index];
    course['name'] = newValue;
    this.setState({courses})
  }
  render(){
    const {courses} = this.state;
    const ListItems = courses.map ( (course, index) => {
      return <List course={course} key={index} index={index} delCourse={this.delCourse} editCourse={this.editCourse}/>
    });
    return (
      <section className="App">
        <h3>Add Courses</h3>
        <Form handelChange={this.handelChange} addCourse={this.addCourse} current={this.state.current}/>
        <ul>
          {ListItems}          
        </ul>
        {courses.length ? '' : "No Items"}
      </section>
    );
  }
}

export default App;
