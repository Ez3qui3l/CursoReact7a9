import React from 'react'
import Faker from 'faker'

import Comments from './comments'
import Button from './button'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            comments: []
        }
        this.addComment=this.addComment.bind(this)
        this.deleteComment=this.deleteComment.bind(this)

    }

    addComment(){
        let comment = {
            userAvatar: Faker.image.avatar(),
            name: Faker.name.firstName(),
            date: Date.now().toLocaleString(),
            comment: Faker.lorem.paragraph()
        }
        let copyState = this.state.comments
        copyState.push(comment)
                //let copyState = {...this.state, comments: this.state.comments.push(comment)}

        //this.setState([copyState])

        this.setState({comments: copyState})
    }

    deleteComment(){
        let copyState={...this.state, comments: this.state.comments.pop()}
        this.setState([copyState])
    }

    render(){
        return (
            <div>
                <Button onclick={this.addComment} text={'Comentar'}
                />
                <Button onclick={this.deleteComment} text={'Borrar'}
                />
                    
                
                {
                    this.state.comments.map((comment) => { 
                        return( <Comments 
                            key={comment.name}
                            userAvatar={comment.userAvatar}
                            name={comment.name} 
                            date={comment.date}
                            comment={comment.comment}
                        />)
                    })
                }
                
            </div>
        )
    }
}

export default App