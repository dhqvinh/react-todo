import { connect } from 'react-redux';
import Todo from './Todo';
import { createTodo, deleteTodo } from '../../redux/reducers/todoReducer'

const mapStateToProps = state => ({
    todos: state.todoReducer.todos
})

const mapActionsToProps = dispatch => ({
    createTodo: todo => dispatch(createTodo(todo)),
    deleteTodo: id => dispatch(deleteTodo(id))
})

export default connect(
    mapStateToProps,
    mapActionsToProps
)(Todo)