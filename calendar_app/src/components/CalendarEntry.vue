<template>
     <div id="calendar-entry">
      <div class="calendar-entry-note">
        <input type="text" placeholder="New Event" />
        <p class="calendar-entry-day">Day of event: <span class="bold">{{getActiveDayTitle}}</span></p>
        <a class="button is-primary is-small is-outlined">Submit</a>
      </div>
    </div>
</template>

<script>
import {store} from '../store'
export default {
name: "CalendarEntry",
computed: {
  getActiveDayTitle(){
    return store.getActiveDay().fullTitle
  }
}

}
</script>

<style>

</style>