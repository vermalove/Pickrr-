import React from 'react';
import Recommended from "./Recommended";
import Search from "./Search"
import Header from "./Header";
class Home extends React.Component{
constructor(props){
    super(props);
    this.state={
        fav:[],
        search:'',
        recommended:true,
    
    };
}
handleChange = e => {
    const { name, value } = e.target;
    this.setState({ search: value });
    
  };
  handleSubmit = e =>{
      e.preventDefault();
        console.log(this.state.search)
        if(this.state.search.trim().length!=0){
        this.setState({ recommended: false });}
        else{

        this.setState({ recommended: true });}

        
  }


    render(){

      
        return(<div>
     <Header />
<form className="form1" onSubmit={this.handleSubmit}>
  <label>
    
    <input type="text" name="name" 
       name="Search"
       placeholder="Search for Beer.."
       value={this.state.message}
       onChange={this.handleChange}
        />
  </label>
  <input type="submit" value="Submit" />
</form>

        {this.state.recommended ? <Recommended  recommendedList={this.state.recommendedList} />: <Search search={this.state.search} />}
     </div>
        )
    }
}
export default(Home)