class VisibilityToggle extends React.Component{
    constructor(props)
    {
        super(props);
        this.handleToggleVisibility=this.handleToggleVisibility.bind(this);
        this.state=
        {
            visibility:false
        }

    }
    handleToggleVisibility(){
        this.setState((prevState)=>{
            return{
            visibility:!prevState.visibility
            };  
        });
    }
    render(){
        return(
        <div>
            <h1>VisibilityToggle</h1>
        <button onClick={this.handleToggleVisibility}>{this.state.visibility?'Hide Details':'show Detail'}</button>
        {this.state.visibility && (
            <div>
                <p>There is some paragraph</p>
                </div>
        )}
        </div>
        );      
    }
}
ReactDOM.render(<VisibilityToggle />,document.getElementById('app'));


/* let Visibility=false;
const VisibilityToggle=()=>
{
    Visibility=!Visibility;
    render();
}
const render=()=>
{
    const template=(
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={VisibilityToggle}>{Visibility?'Hide Details':'Show Details'}</button> 
            {Visibility && <p>There is some details here</p>} 
        </div>
    )
    ReactDOM.render(template,document.getElementById('app'));
}
render();
 */