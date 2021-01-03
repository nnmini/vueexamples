<template>
     <div id="calendar-entry">
      <div class="calendar-entry-note">
        <input type="text" v-model="newEvent" placeholder="New Event" />
        <p class="calendar-entry-day">Day of event: <span class="bold">{{getActiveDayTitle}}</span></p>
        <a class="button is-primary is-small is-outlined" @click="submitEvent(newEvent)">Submit</a>
      </div>
      <p v-if="error">You must type something first</p>
    </div>
</template>

<script>
import {store} from '../store'
export default {
name: "CalendarEntry",
data(){
  return {
 newEvent:'',
 error: false
  }
 
},
computed: {
  getActiveDayTitle(){
    return store.getActiveDay().fullTitle
  }
},
methods:{
  submitEvent(newEvent){
    if(newEvent==''){
     
      return this.error=true;
    }
    store.getActiveDay().events.push({
      details: newEvent, edit: false 
    })
    this.error=false
    this.newEvent=""

  }
}

}
</script>

<style>

</style>