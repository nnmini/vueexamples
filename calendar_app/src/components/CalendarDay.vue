
<template>

          <div class="day column" @click="setActiveDay(day.id)">
          <div class="day-banner has-text-white has-text-centered">{{day.abbvTitle}}</div>
          <div class="day-details">
            <div class="day-number">{{day.id}}</div>
              <div  v-bind:key= index v-for="(event,index) in day.events">
                   <div class="day-event" style="background-color: rgb(153, 255, 153)">
                <span class="has-text-centered details">{{event.details}}</span> 
                <div class="has-text-centered icons"><i class="fa fa-pencil-square edit-icon"></i> 
                  <i class="fa fa-trash-o delete-icon"></i>
                </div>
                   </div>
              </div>
         
          </div>
        </div>
   
    
</template>

<script>
import {store} from '../store'
export default {
 name: 'CalendarDay',
  props: ['day'],
  methods: {
      setActiveDay(dayId){
          store.setActiveDay(dayId)

      }
  }
}
</script>

<style>

</style>