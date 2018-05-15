<template>
    <v-footer :fixed="fixed" app dark class="primary ">
        <span class="mx-5 align-center">this is my great footer.</span>
    </v-footer>
</template>

<script>
export default {
  data(){
      return{
        fixed: false,
      }
  }
}
</script>

<style lang="stylus" scoped>
footer
    // background-color #ccc !important
</style>


