import React , {Component} from 'react';
import './List.css';

class List extends Component {
    state = {
        isEdit : false
    }
    renderItem = () => {
            return(
                <li key={this.props.id}>
                    <span>{this.props.course.name}</span>
                    <button type="button" onClick={() => this.ToggleState()}>Edit</button>
                    <button type="button" onClick={ () => this.props.delCourse(this.props.index)}>Delete</button>
                </li>
            )
    }
    editSubmit = (e) => {
        e.preventDefault();
        this.props.editCourse(this.props.index , this.input.value);
        this.ToggleState();
    }
    renderEdit = () => {
        return(
            <li key={this.props.id}>
                <form onSubmit={this.editSubmit}>
                    <input type="text" ref={(v) => {this.input = v}} defaultValue={this.props.course.name}/>
                    <button type="submit">Update Course</button>
                </form>
            </li>
        )
    }
    ToggleState = () => {
        let {isEdit} = this.state;
        this.setState({isEdit: !isEdit})
    }
    render(){
        return(
            <React.Fragment>
                {this.state.isEdit ? this.renderEdit() : this.renderItem()}
            </React.Fragment>
        )
    }
}

export default List;