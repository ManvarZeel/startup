import { React,Component } from "react";
import "./App.css";
class App extends Component{
   constructor(props){
    super(props);
    this.state = {
      blocks: [
        // "#FF0000",
        // "#00FFFF",
        // "#0000FF",
        // "#00ff40",
        // "#ff00bf",
        // "#00ffbf",
        // "#ffbf00"
      ]
    
     
    };
   
  }
  generateColor = () => {
    return '#' + Math.random().toString(16).substr(-6);
  }
  
   handleAdd =() => {
     console.log("+ called");
     console.log(this.blocks);
     this.setState({
        blocks: [...this.state.blocks, this.generateColor() ]
     });
  }
  
  //style={{backgroundcolor : color}}
  render(){
    console.log(this.state);
    const list = this.state.blocks.map(color => (
      <div style={{backgroundColor : color}} className="block">
        <span>{color}</span>
      </div>
    ));
    return(
      <div>  
          {list}
        
        
        <button onClick={this.handleAdd}> + </button>
        
        
        
        </div>
      
    )
  }
}


export default App;