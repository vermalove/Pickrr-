import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRoad, faStar } from '@fortawesome/free-solid-svg-icons'
import Favourite from './Favourite';
import { connect } from "react-redux";

    class Recommended extends React.Component{
    constructor(props){
        super(props);
        this.state={
            // recommendedList:[],
            indexOfFirstTodo:0,
            indexOfLastTodo:80,
            // favourteList:[],
            // favourteID:[]
            page:1,    recommendedList:[],
        }
    }

  

    
      favourte = (item) =>{
          console.log("i",item)
          const doubleCheckHead = this.props.FID.includes(item.id);
          if(!doubleCheckHead){
    
        this.props.addLists(item)
        }
            if(doubleCheckHead){
             
                this.props.removeList(item)
                }
            
            
            }
            
            componentDidMount() {
                this.fetch()
              }
              
              next = () =>{
                  
                // console.log("next")
                this.setState(prevState => ({
                  page: prevState.page+1,
                }))
                this.fetch()
              } 
              previous = () =>{
                // console.log("previous")
            
                if(this.state.page>1)
                this.setState(prevState => ({
                  page: prevState.page-1,
                }))
                this.fetch()
              }
              fetch=()=>{
                fetch('https://api.punkapi.com/v2/beers?page='+this.state.page+'&per_page=80')
                .then(response => response.json())
                .then((data) => { 
                    this.setState({recommendedList:data});
                    // console.log(data)
                });}

    render(){
    const{recommendedList}=this.state
    console.log("this.props",this.props)
        const{
            indexOfFirstTodo, indexOfLastTodo
        }=this.state
        console.log("recommendedList",this.props)
        console.log("recommendedList",this.state.favourteID)

        const currentTodos = recommendedList.slice(indexOfFirstTodo, indexOfLastTodo);
const recommended=currentTodos.map((item,index) => (
                    
    <div className="column" key={index}>
       
    <div className="card">
     <div  className="cardInline">
     <div   className="cardImage"> <img src={item.image_url} className="image"/></div>
     <div  className="cardText">
         <div className="star">
       <button className="btn" onClick={e=>this.favourte(item)} ><FontAwesomeIcon color={this.props.FID.includes(item.id)? "yellow": ''} icon={faStar} /></button>
</div><br/><b>{item.name}</b><br/>{item.description}
     
     </div>
     </div>
    </div>
  </div>

))

        return(
            <div className="" >


                <div class="row recomClass">

                {recommended}
                       
        
                   

{/* <Favourite /> */}

 
 
</div>
<div className="customBtn">  <button className="btnnext" onClick={e=>this.previous()}>Previous</button>{this.state.page}<button className="btnnext" onClick={e=>this.next()}>Next</button>
</div>
</div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
    addList : state.FavList,
    FID: state.FID
}
}
const mapDispatchToProps = (dispatch) => {
    return {
        addLists: (text) => {dispatch({type:'ADD_LIST',text:text})},
        removeList: (item) => {dispatch({type:'REMOVE_LIST',item:item})},
        // addID: (id) => {dispatch({type:'ADD_ID', id:id })},
    }
}

export default connect(mapStateToProps ,mapDispatchToProps)(Recommended)