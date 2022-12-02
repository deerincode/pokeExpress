const React = require('react')
const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
  }

class Show extends React.Component{
    render(){
        const {mon} = this.props

        return(
            
            <div>
                <h1 style = {myStyle}>Gotta Catch 'Em All!</h1>
                <h2>{mon.name[0].toUpperCase() + mon.name.slice(1)}</h2>
                <img src={`${mon.img}.jpg`}></img>
                <br></br>
                <a href ={`/pokemon`}>Back</a>
                
            </div>
        )
    }
}

module.exports = Show