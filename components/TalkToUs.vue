import SocialIcons from './SocialIcons.vue';

<template>
  <section class="bg-no-repeat bg-cover bg-center banner-bg mx-auto py-8">
    <div class="container max-w-5xl mx-auto m-8">
      <div class="flex flex-wrap">
        <div class="w-full my-4">
          <p class="my-6 title-big text-white text-center sm:text-left">
            Talk to us
          </p>

          <p class="text-2xl text-white text-center sm:text-left">
            Feel free to call, email, or hit us up on our social media accounts.
          </p>
        </div>

        <div class="w-full my-4">
          <p class="my-4 text-center text-lg sm:text-left">
            <nuxt-link
              to="/contact"
              class="sm:mx-auto hover:underline bg-white my-4 tracking-wider text-gray-800 uppercase font-bold my-6 mx-auto py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              >Email us</nuxt-link
            >
          </p>
        </div>

        <div class="w-full my-4">
          <p class="my-4 text-3xl text-white text-center sm:text-left">
            <span>
              <img
                class="object-fit mb-2 h-7 w-7 inline-block"
                src="~/assets/images/call.png"
                alt="call"
              />
            </span>
            <a class="pt-2" href="tel:+918668848427"> +91 866 884 8427 </a>
          </p>

          <!-- <SocialIcons class="mx-auto lg:mx-0" /> -->
        </div>

        <div class="mx-auto sm:m-0 flex space-x-2 text-white">
          <!-- Whatsapp -->
          <a href="https://wa.me/message/SNDMUBOQXMZGL1" target="blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              class="w-8 h-8"
            >
              <path
                fill="currentColor"
                d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
              />
            </svg>
          </a>

          <!-- Facebook -->
          <a
            href="https://www.facebook.com/Andredigitalweb?mibextid=ZbWKwL"
            target="blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              class="w-8 h-8"
            >
              <path
                fill="currentColor"
                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
              />
            </svg>
          </a>

          <!-- Messenger -->
          <a href="#" target="blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="w-8 h-8"
            >
              <path
                fill="currentColor"
                d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z"
              />
            </svg>
          </a>

          <!-- Instagram -->
          <a
            href="https://instagram.com/andredigitalweb?igshid=YmMyMTA2M2Y="
            target="blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              class="w-8 h-8"
            >
              <path
                fill="currentColor"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              />
            </svg>
          </a>
        </div>

        <div class="w-full my-4">
          <p class="my-4 text-lg text-white text-center sm:text-left">
            <b>Office address:</b> FF S04, near TB cunha circle, Vasco arcade
            building, Vasco - Goa.
          </p>

          <!-- <p class="my-4 text-sm text-white text-center sm:text-left">
            <span class="mr-4">&#9742; <a href="tel:+918668848427"> +91 866 884 8427 </a></span>
            <span class="mr-4">&#9993; <nuxt-link to="/contact"> E-mail </nuxt-link></span>
            <span class="mr-4 inline-block">
              <img class="inline-block" width="20" height="20" src="~/assets/images/wa.png" alt="wa"/> 
              <a href="https://api.whatsapp.com/send?phone=&text="> WhatsApp </a></span>
          </p> -->
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.title-big {
  font-size: 100px;
}

@media (max-width: 640px) {
  .title-big {
    font-size: 60px;
  }
}
</style>
