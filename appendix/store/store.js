export const store ={
state:{
  number: [1,2,3]
},
addNewNumber(newNumber){
    this.state.number.push(newNumber)
}
}