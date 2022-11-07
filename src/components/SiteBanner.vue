<script setup>
</script>

<template>
  <section>
    <div class="container-fluid">
      <div class="row banner d-flex" id="banner">
        <div class="col-12 d-flex justify-content-center align-items-center">
          <div class="d-block">
            <div class="row justify-content-center pt-xl-0 pt-5">
              <div
                class="hero animate__animated animate__fadeInDown pt-xl-0 pt-5"
              >
                <p class="text-center pt-md-5">
                  <span>Fresh Produce Delivery</span> <br />Organic, Origin and Handmade Goods
                </p>
              </div>
            </div>
            <div class="row d-flex justify-content-center pt-5 mt-3 px-4">
              <button
                class="button-52 animate__animated animate__rollIn"
                role="button"
                @click="scrollToStore"
              >
                Shop <span>Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
/* eslint-disable */
export default {
  name: 'SiteBanner',
  data () {
    return {}
  },

  methods: {

    scrollToStore () {
      this.$emit('scrollToStore')
    }
  }
}
</script>
