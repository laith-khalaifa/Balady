<template>
  <div>
    <contact-Bar />
    <!-- start of navbar -->
    <div class="container-fluid">
      <div class="row p-0">
        <!-- large screens navbar -->
        <div class="col-12 nav-bar px-5 py-3 d-md-block d-none" id="navbar">
          <div class="row">
            <div class="col-xl-7 col-12 d-flex justify-content-between pe-xl-5">
              <!-- logo -->
              <div class="d-flex align-items-center me-4">
                <a href=""
                  ><img src="../../assets/logo/logo.png" id="logo"
                /></a>
              </div>
              <!-- end of logo -->

              <!-- tools -->
              <div class="d-flex me-xl-5">
                <!-- search form  -->
                <div class="search d-md-flex d-none">
                  <form action="" class="d-flex me-2">
                    <input
                      type="search"
                      class="me-2 search-field"
                      placeholder="Search..."
                    />
                    <button type="" class="d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-search"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                        />
                      </svg>
                    </button>
                  </form>
                </div>
                <!-- end of search form -->

                <!-- wishlist -->
                <div class="h-favourite ps-1 mx-2 d-flex align-items-center">
                  <button class="d-flex align-items-center py-2">
                    <span
                      class="quantity"
                      v-if="this.favouriteItems.length > 0"
                      >{{ this.favouriteItems.length }}</span
                    >
                    <i
                      class="fa-solid fa-heart animate__animated"
                      id="hWhislistIcon"
                    ></i>
                  </button>
                  <ul class="py-2 px-3">
                    <p class="text-center" v-if="favouriteItems.length == 0">
                      Your wishlist is empty 😕
                    </p>
                    <table>
                      <tbody
                        v-for="(favouriteItem, index) in favouriteItems"
                        v-bind:key="index"
                      >
                        <tr>
                          <td class="d-flex align-items-center">
                            <a href="">{{ favouriteItem.name }}</a>
                          </td>
                          <td class="ps-4 align-items-center">
                            <button
                              id="appendFavouriteItemToCart"
                              @click="transferItemToCart(index)"
                              title="Add to Cart"
                              class="p-0 mx-2"
                            >
                              <i class="fa-solid fa-cart-plus"></i>
                            </button>
                            <button
                              class="p-0"
                              id="removeFromFavourite"
                              @click="removeItemFromFavourite(index)"
                              title="Remove from Wishlist"
                            >
                              <i class="fa-solid fa-trash-can"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td class="d-flex align-items-start">
                            <span class="h6">{{ favouriteItem.price }}JD</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </ul>
                </div>
                <!-- end of wishlist -->

                <!-- header cart -->
                <div class="h-cart d-flex align-items-center">
                  <button class="d-flex align-items-center py-2" id="cart">
                    <span
                      class="quantity"
                      v-if="this.cartItems.length > 0"
                      id="cartQuantitySpan"
                      >{{ this.cartItems.length }}</span
                    >
                    <i
                      class="fa-solid fa-bag-shopping me-2 animate__animated"
                      id="hCartIcon"
                    ></i>
                    <span>{{ cartItemsSubtotal }}JD</span>
                  </button>
                  <ul class="py-2 px-2 h-cart-items">
                    <p class="text-center" v-if="cartItems.length == 0">
                      Your cart is empty 😕
                    </p>
                    <li
                      class="d-flex justify-content-between mb-1"
                      v-for="(cartItem, index) in cartItems"
                      v-bind:key="index"
                    >
                      <div class="d-flex justify-content-start">
                        <button
                          class="d-flex align-items-start"
                          @click="removeItemFromCart(index)"
                        >
                          <i class="fa-solid fa-xmark"></i>
                        </button>
                        <div class="d-block h-cart-item-desc">
                          <a href="">{{ cartItem.name }}</a>
                          <p class="m-0">
                            <input
                              type="number"
                              :value="cartItem.quantity"
                              min="1"
                              @input="
                                updateHeaderCartItemQuantity(
                                  index,
                                  $event.target.value
                                )
                              "
                            />
                            x {{ cartItem.price }}JD
                          </p>
                        </div>
                      </div>
                      <img src="../../assets/imgs/prods/Ghee.jpg" alt="" />
                    </li>
                    <div>
                      <hr class="my-1 mx-0 mt-1" />
                      <p class="h-cart-subtotal text-end px-1 py-1">
                        Subtotal: <span>{{ cartItemsSubtotal }} JD</span>
                      </p>
                      <hr class="my-1 mx-0" />
                      <div
                        class="h-cart-btns d-flex justify-content-center mt-3"
                        v-if="cartItems.length > 0"
                      >
                        <button>View Cart</button>
                        <button>Checkout</button>
                      </div>
                    </div>
                  </ul>
                </div>
                <!-- end of header cart -->
              </div>
            </div>
            <!-- end of tools -->

            <!-- Pages navs section  -->
            <div
              class="
                col-xl-5 col-12
                heads
                justify-content-xl-end justify-content-center
                mt-xl-0 mt-4
                d-md-flex d-none
              "
            >
              <ul class="">
                <li>
                  <button
                    class="me-2 active"
                    id="navsHomeBtn"
                    @click="scrollToTop"
                  >
                    HOME
                  </button>
                </li>
                <li>
                  <button class="mx-2" id="navsStoreBtn" @click="scrollToStore">
                    STORE
                  </button>
                </li>
                <li>
                  <button class="mx-2" id="navsBlogBtn">BLOG</button>
                </li>
                <li>
                  <button class="ms-2" id="navsPagesBtn">PAGES</button>
                </li>
              </ul>
            </div>
            <!-- end of pages navs heads -->
          </div>
        </div>
        <!-- end of large screens navbar -->

        <!-- small screens navbar -->
        <div class="nav-bar d-md-none p-0" id="navbarSmall">
          <div class="px-3 py-3">
            <div class="d-flex justify-content-between">
              <!-- logo -->
              <div class="d-flex align-items-center">
                <a href=""
                  ><img src="../../assets/logo/logo.png" alt="" id="logo"
                /></a>
              </div>

              <!-- TOOLS -->
              <div class="d-flex justify-content-end">
                <!-- wishlist -->
                <div class="h-favourite d-flex align-items-center">
                  <button class="d-flex align-items-center py-2">
                    <span
                      class="quantity"
                      v-if="this.favouriteItems.length > 0"
                      >{{ this.favouriteItems.length }}</span
                    >
                    <i
                      class="fa-solid fa-heart-circle-check"
                      id="primeWhishlist"
                    ></i>
                  </button>
                  <ul class="py-2 px-3">
                    <p class="text-center" v-if="favouriteItems.length == 0">
                      Your wishlist is empty 😕
                    </p>
                    <table>
                      <tbody
                        v-for="(favouriteItem, index) in favouriteItems"
                        v-bind:key="index"
                      >
                        <tr>
                          <td class="d-flex align-items-center">
                            <a href="">{{ favouriteItem.name }}</a>
                          </td>
                          <td class="ps-4 align-items-center">
                            <button
                              id="appendFavouriteItemToCart"
                              @click="transferItemToCart(index)"
                              title="Add to Cart"
                              class="p-0 mx-3"
                            >
                              <i class="fa-solid fa-cart-plus"></i>
                            </button>
                            <button
                              class="p-0"
                              id="removeFromFavourite"
                              @click="removeItemFromFavourite(index)"
                              title="Remove from Wishlist"
                            >
                              <i class="fa-solid fa-trash-can"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td class="d-flex align-items-start">
                            <span class="h6">{{ favouriteItem.price }}JD</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </ul>
                </div>
                <!-- end of wishlist -->

                <!-- header cart -->
                <div class="h-cart d-flex align-items-center">
                  <button class="d-flex align-items-center" id="cart">
                    <span
                      class="quantity-small"
                      v-if="this.cartItems.length > 0"
                      id="cartQuantitySpan"
                      >{{ this.cartItems.length }}</span
                    >
                    <i
                      class="fa-solid fa-bag-shopping me-1 animate__animated"
                      id="primeCart"
                    ></i>
                  </button>
                  <ul class="py-2 px-1 h-cart-items">
                    <p class="text-center" v-if="cartItems.length == 0">
                      Your cart is empty 😕
                    </p>
                    <li
                      class="d-flex justify-content-between mb-1"
                      v-for="(cartItem, index) in cartItems"
                      v-bind:key="index"
                    >
                      <div class="d-flex justify-content-start">
                        <button
                          class="d-flex align-items-start"
                          @click="removeItemFromCart(index)"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-x"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                            />
                          </svg>
                        </button>
                        <div class="d-block h-cart-item-desc">
                          <a href="">{{ cartItem.name }}</a>
                          <p class="m-0">
                            <input
                              type="number"
                              :value="cartItem.quantity"
                              min="1"
                              @input="
                                updateHeaderCartItemQuantity(
                                  index,
                                  $event.target.value
                                )
                              "
                            />
                            x {{ cartItem.price }}JD
                          </p>
                        </div>
                      </div>
                      <img src="../../assets/imgs/prods/Ghee.jpg" alt="" />
                    </li>
                    <div>
                      <hr class="my-1 mx-0 mt-1" />
                      <p class="h-cart-subtotal text-end px-1 py-1">
                        Subtotal: <span>{{ cartItemsSubtotal }} JD</span>
                      </p>
                      <hr class="my-1 mx-0" />
                      <div
                        class="h-cart-btns d-flex justify-content-center mt-3"
                        v-if="cartItems.length > 0"
                      >
                        <button>View Cart</button>
                        <button>Checkout</button>
                      </div>
                    </div>
                  </ul>
                </div>
                <!-- end of header cart -->

                <!-- hamburger menu button -->
                <button
                  class="py-2 pe-0"
                  data-bs-toggle="collapse"
                  data-bs-target="#headerMenu"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  @click="animateMenuBtn"
                  id="hamburg"
                >
                  <i class="fa-solid fa-bars-staggered" id="hamburgSVG"></i>
                </button>
              </div>
            </div>
          </div>

          <div class="collapse nav-bar-radius" id="headerMenu">
            <div class="card card-body border-0 p-0">
              <ul class="p-0">
                <li class="d-flex">
                  <button
                    class="d-flex align-items-center justify-content-center"
                    data-bs-toggle="collapse"
                    data-bs-target="#headerMenu"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                    @click="
                      animateMenuBtn();
                      scrollToTop();
                    "
                  >
                    <i class="fa-solid fa-house me-2"></i>
                    HOME
                  </button>
                  <button
                    class="d-flex align-items-center justify-content-center"
                    data-bs-toggle="collapse"
                    data-bs-target="#headerMenu"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                    @click="
                      animateMenuBtn();
                      scrollToStore();
                    "
                  >
                    <i class="fa-solid fa-shop me-2"></i>
                    STORE
                  </button>
                </li>
                <li class="d-flex">
                  <button
                    class="d-flex align-items-center justify-content-center"
                  >
                    <i class="fa-solid fa-newspaper me-2"></i>
                    BLOG
                  </button>
                  <button
                    class="d-flex align-items-center justify-content-center"
                  >
                    Who are we
                    <i class="fa-solid fa-question ms-2"></i>
                  </button>
                </li>
              </ul>
              <button
                id="closeExpandedMenu"
                data-bs-toggle="collapse"
                data-bs-target="#headerMenu"
                aria-expanded="false"
                aria-controls="headerMenu"
                @click="animateMenuBtn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-grip-horizontal"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M2 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1    1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1    0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <!-- end of small navbar -->
      </div>
    </div>
    <!-- end of navbar -->
  </div>
</template>

<script>
/* eslint-disable */
import ContactBar from "./ContactBar.vue";
export default {
  name: "SiteHeader",
  components: {
    ContactBar,
  },

  props: {
    cartItems: {
      type: Array,
      required: true,
    },

    favouriteItems: {
      type: Array,
      required: true,
    },

    cartItemsSubtotal: {
      type: Number,
      required: true,
    },

    isExpandedHeader: {
      type: Boolean,
      required: true,
    },
  },

  data() {
    return {};
  },

  methods: {
    removeItemFromCart(index) {
      this.$emit("removeItemFromCart", index);
    },

    removeItemFromFavourite(index) {
      this.$emit("removeItemFromFavourite", index);
    },

    transferItemToCart(index) {
      this.$emit("transferItemToCart", index);
    },

    animateMenuBtn() {
      if (this.isExpandedHeader) {
        document
          .getElementById("hamburgSVG")
          .classList.remove("rotateHamburgButtonStart");
        document
          .getElementById("hamburgSVG")
          .classList.add("rotateHamburgButtonEnd");
      } else {
        document
          .getElementById("hamburgSVG")
          .classList.add("rotateHamburgButtonStart");
        document
          .getElementById("hamburgSVG")
          .classList.remove("rotateHamburgButtonEnd");
      }
      this.$emit("indicateExpandedHeader", !this.isExpandedHeader);
    },

    scrollToTop() {
      this.$emit("scrollToTop");
    },

    scrollToStore() {
      this.$emit("scrollToStore");
    },

    updateHeaderCartItemQuantity(index, updatedQuantity) {
      this.$emit("updateHeaderCartItemQuantity", index, updatedQuantity);
    },
  },

  computed: {},
};
</script>
