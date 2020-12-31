import React from 'react';


export default class AddOption extends React.Component{
    constructor(props) {
        super(props);
        this.handleSubmition = this.handleSubmition.bind(this);
    
        this.state = {
            error: undefined
          };
    }
    
        handleSubmition (e) 
        {
           e.preventDefault();
           
            const option = e.target.elements.option.value.trim();
    
            const error = this.props.handleAddOption(option);
    
            this.setState(() => ({error: error}))
          
        }
    
        render(){
             return(
                 <div>
                     {this.state.error && <p>{this.state.error}</p>}
                    {<form onSubmit={this.handleSubmition}>
                <input type="text" name="option"/>
                <button> Add Option</button>
            </form>
                    }
                 </div>
             )
        }
    }