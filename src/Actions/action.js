export let Plus = (n)=>{
    return{
    type:"Increment",
    payload:n

}

}
export let Minus = (n)=>{
    return{
    type:"Decrement",
    payload:n

}

}