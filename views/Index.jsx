const React = require('react')
const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
  }

class Index extends React.Component{
    render(){
        // const {pokemonList} = this.props
        return(
            
            <div style={myStyle}>
                <h1>See All The Pokemon!</h1>
            
                {/* <ul>
                    {pokemonList.map((pokemon,i) => {
                        
                    })}
                </ul> */}
            </div>
        )
    }
}

module.exports = Index