const React = require('react')
const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
  }

class Index extends React.Component{
    render(){
        const {pokemon} = this.props
        return(
            
            <div>
                <h1 style = {myStyle}>See All The Pokemon!</h1>
            
                <ul>
                    {pokemon.map((mon, i) => {
                        return (
                            <li>
                                <a href ={`/pokemon/${i}`}>{mon.name[0].toUpperCase() + mon.name.slice(1)}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

module.exports = Index