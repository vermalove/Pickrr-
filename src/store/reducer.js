import { ADD_LIST,REMOVE_LIST } from './action';

// function Lists(state =[],action){
//     switch(action.type){
//         case ADD_LIST:
//             return[
//                 ...state,
//                 {
//                     text: action.text,
//                     completed: false
//                 }

//             ]
//     }
// }

const initialState={
    FavList:[],
    UnFavList:[],
    FID:[]
};

const myReducer = (state = initialState, action)=>{
    // debugger;
    // const newState= {...state};

    console.log("state",state)
    // console.log("action",action)
    // console.log("action.text",action.text)   
    //  console.log("action",paylo)


    switch(action.type){
        case "ADD_LIST":
            return{
                ...state,                
                FavList:[
                    ...state.FavList,
                     action.text
                ],
                FID:[
                    ...state.FID,
                     action.text.id
                ]
            } 
        
            case "REMOVE_LIST":
                return{
                    FavList:[
                        ...state.FavList.filter(o=> o.id!== action.item.id),
                         
                    ],
                    FID:[
                        ...state.FID.filter(num=> num!==action.item.id)
                    ]

                 
                }
    }
    return state;
};

export default myReducer;