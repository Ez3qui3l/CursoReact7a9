import React from 'react'

class Regards extends React.Component{
    constructor(props){
        super()
    }

render(){
    return (
        <div>
            <h1>Hola: {this.props.objecName.name}</h1>
        </div>
    )
}
}
export default Regards