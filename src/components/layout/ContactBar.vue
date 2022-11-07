<template>
 <!-- start of contact bar -->
    <div class="container-fluid d-md-flex d-none">
      <div class="row">
        <div
          class="
            col-12
            d-xl-flex d-block
            justify-content-between
            py-2
            contact-header
            px-lg-5
          "
          id="contactBar"
        >
          <!-- icons -->
          <div
            class="
              icons
              col-xl-3 col-12
              d-flex
              justify-content-xl-start justify-content-center
              my-xl-0 my-3
            "
          >
            <ul>
              <li class="d-flex align-items-center">
                <a href="https://facebook.com" target="blank">
                  <i class="fa-brands fa-facebook me-3"></i>
                </a>
              </li>
              <li class="d-flex align-items-center">
                <a href="https://instagram.com" target="blank">
                  <i class="fa-brands fa-instagram me-3"></i>
                </a>
              </li>
              <li class="d-flex align-items-center">
                <a href="https://whatsapp.com" target="blank">
                  <i class="fa-brands fa-whatsapp me-3"></i>
                </a>
              </li>
              <li class="d-flex align-items-center">
                <a href="https://messenger.com" target="blank">
                  <i class="fa-brands fa-facebook-messenger me-3"></i>
                </a>
              </li>
              <li class="d-flex align-items-center">
                <a href="https://messenger.com" target="blank">
                  <i class="fa-solid fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
          <!-- end of icons -->

          <!-- addresses -->
          <div
            class="
              address
              col-xl-9 col-12
              d-flex
              justify-content-xl-end justify-content-center
              py-1
              display-lg-3
            "
          >
            <ul class="p-0 justify-content-center">
              <li class="">
                <p class="links_list-label">Our Address</p>
                <p class="links_list-value">
                  <a
                    href="https://www.google.com/maps/@30.3187631,35.4821661,14.75z"
                    target="_blank"
                    rel="nofollow"
                    >35th Street, Petra, Jordan</a
                  >
                </p>
              </li>
              <li class="marg">
                <p class="links_list-label">Contact Us</p>
                <p class="links_list-value">
                  <a href="mailto:support@email.com">support@email.com</a>
                </p>
              </li>
              <li class="marg">
                <p class="links_list-label">Phone</p>
                <p class="links_list-value">
                  <a href="tel:4785929899">(478)-592-9899</a>
                </p>
              </li>
            </ul>
          </div>
          <!-- end of addresses -->
        </div>
      </div>
      <!-- end of contact bar -->
    </div>
    <!-- end of contact bar -->
</template>

<script>
/* eslint-disable */
export default {
  name: 'ContactBar'
}
</script>

