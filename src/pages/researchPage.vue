<template>
    <div class="research-com">
        <research-sub-m class="showInMobile"/>
        <router-view></router-view>
    </div>
</template>

<script>
import researchSubM from '../components/research/researchSub-M'
export default {
    components:{
        researchSubM
    }
}
</script>

<style lang="scss">
    .research-com{
        padding-top: 52px;
        @media (max-width: 768px) {
            padding-top: 0;
        }
        margin-bottom: -50px;
        .showInMobile{
            display: none;
            @media (max-width:768px) {
                display: block;
            }
        }
    }
</style>
