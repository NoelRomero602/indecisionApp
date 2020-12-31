import React from 'react'; 
import Option from './Option';

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

export default Options; 