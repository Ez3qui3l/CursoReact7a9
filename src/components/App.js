import React from 'react'
import Comments from './comments'
import Faker from 'faker'
import Button from './button'

class App  extends React.Component{
    constructor(){
        super()
        this.state = {
            comments: []
        }
    }

    addCommet(){
            let comment = {
              userAvatar: Faker.image.avatar(),
              name: Faker.name.firstName(),
              date:Date.now().toLocaleString(),
              comentario: Faker.lorem.paragraph()
            }
            this.setState({comments: comment})
    }

    render(){
        return(
            
            <div>
                <Button/>
                {
                    this.state.comments.map((comment)=>{
                        
                    return <Comments 
                    name={comment.name}
                    userAvatar={comment.userAvatar} 
                    date={comment.date}
                    comment={comment.comentario}
                />
            })
        }

        </div>
        )
    }
}
export default App