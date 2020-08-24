console.log('App.js');

// JSX - JavaScript XML

// create app object title/subtitle
// user title in the template
// render template new p tag - If options.length > 0 " Here are your options" "no options"
const appObj ={
    title: 'Indecision App',
    subtitle:'This is my sub title',
    options: []
    
};
const onFormSubmit = (e) => {
    e.preventDefault();
   const option = e.target.elements.option.value;
    console.log(option);
    if(option)
    {
        appObj.options.push(option);
        console.log(appObj.options);
        e.target.elements.option.value = '';
        RenderListFuntion();
    }
};

const resetArray = () =>
{
    
     appObj.options = [];
     console.log(appObj.options);
     RenderListFuntion();
}

//var template = /*#__PURE__*/React.createElement("p", null, "someTHingnew");

const appRoot = document.getElementById('app');

const number =[55,101,1000];

const onMakeDecision = () => {
 const randomNum = Math.floor(Math.random() * appObj.options.length);
 console.log(randomNum);
 const option = appObj.options[randomNum];
 alert(option);
 console.log(randomNum);
};

const RenderListFuntion = ()=> {
    const template = (
        <div>
        <h1>{appObj.title}</h1> 
    {appObj.subtitle && <p> {appObj.subtitle}</p>}
        { appObj.options.length > 0 ?  <p> Here are your options</p>: <p>no options</p>}
    <button disabled={appObj.options.length ==0}onClick={onMakeDecision}> What should I do</button>
  <button onClick={resetArray}> remove All </button> 

 
        <o1>
            {
                appObj.options.map((value) => {
                return <li key={value}> {value}</li>;
                })
            }
        </o1>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button> Add Option</button>
        </form>
         </div>
    );
    ReactDOM.render(template,appRoot);
}

RenderListFuntion();