import {seedData} from './seed'

 export  const store = {
    state: {
        seedData : seedData
    },
    getActiveDay(){
       return this.state.seedData.find(day=>day.active)
    },
    setActiveDay(dayId){
        this.state.seedData.map((dayObj)=>dayObj.id===dayId?dayObj.active=true:dayObj.active=false)
    },

    getDay(dayId){
        return this.state.seedData.find(day=>day.id===dayId)
    }
    


}