import React from 'react';
import { connect } from 'react-redux';

const TodoForm = props => {
    return (
        <form>
            <input type="text" name="value" />
            <input type="submit" />
        </form>
    );
}

const mapStateToProps = state => {
    return {};
}

export default connect(mapStateToProps, {})(TodoForm);