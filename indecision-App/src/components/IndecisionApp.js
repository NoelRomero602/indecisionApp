import React from 'react'; 
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header'; 
import Action from './Action';   


export default class IndecisionApp extends React.Component  {
    
    constructor(props) {
        super(props);   
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this); 
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        
        this.state = {

            options: props.options
        };
    }

    componentDidMount () {
        console.log('componentDidMount!!lol')
    }
     
    componentDidUpdate (prevProps, preState)
    {
        console.log('componentDidUpdate')
    }

    componentWillUnmount()
    {
        console.log('ComponentWillUnmount')
    }
     handleDeleteOptions(){
         
         this.setState(() => ({
             options: []
         }))
     }
     handleDeleteOption(option)
     {
        this.setState((prevState) => ({
            options: prevState.options.filter((obj) => {
                return !(obj === option);
            })
        }))
     }
     handlePick(){
        const options= [...this.state.options];
         const randomIndex = Math.floor(Math.random() * options.length);
         console.log(options[randomIndex])
         alert( options[randomIndex]);
     }
    
     handleAddOption(option)
     {
         if(!option)
         {
            return "Enter valid Value";
         }
         else if (this.state.options.indexOf(option) > -1)
         {
            return 'This option already exists'
         }


         this.setState((prevState) => ({
            options: prevState.options.concat([option])
        }))


        //  this.setState((prevState) => {
             
        //   return {
        //       options: prevState.options.concat([option])
        //   }
        //  });
     }

    render(){
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        const options= [...this.state.options];
        return(    
      <div>
    
    <Header title={title} subtitle = {subtitle}/>
    <Action handlePick={this.handlePick} hasOptions={this.state.options.length > 0}/>
    <Options
     options={options}
     handleDeleteOptions={this.handleDeleteOptions}
     handleDeleteOption={this.handleDeleteOption}
     />
    <AddOption
       handleAddOption = {this.handleAddOption}
    />

    
    </div>
    );    
    }
    
}

IndecisionApp.defaultProps = {
    options: []
}
