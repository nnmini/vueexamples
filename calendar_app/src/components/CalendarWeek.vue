<template>
    <div id="calendar-week" class="container">
      <div class="columns is-mobile">
         <CalendarDay v-bind:key="day.id" v-for="day in sharedSeedData.seedData" :day="day"></CalendarDay>
        </div>
        
      </div>
  

</template>
<script>
import {store} from '../store'
import CalendarDay from './CalendarDay'
export default {
 name: "CalendarWeek",
 
 data(){
     return {
         sharedSeedData: store.state
         }
 },
 components: {
     CalendarDay
 }
}
</script>

<style>

</style>