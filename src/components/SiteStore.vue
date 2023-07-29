<script setup>
/* eslint-disable */
</script>

<template>

  <section id="store">
    <!-- store section title -->
    <div class="container-fluid">
      <div class="row">
        <div
          class="
            col-12
            store-title
            d-flex
            justify-content-center
            align-items-center
            py-5
          "
        >
          <p><span>Featured Products</span></p>
        </div>
      </div>
    </div>
    <!-- end of store section title -->

    <!-- store body -->
    <div class="container-fluid home-store" id="">
      <div class="row">
        <!-- rates and categories -->
        <div class="col-lg-3 col-12 px-0">
          <!-- large screens and above -->
          <div class="home-store-query-list py-5 px-4 d-lg-block d-none">
            <div class="row pb-xl-0 pb-5">
              <!-- rates form -->
              <div class="col-12">
                <legend class="mb-3">Rates</legend>
                <form action="">
                  <ul class="p-0">
                    <li class="mb-1 d-flex align-items-center">
                      <input
                        type="checkbox"
                        name="best-selling"
                        class="store-check"
                      />
                      <label for="best-selling" class="ms-2"
                        >Best selling</label
                      >
                    </li>
                    <li class="mb-1 d-flex align-items-center">
                      <input
                        type="checkbox"
                        name="Popular"
                        class="store-check"
                      />
                      <label for="best-selling" class="ms-2">Popular</label>
                    </li>
                    <li class="mb-1 d-flex align-items-center">
                      <input
                        type="checkbox"
                        name="Seasonal"
                        class="store-check"
                      />
                      <label for="best-selling" class="ms-2">Seasonal</label>
                    </li>
                    <li class="mb-1 d-flex align-items-center">
                      <input type="checkbox" name="Hard" class="store-check" />
                      <label for="best-selling" class="ms-2"
                        >Hard to find</label
                      >
                    </li>
                    <li class="mb-1 d-flex align-items-center">
                      <input
                        type="checkbox"
                        name="Low-inventory"
                        class="store-check"
                      />
                      <label for="best-selling" class="ms-2"
                        >Low inventory</label
                      >
                    </li>
                    <li class="mb-1 d-flex align-items-center">
                      <input type="checkbox" name="Hot" class="store-check" />
                      <label for="best-selling" class="ms-2"
                        >Hot this week</label
                      >
                    </li>
                    <li class="d-flex align-items-center">
                      <input type="checkbox" name="New" class="store-check" />
                      <label for="best-selling" class="ms-2"
                        >New arrivals</label
                      >
                    </li>
                  </ul>
                </form>
              </div>
              <!-- end of rates form -->

              <hr class="d-lg-flex d-none" />
              <!-- categories -->
              <div class="col-12 pb-5">
                <legend class="mb-3">Categories</legend>
                <ul class="p-0">
                  <li class="mb-3">
                    <button
                      class="
                        py-1
                        px-xl-4 px-lg-3 px-1
                        category-button
                        home-store-query-list-button-active
                      "
                      @click="addStyleOnCategoryListBtns('Category1')"
                      id="Category1"
                    >
                      All
                    </button>
                  </li>
                  <li class="mb-3">
                    <button
                      class="py-1 px-xl-4 px-lg-3 px-1 category-button"
                      @click="addStyleOnCategoryListBtns('Category2')"
                      id="Category2"
                    >
                      Organic products
                    </button>
                  </li>
                  <li class="mb-3">
                    <button
                      class="py-1 px-xl-4 px-lg-3 px-1 category-button"
                      @click="addStyleOnCategoryListBtns('Category3')"
                      id="Category3"
                    >
                      Pottery products
                    </button>
                  </li>
                  <li class="mb-3">
                    <button
                      class="py-1 px-xl-4 px-lg-3 px-1 category-button"
                      @click="addStyleOnCategoryListBtns('Category4')"
                      id="Category4"
                    >
                      Gifts & Souvenir
                    </button>
                  </li>
                  <li>
                    <button
                      class="py-1 px-xl-4 px-lg-3 px-1 category-button"
                      @click="addStyleOnCategoryListBtns('Category5')"
                      id="Category5"
                    >
                      Traditional attires
                    </button>
                  </li>
                </ul>
              </div>
              <!-- end of categories  -->
            </div>
          </div>
          <!-- end of large screens  -->

          <!-- mobile screens categories list -->
          <div
            class="
              home-store-query-list-mobile
              animate__animated animate__flipOutX
              d-lg-none
            "
          >
            <form action="">
              <select name="" id="" class="py-2">
                <option value="">All Rates</option>
                <option value="">Best selling</option>
                <option value="">Popular</option>
                <option value="">Seasonal</option>
                <option value="">Hard to find</option>
                <option value="">Low inventory</option>
                <option value="">Hot this week</option>
                <option value="">New arrivals</option>
              </select>

              <select name="" id="" class="py-2">
                <option value="">All Categories</option>
                <option value="">Organic products</option>
                <option value="">Pottery products</option>
                <option value="">Gifts & Souvenir</option>
                <option value="">Traditional attires</option>
              </select>
            </form>
          </div>
          <!-- end of mobile screens categories list -->
        </div>
        <!-- end of rates and categories -->

        <!-- products items -->
        <div class="col-lg-9 col-12 px-lg-5 px-md-4 px-3" id="productsField">
          <div class="row products-field justify-content-start">
            <div
              v-for="(item, index) in items"
              v-bind:key="index"
              class="col-lg-3 col-md-4 col-6 p-2"
            >
              <div class="store-prod d-block p-0">
                <div class="click d-lg-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M18.536 7.555c-1.188-.252-4.606-.904-5.536-1.088v-3.512c0-1.629-1.346-2.955-3-2.955s-3 1.326-3 2.955v7.457c-.554-.336-1.188-.621-1.838-.715-1.822-.262-3.162.94-3.162 2.498 0 .805.363 1.613 1.022 2.271 3.972 3.972 5.688 5.125 6.059 9.534h9.919v-1.748c0-5.154 3-6.031 3-10.029 0-2.448-1.061-4.157-3.464-4.668zm.357 8.022c-.821 1.483-1.838 3.319-1.891 6.423h-6.13c-.726-3.82-3.81-6.318-6.436-8.949-.688-.686-.393-1.37.442-1.373 1.263-.006 3.06 1.884 4.122 3.205v-11.928c0-.517.458-.955 1-.955s1 .438 1 .955v6.948c0 .315.256.571.572.571.314 0 .57-.256.57-.571v-.575c0-.534.49-.938 1.014-.833.398.079.686.428.686.833v1.273c0 .315.256.571.571.571s.571-.256.571-.571v-.83c0-.531.487-.932 1.008-.828.396.078.682.424.682.828v1.533c0 .315.256.571.571.571s.571-.256.571-.571v-.912c0-.523.545-.867 1.018-.646.645.305 1.166.932 1.166 2.477 0 1.355-.465 2.193-1.107 3.354z"
                    />
                  </svg>
                </div>
                <div
                  class="
                    img-container
                    d-flex
                    justify-content-center
                    align-items-center
                  "
                >
                  <div class="prod-tools">
                    <button @click="addItemToCart(index)">
                      <i
                        class="fa-solid fa-cart-plus"
                        v-bind:id="'addToCartIcon' + item.localId"
                      ></i>
                      <i
                        class="fa-solid fa-check m-0"
                        v-bind:id="'addedToCartIcon' + item.localId"
                      ></i>
                    </button>
                    <button class="mx-1" @click="addItemToWhishlist(index)">
                      <i class="fa-solid fa-heart-circle-plus" v-bind:id="'addToWishlistIcon' + item.localId"></i>
                      <i class="fa-solid fa-heart-circle-check loved" v-bind:id="'addedToWishlistIcon' + item.localId"></i>
                    </button>
                    <button>
                        <i class="fa-solid fa-eye"></i>
                      <span class="d-none"></span>
                    </button>
                  </div>
                  <img
                    :src="require(`../assets/imgs/prods/${item.name}.jpg`)"
                    v-bind:alt="item.name"
                    class="img-fluid mx-auto"
                  />
                  <span>{{ item.price.toFixed(2) }} JD</span>
                </div>
                <div class="description p-3">
                  <p class="">
                    <a href="" id="prodName">{{ item.name }}</a>
                    <span class="unit ms-2"
                      >{{ item.unitQuantity }}{{ item.unit }}</span
                    >
                  </p>
                  <h4 class="blockquote-footer">
                    {{ item.sDesc }}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end of products items -->
      </div>
    </div>
    <!-- end of store body -->
  </section>
  <router-view/>
</template>

<script>
/* eslint-disable */
export default {
  name: "SiteStore",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },

  mounted() {},

  methods: {
    addStyleOnCategoryListBtns(id) {
      var btns = document.getElementsByClassName("category-button");
      var btnsArr = [].slice.call(btns);

      btnsArr.forEach((element) => {
        element.classList.remove("home-store-query-list-button-active");
      });

      document
        .getElementById(id)
        .classList.add("home-store-query-list-button-active");
    },

    addItemToCart(index) {
      this.$emit("addItemToCart", index);
    },

    addItemToWhishlist(index){
      this.$emit("addItemToWhishlist", index);
    }
  },
};
</script>
