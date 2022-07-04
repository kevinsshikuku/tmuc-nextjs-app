
export const LOAD = "LOAD";
export const OFFLOAD = "OFFLOAD";


//State reducer
export const Loading = (state, {type, payload})  => {

    let actions = ["LOAD", "OFFLOAD" ]
    
    if(actions.includes(type)){
        switch(type){
         case LOAD :
           return {
             ...state,
             Loading: payload
           }
         case OFFLOAD :
           return {
             ...state,
             Loading: payload
           }
           default:
             console.log(type, payload)
            throw new Error(`unknown action type ${type}`)
        }
    }
}



