console.log("app is running!!");
const app={
    title:'Thriller',
    subtitle:'Money Heist',
    options:[]
};


const user={
    name:'Nikki',
    age:5,
    location:'Bokaro'
};

function getLocation(location)
{
if(location)
{
    return <p>Location:{location}</p>
}
else{
    return undefined;
}
} 
const onSubmitForm=(e) =>
{
    e.preventDefault();
    //console.log('form sub');
    const option=e.target.elements.option.value;

    if(option){
        app.options.push(option);
        console.log(option);
        e.target.elements.option.value='';
        renderApp();
    }
    
};
const removeArrayList=()=>
{
    //app.options.length=0;
    app.options=[];
    renderApp();
};
const onMakeDecision=()=>{
    let randomNum=Math.floor(Math.random()*app.options.length);
    let option=app.options[randomNum];
    alert(option);
}
let appRoot=document.getElementById('app');
const renderApp=() => {
    const template=(
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length>0?'Here are the option':'No Option'}</p>
            <p>{app.options.length}</p>
            <ol>
                {
                app.options.map((list) =>
                {
                    return <li key={list}>{list}</li>
                })
                }
            </ol>
            <button disabled={app.options.length===0}onClick={onMakeDecision}>What should i do!</button>
            <button onClick={removeArrayList}>Remove All</button>
            <form onSubmit={onSubmitForm}>
                <input type="text" name="option"></input>
                <button>Add option</button>
            </form>
            </div>
    );
    ReactDOM.render(template,appRoot);
};
renderApp();