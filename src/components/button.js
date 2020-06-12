import React from 'react'

class Button extends React.Component{
    constructor(props){
        super()
    }
    render(){
        return (
            <button onClick={()=> this.props.onclick()} className="ui primary button">
            {this.props.text}
          </button>
        )
    }


}
export default Button