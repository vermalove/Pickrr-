import React from 'react';
import { connect } from "react-redux";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Header from './Header'

class Favourite extends React.Component{
  constructor(props){
    super(props);
    this.state={
        isloading:false,
        // headingID:[],
        // list: [],
      
    }
}
componentDidMount(){
  if( this.props.addList.length!=0){
    // console.log("this.props.FavLSit",addList)
      this.setState({isloading:true})
  }
}
  
    render(){
      const{addList}= this.props;
      console.log("this.props.FavLSit",addList)

      const favDiv= addList.map((item,index) => (
          
            <div className="column" key={index}>
               
            <div className="card">
             <div  className="cardInline">
             <div   className="cardImage"> <img src={item.image_url} className="image"/></div>
             <div  className="cardText">
                 <div className="star">
               <button className="btn" onClick={e=> this.props.removeList(item)} ><FontAwesomeIcon icon={faTrash} /></button>
</div><br/><b>{item.name}</b><br/>{item.description}
             
             </div>
             </div>
            </div>
          </div>
 
))
      // const currentTodos = this.props.FavList.slice(0, 5);
        return(
          <div >

<Header />
          <div class="row">
    
          {
          <div>{ this.state.isloading ? (
            <div><div className="favlist"><b>Favourite List</b></div>  
            <div className="">
      <span className="  "> {favDiv}</span>
    
    </div>
    </div>) : "No Value selected " } </div>
         }





         </div>
         
         </div>
        )
    }
}
const mapStateToProps = (state) => {
  return{
  addList : state.FavList,
  FID: state.FID
}}
const mapDispatchToProps = (dispatch) => {
  return {
      // addLists: (text) => {dispatch({type:'ADD_LIST',text:text})},
      removeList: (item) => {dispatch({type:'REMOVE_LIST',item:item})},
      // addID: (id) => {dispatch({type:'ADD_ID', id:id })},
  }
}
export default connect(mapStateToProps ,mapDispatchToProps)(Favourite);