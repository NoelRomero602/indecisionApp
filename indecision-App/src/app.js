class IndecisionApp extends React.Component {
    
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

const Header = (props) => {

   
        
         return(
        <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
        </div> 

         );
    

}
Header.defaultProps = {
    title: 'some deafult!'
};
const Action = (props) => {
    return (
    <div> 
           <button 
           onClick={props.handlePick}
           disabled={!props.hasOptions}
           >
          
               What should I do? 
               </button>
       </div>
    )
};




const Options =(props) => {
   
       return(
       <div>
              <button onClick={props.handleDeleteOptions}>removeAll</button>
               {
               props.options.map((value) =>
               
               <Option
                key={value} 
                optionText ={value}
                handleDeleteOption ={props.handleDeleteOption} />
              
               )
               
               
               }
               
       </div>
       );
    
}

const Option = (props) => {
    
        return(
       <div>
         Option: {props.optionText}
         <button onClick={(e)=> {
             props.handleDeleteOption(props.optionText)
         }}>
             
             remove</button>
       </div>
        );
    
}
class AddOption extends React.Component{
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

const User = (props) => {

    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age} </p>
        </div>
    )

};

ReactDOM.render(<IndecisionApp options ={['derp','redlightDistrict', 'mami street']}/>,document.getElementById('app'));