
export const Dark = "Dark";
export const Light = "Light";


/** Theme state reducer */
export const Theme = (state, {type, payload})  => {
   let actions = [ "Dark", "Light"]
   if(actions.includes(type)){

     switch(type) { 
      case Dark :
        return {
          ...state, Theme:  payload
        }
        case Light :
        return {
          ...state, Theme:  payload
        }
        default:
         throw new Error(`unknown  action type ${ type}`)
     }
   }
}



