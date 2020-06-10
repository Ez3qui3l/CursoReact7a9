import React from 'react'

import Regards from './regards'
//Crear componente
//const App = () => {
  //  return <div>Hola Mundo</div>
//}
class App  extends React.Component{
    constructor(){
        super()
        this.state = {
            name: 'Ezequiel',
            lastname: 'Lopez Romero'
        }
    }

    ChangeState(objecName){
        
        this.setState(objecName)
        
    }
  

    render(){
        return(
            <div>
                <Regards objecName={this.state}/>
                <button onClick={()=>{this.ChangeState({name: 'Fernando', lastname:'Mendoza'})}}>Ezequiel</button>
                <button onClick={()=>{this.ChangeState({name: 'Manuel', lastname:'Trujillo'})}}>Manuel</button>
                <button onClick={()=>{this.ChangeState({name: 'Luis', lastname:'Aragon'})}}>Luis</button>  

        </div>
        )
    }
}
export default App