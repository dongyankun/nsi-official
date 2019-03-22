<template>
    <div class="eventPage-com">
        <event-sub class="showInMobile"/>
        <event-banner/>
        <event-list/>
    </div>
</template>

<script>
import eventBanner from '../components/event/eventBanner'
import eventList from '../components/event/eventList'
import eventSub from '../components/event/eventSub-M'
export default {
    components:{
        eventBanner,
        eventList,
        eventSub
    }
}
</script>

<style lang="scss">
    .eventPage-com{
      padding-top: 52px;
      @media (max-width: 768px) {
          padding-top: 0;
      }
      .showInMobile{
          display: none;
          @media (max-width: 768px) {
              display: block;
          }
      }
    }
</style>
