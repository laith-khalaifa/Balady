<template>
  <div>
    <div class="prevent-view text-center">
      <img src="../assets/logo/msg.png" alt="" class="m-5" />
      <p>
        Sorry, We do not support landscape view! <br />Please rotate
        <i class="fa-solid fa-rotate"></i> your screen
      </p>
    </div>

    <div class="home">
      <SiteHeader
        :cartItems="this.headerCartItems"
        :cartItemsSubtotal="this.headerCartItemsSubtotal"
        :favouriteItems="this.headerFavouriteItems"
        :isExpandedHeader="this.isExpandedHeader"
        @removeItemFromCart="removeItemFromCart"
        @removeItemFromFavourite="removeItemFromFavourite"
        @transferItemToCart="transferItemToCart"
        @updateHeaderCartItemQuantity="updateHeaderCartItemQuantity"
        @scrollToStore="scrollToStore"
        @scrollToTop="scrollToTop"
        @indicateExpandedHeader="indicateExpandedHeader"
      />
      <siteBanner @scrollToStore="scrollToStore" />
      <SiteStore
        :items="this.items"
        @addItemToCart="addItemToCart"
        @addItemToWhishlist="addItemToWhishlist"
      />

    </div>
  </div>
</template>

<script>
/* eslint-disable */
// @ is an alias to /src
import SiteHeader from "@/components/layout/SiteHeader.vue";
import SiteBanner from "@/components/SiteBanner.vue";
import SiteStore from "@/components/SiteStore.vue";

export default {
  name: "HomeView",
  components: {
    SiteHeader,
    SiteBanner,
    SiteStore
  },

  data() {
    return {
      items: [
        {
          name: "Dried Jameed",
          price: 15,
          category: "Organic",
          sDesc: " Beduin-Jordanian food",
          unit: "kg",
          unitQuantity: 1 / 4,
          localId: 45,
        },
        {
          name: "Olive Oil",
          price: 30,
          category: "Organic",
          sDesc:
            "Oil extracted from the fleshy part of the ripened fruit of the olive tree",
          unit: "L",
          unitQuantity: 1,
          localId: 345,
        },
        {
          name: "Wild Thyme",
          price: 20,
          category: "Organic",
          sDesc:
            "Creeping dwarf evergreen shrub with woody stems and a taproot",
          unit: "g",
          unitQuantity: 100,
          localId: 1245,
        },
        {
          name: "Honey",
          price: 65,
          category: "Organic",
          sDesc: "Produced by bees collecting nectar and honeydew",
          unit: "kg",
          unitQuantity: 1,
          localId: 313,
        },
        {
          name: "Butter",
          price: 12,
          category: "Organic",
          sDesc: "Milk and cream contain butterfat in microscopic globules",
          unit: "kg",
          unitQuantity: 1,
          localId: 123124,
        },
        {
          name: "Ghee",
          price: 27,
          category: "Organic",
          sDesc: "Typically prepared by simmering butter",
          unit: "kg",
          unitQuantity: 1,
          localId: 12415,
        },
        {
          name: "Taboon Bread",
          price: 2,
          category: "Organic",
          sDesc: "Local bread type",
          unit: "Piece",
          unitQuantity: 1,
          localId: 1108,
        },
        {
          name: "Sheep Milk",
          price: 4,
          category: "Organic",
          sDesc: "Of domestic sheep",
          unit: "L",
          unitQuantity: 1,
          localId: 1426,
        },
      ],
      headerCartItems: [],
      headerFavouriteItems: [],
      headerCartItemsSubtotal: null,
      isExpandedHeader: false,
    };
  },

  methods: {
    addItemToCart(index) {
      const is_ItemInArray = this.headerCartItems.some(
        (el) => el.localId === this.items[index].localId
      );

      if (!is_ItemInArray) {
        this.headerCartItems.push({
          name: this.items[index].name,
          price: this.items[index].price,
          quantity: 1,
          localId: this.items[index].localId,
        });
        this.addingItemsToCartAnimation(this.items[index].localId);
        this.updateCartItemSubtotal();
      }
    },

    addingItemsToCartAnimation(localId) {
      if (this.is_mobile()) {
        document
          .getElementById("primeCart")
          .classList.remove("animate__heartBeat");
        document
          .getElementById("primeCart")
          .classList.add("animate__heartBeat");
      } else {
        document
          .getElementById("hCartIcon")
          .classList.remove("animate__heartBeat");
        document
          .getElementById("hCartIcon")
          .classList.add("animate__heartBeat");
      }

      var elAddToCartID = ("addToCartIcon" + localId).toString();
      var elAddedToCartID = "addedToCartIcon" + localId.toString();
      document.getElementById(elAddToCartID).style.display = "none";
      document.getElementById(elAddedToCartID).style.display = "unset";
    },

    removingItemsFromCartAnimation(localId) {
      var elAddToCartID = ("addToCartIcon" + localId).toString();
      var elAddedToCartID = "addedToCartIcon" + localId.toString();
      document.getElementById(elAddToCartID).style.display = "unset";
      document.getElementById(elAddedToCartID).style.display = "none";
    },

    removeItemFromCart(index) {
      this.removingItemsFromCartAnimation(
        this.headerCartItems[index].localId
      );
      this.headerCartItems.splice(index, 1);
      this.updateCartItemSubtotal();
    },

    updateCartItemSubtotal() {
      if (this.headerCartItems.length > 0) {
        this.headerCartItemsSubtotal = 0;
        this.headerCartItems.forEach((element) => {
          this.headerCartItemsSubtotal += element.price * element.quantity;
        });
        this.headerCartItemsSubtotal = this.headerCartItemsSubtotal.toFixed(2);
      } else {
        this.headerCartItemsSubtotal = (0).toFixed(2);
      }
    },

    addItemToWhishlist(index) {
      const is_ItemInArray = this.headerFavouriteItems.some(
        (el) => el.localId === this.items[index].localId
      );

      if (!is_ItemInArray) {
        this.headerFavouriteItems.push({
          name: this.items[index].name,
          price: this.items[index].price,
          localId: this.items[index].localId,
        });

        this.addingItemsToWhishlistAnimation(this.items[index].localId);
      }
    },

    addingItemsToWhishlistAnimation(localId) {
      if (this.is_mobile()) {
        document
          .getElementById("primeWhishlist")
          .classList.remove("animate__heartBeat");
        document
          .getElementById("primeWhishlist")
          .classList.add("animate__heartBeat");
      } else {
        document
          .getElementById("hWhislistIcon")
          .classList.remove("animate__heartBeat");
        document
          .getElementById("hWhislistIcon")
          .classList.add("animate__heartBeat");
      }

      var elAddToWhishlisttID = ("addToWishlistIcon" + localId).toString();
      var elAddedToWhishlistID = "addedToWishlistIcon" + localId.toString();
      document.getElementById(elAddToWhishlisttID).style.display = "none";
      document.getElementById(elAddedToWhishlistID).style.display = "unset";
    },

    removeItemFromFavourite(index) {
      this.removingItemsFromWishlistAnimation(
        this.headerFavouriteItems[index].localId
      );
      this.headerFavouriteItems.splice(index, 1);
    },

    removingItemsFromWishlistAnimation(localId) {
      var elAddToWhishlisttID = ("addToWishlistIcon" + localId).toString();
      var elAddedToWhishlistID = "addedToWishlistIcon" + localId.toString();
      document.getElementById(elAddToWhishlisttID).style.display = "unset";
      document.getElementById(elAddedToWhishlistID).style.display = "none";
    },

    transferItemToCart(index) {
      console.log(this.headerFavouriteItems[index].localId);
      const instanceIndex = this.items.findIndex( obj =>{
        return obj.localId === this.headerFavouriteItems[index].localId;
      });
      this.addItemToCart(instanceIndex);
      this.removeItemFromFavourite(index);
      // this.headerFavouriteItems.splice(index, 1);
    },

    updateHeaderCartItemQuantity(index,updatedQuantity){
      this.headerCartItems[index].quantity = updatedQuantity;
      this.updateCartItemSubtotal();
    },

    headerPositionOnScroll() {
      let contactBarHgt = document.getElementById("contactBar").clientHeight;
      let dsTop = document.documentElement.scrollTop;
      let newHeaderPos = null;

      if (dsTop <= contactBarHgt) {
        newHeaderPos = contactBarHgt - dsTop;
      } else {
        newHeaderPos = 0;
      }
      document.getElementById("navbar").style.top = newHeaderPos + "px";
      document.getElementById("navbarSmall").style.top = newHeaderPos + "px";
    },

    is_mobile() {
      const is_mobile =
        !!navigator.userAgent.match(/iphone|android|blackberry/gi) || false;
      return is_mobile;
    },

    is_Ipad() {
      const isiPad = navigator.userAgent.match(/iPad/i) != null;
      return isiPad;
    },

    is_Rotate() {
      var orientation =
        (screen.orientation || {}).type ||
        screen.mozOrientation ||
        screen.msOrientation;

      if (
        orientation === "landscape-primary" ||
        orientation === "landscape-secondary" ||
        window.matchMedia("(orientation: portrait)").matches
      ) {
        return true;
      } else {
        return false;
      }
    },

    is_RotateOnPageLaod() {
      if (window.orientation == 90 || window.orientation == -90) {
        return true;
      } else {
        return false;
      }
    },

    // preventLandscapeView() {
    //   if (this.is_Rotate()) {
    //     document.querySelector(".prevent-view").style.display = "block";
    //     document.querySelector(".home").style.display = "none";
    //   } else {
    //     document.querySelector(".prevent-view").style.display = "none";
    //     document.querySelector(".home").style.display = "unset";
    //   }
    // },

    // preventLandscapeViewOnPageLoad() {
    //   if (this.is_RotateOnPageLaod()) {
    //     document.querySelector(".prevent-view").style.display = "block";
    //     document.querySelector(".home").style.display = "none";
    //   } else {
    //     document.querySelector(".prevent-view").style.display = "none";
    //     document.querySelector(".home").style.display = "unset";
    //   }
    // },

    homeStoreQueryList() {
      const pageWidth = document.body.offsetWidth;
      let navBar;
      let categoryList;
      const storeSection = document.querySelector(".home-store");
      const productsField = document.getElementById("productsField");
      const productsFieldldWidth = productsField.offsetWidth;
      const storeSectionY = storeSection.getBoundingClientRect().y;
      const storeSectionBottom = storeSection.getBoundingClientRect().bottom;
      const pageHeight = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
      );
      const navsHomeBtn = document.getElementById("navsHomeBtn");
      const navsStoreBtn = document.getElementById("navsStoreBtn");

      if (this.is_mobile()) {
        navBar = document.getElementById("navbarSmall");
        let headerMenuHgt = document.getElementById("headerMenu").clientHeight;
        let navBarHgt = navBar.clientHeight - headerMenuHgt;
        categoryList = document.querySelector(".home-store-query-list-mobile");

        if (
          this.isStoreInViewPort(
            storeSectionY,
            navBarHgt,
            storeSectionBottom,
            pageHeight
          )
        ) {
          categoryList.style.position = "fixed";
          categoryList.style.top = navBarHgt + "px";
          productsField.style.paddingTop = "100px";
          navBar.style.boxShadow = "unset";
          categoryList.classList.remove("animate__flipOutX");
          categoryList.classList.add("animate__flipInX");
        } else {
          categoryList.style.position = "unset";
          categoryList.style.top = "unset";
          navBar.style.boxShadow = "0 1px 4px grey";
          productsField.style.paddingTop = "0px";
          categoryList.classList.add("animate__flipOutX");
          categoryList.classList.remove("animate__flipInX");
        }
      } else if (this.is_Ipad()) {
        navBar = document.getElementById("navbar");
        let navBarHgt = navBar.clientHeight;
        categoryList = document.querySelector(".home-store-query-list-mobile");
        if (
          this.isStoreInViewPort(
            storeSectionY,
            navBarHgt,
            storeSectionBottom,
            pageHeight
          )
        ) {
          categoryList.style.position = "fixed";
          categoryList.style.top = navBarHgt + "px";
          productsField.style.paddingTop = "100px";
          navBar.style.boxShadow = "unset";
          categoryList.classList.remove("animate__flipOutX");
          categoryList.classList.add("animate__flipInX");
        } else {
          categoryList.style.position = "unset";
          categoryList.style.top = "unset";
          navBar.style.boxShadow = "0 1px 4px grey";
          productsField.style.paddingTop = "0px";
          categoryList.classList.add("animate__flipOutX");
          categoryList.classList.remove("animate__flipInX");
        }
      } else {
        navBar = document.getElementById("navbar");
        categoryList = document.querySelector(".home-store-query-list");
        let navBarHgt = navBar.clientHeight;
        if (
          this.isStoreInViewPort(
            storeSectionY,
            navBarHgt,
            storeSectionBottom,
            pageHeight
          )
        ) {
          categoryList.style.position = "fixed";
          categoryList.style.left = 0 + "px";
          categoryList.style.top = navBarHgt + "px";
          categoryList.style.width = pageWidth - productsFieldldWidth + "px";
          categoryList.style.height = "100%";
          categoryList.style.overflow = "scroll";
          navsHomeBtn.classList.remove("active");
          navsStoreBtn.classList.add("active");
          productsField.style.paddingTop = "50px";
        } else {
          categoryList.style.position = "unset";
          categoryList.style.left = "unset";
          categoryList.style.top = "unset";
          categoryList.style.width = "100%";
          categoryList.style.height = "100%";
          categoryList.style.overflow = "unset";
          navsHomeBtn.classList.add("active");
          navsStoreBtn.classList.remove("active");
          navBar.style.boxShadow = "0 1px 4px grey";
          productsField.style.paddingTop = "0px";
        }
      }
    },

    Sleep(ms) {
      const start = Date.now();
      while (Date.now() - start < ms);
    },

    isStoreInViewPort(
      storeSectionY,
      navBarHgt,
      storeSectionBottom,
      pageHeight
    ) {
      return (
        parseInt(storeSectionY, 10) - navBarHgt <= 0 &&
        storeSectionBottom >= pageHeight - 100
      );
    },

    isBlogInViewPort(pageHeight) {
      return (
        parseInt(storeSectionY, 10) - navBarHgt <= 0 &&
        storeSectionBottom >= pageHeight - 100
      );
    },

    getOffset(el) {
      let rect = el.getBoundingClientRect();
      return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY,
      };
    },

    scrollToStore() {
      let pageWidth = document.body.offsetWidth;
      let headerMenuHgt = document.getElementById("headerMenu").clientHeight;
      let navBarHgt = null;
      if (!this.is_mobile()) {
        navBarHgt = document.getElementById("navbar").clientHeight;
      } else {
        navBarHgt =
          document.getElementById("navbarSmall").clientHeight - headerMenuHgt;
      }
      let homeStore = document.querySelector(".home-store");
      let homeStoreY = this.getOffset(homeStore).top;

      window.scrollTo(0, homeStoreY - navBarHgt, "smooth");
    },

    scrollToTop() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      let productsField = document.getElementById("productsField");
      productsField.style.paddingTop = 1.5 + "rem";
    },

    indicateExpandedHeader(bool) {
      this.isExpandedHeader = bool;
    },
  },

  mounted() {
    if (this.headerCartItems.length > 0) {
      this.headerCartItems.forEach((element) => {
        this.headerCartItemsSubtotal += element.price * element.quantity;
      });
      this.headerCartItemsSubtotal = this.headerCartItemsSubtotal.toFixed(2);
    } else {
      this.headerCartItemsSubtotal = (0).toFixed(2);
    }

    window.addEventListener("scroll", this.headerPositionOnScroll);
    window.addEventListener("scroll", this.homeStoreQueryList);
    window.addEventListener("resize", this.headerPositionOnScroll);
    window.addEventListener("resize", this.homeStoreQueryList);
    window.addEventListener("orientationchange", this.preventLandscapeView);
    window.addEventListener("load", this.preventLandscapeViewOnPageLoad);
  },

  computed: {
    get(){
      return
    },
  },
};
</script>
