
export const OPEN = "OPEN";
export const CLOSE = "CLOSE";


//State reducer
export const Menu = (state, {type, payload})  => {

    let actions = ["OPEN", "CLOSE" ];
    if(actions.includes(type)){
        switch(type){
         case OPEN :
           return {
             ...state,
             Menu: payload
           }
         case CLOSE :
           return {
             ...state,
             Menu: payload
           }
           default:
            throw new Error(`unknown action type ${type}`)
        }
    }
}



