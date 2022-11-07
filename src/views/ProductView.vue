<template>
<div>
  <site-header></site-header>
  <academic-cap></academic-cap>
</div>
</template>

<script>
/* eslint-disable */
import SiteHeader from "@/components/layout/SiteHeader.vue"
import AcademicCap from '@heroicons/vue/solid/AcademicCapIcon'
export default{
  name: "ProductView",
  components: {
    SiteHeader,
    AcademicCap
  },

  data(){
    return{
      
    }
  }
};
</script>
