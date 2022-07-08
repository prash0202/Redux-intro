let intialvalue = 10;
let IncDec = (state=intialvalue,action)=>{

    switch(action.type){
        case "Increment":
            return state+action.payload;
            break;

        case "Decrement":
            return state - action.payload;
            break;

        default:
           return state


        }

}

export default IncDec;