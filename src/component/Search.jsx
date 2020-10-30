import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRoad, faStar } from '@fortawesome/free-solid-svg-icons'
import Favourite from './Favourite';
import { connect } from "react-redux";

    class Search extends React.Component{
    constructor(props){
        super(props);
        this.state={
            recommendedList:[],
            indexOfFirstTodo:0,
            indexOfLastTodo:6,
            // favourteList:[],
            // favourteID:[]
        }
    }

    componentDidMount() {
        fetch('https://api.punkapi.com/v2/beers?beer_name='+this.props.search)
        .then(response => response.json())
        .then((data) => { 
            this.setState({recommendedList:data});
            // console.log(data)
        });
        
      }
      
      favourte = (item) =>{
          console.log("i",item)
          const doubleCheckHead = this.props.FID.includes(item.id);
          if(!doubleCheckHead){
        //   this.setState(prevState => ({
        //     favourteList: [
        //         ...prevState.favourteList,
        //         item,
        //       ],favourteID:[
        //           ...prevState.favourteID,
        //           item.id]
        //     }))
        this.props.addLists(item)
        }
            if(doubleCheckHead){
                // this.setState(prevState => ({
                //   favourteList: [
                //       ...prevState.favourteList.filter(o=> o.id!== item.id)
                    
                //     ]
                //     ,favourteID: [
                //         ...prevState.favourteID.filter(o=> o!== item.id)
                //         ]
                        
                //   }))
                this.props.removeList(item)
                }

                //   this.props.favlist(this.state.favourteList,this.state.favourteID)



      }
    render(){
        const{
            indexOfFirstTodo, indexOfLastTodo
        }=this.state
        console.log("recommendedList",this.props)
        console.log("recommendedList",this.state.favourteID)

        const currentTodos = this.state.recommendedList.slice(indexOfFirstTodo, indexOfLastTodo);
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
            <div >


                <div class="row">

                {recommended}
                       
                   
{/* 
<Favourite /> */}

 
 
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

export default connect(mapStateToProps ,mapDispatchToProps)(Search)