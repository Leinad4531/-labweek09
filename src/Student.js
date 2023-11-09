import React from 'react'
import PropTypes from 'prop-types';

class Student extends React.Component{
    static defaultProps = {
        id: "101384910",
        name: "Daniel Akindun",
        school: "George Brown College, Toronto"
    }

    render(){
        return(
            <>
                <h3>{this.props.id}</h3>
                <h3>{this.props.name}</h3>
                <h3>{this.props.school}</h3>

            </>
        )
    }
}

Student.propTypes={
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
}

export default Student