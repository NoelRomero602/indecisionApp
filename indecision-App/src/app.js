class IndecisionApp extends React.Component {

    
    render(){
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        const options= ['THing one', 'THing two','Thing three'];
        return(    
      <div>
    
    <Header title={title} subtitle = {subtitle}/>
    <Action />
    <Options options={options}/>
    <AddOption />

    
    </div>
    );    
    }
    
}


class Header extends  React.Component {

    render(){
        
         return(
        <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
        </div> 

         );
    }

}
class Action extends React.Component {
    handlePick(){
        alert('handlePick')
    }
    render(){
        return(
       <div> 
           <button onClick={this.handlePick}>What should I do? </button>
       </div>
        );
    }
}



class Options extends React.Component {
    constructor (props){
        super(props);
        console.log(this.this);
           this.removeAllFunction = this.removeAllFunction.bind(this);
        

    }
  removeAllFunction(){
     // alert('Remove All is active');
     console.log(this.props.options);
  }
  
    render(){
       return(
       <div>
              <button onClick={this.removeAllFunction}>removeAll</button>
               {
               this.props.options.map((value) =><Option key={value} optionText ={value} />
              
               )
               
               
               }
               
       </div>
       );
    }
}

class Option extends React.Component{
    render(){
        return(
       <div>
         Option: {this.props.optionText}
       </div>
        );
    }
}
class AddOption extends React.Component{
    handleSubmition (e) 
    {
       e.preventDefault();
        const option = e.target.elements.option.value.trim();

        if(option)
        {
            alert( option);
        }
    }
    render(){
         return(
             <div>
                {<form onSubmit={this.handleSubmition}>
            <input type="text" name="option"/>
            <button> Add Option</button>
        </form>
                }
             </div>
         )
    }
}



ReactDOM.render(<IndecisionApp/>,document.getElementById('app'));