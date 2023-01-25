<template>
  <section class="border-b py-8" id="whatweoffer">
    <div class="container mx-auto flex flex-wrap my-12">
      <h2
        class="w-full px-2 my-2 title-big text-center text-indigo-700"
      >
        What we offer
      </h2>
      <div class="w-full mb-4">
        <div
          class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>

      <!-- Social Media Marketing -->
      <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
        <div class="flex-1 overflow-hidden">
          <a href="/plans" class="flex flex-wrap no-underline hover:no-underline">
            <div class="w-full sm:w-1/2 mx-auto">
              <img class="mx-auto z-50 px-4 sm:px-2" src="~/assets/images/8.png" />
            </div>
            <div class="w-full text-center text-2xl text-gray-800 px-6 mt-4">
              Social Media Marketing
            </div>
            <p class="text-gray-800 text-center text-md sm:text-lg px-6 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              at ipsum eu nunc commodo posuere et sit amet ligula.
            </p>
            <nuxt-link to="/plans" class="mx-auto details-one rounded hover:underline text-white uppercased font-bold py-2 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">Plans</nuxt-link>
          </a>
        </div>
      </div>

      <!-- Web Development -->
      <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
        <div class="flex-1 overflow-hidden">
          <a href="/webplans" class="flex flex-wrap no-underline hover:no-underline">
            <div class="w-full mx-auto sm:w-1/2">
              <img class="mx-auto z-50 px-4 sm:px-2" src="~/assets/images/9.png" />
            </div>
            <div class="w-full text-center text-2xl text-gray-800 px-6 mt-4">
              Web Development
            </div>
            <p class="text-gray-800 text-center text-md sm:text-lg px-6 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              at ipsum eu nunc commodo posuere et sit amet ligula.
            </p>
            <nuxt-link to="/webplans" class="mx-auto details-two rounded hover:underline text-white uppercased font-bold py-2 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">Plans</nuxt-link>
          </a>
        </div>
      </div>

      <!-- iOS Development -->
      <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
        <div class="flex-1 overflow-hidden">
          <a href="/iosplans" class="flex flex-wrap no-underline hover:no-underline">
            <div class="w-full mx-auto sm:w-1/2">
              <img class="mx-auto z-50 px-4 sm:px-2" src="~/assets/images/10.png" />
            </div>
            <div class="w-full text-center text-2xl text-gray-800 px-6 mt-4">
              iOS App Development
            </div>
            <p class="text-gray-800 text-center px-6 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              at ipsum eu nunc commodo posuere et sit amet ligula.
            </p>
            <nuxt-link to="/iosplans" class="mx-auto details-three rounded hover:underline text-white uppercased font-bold py-2 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">More</nuxt-link>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.details-one {
  /* rgb(40, 66, 160) */
  background-color: rgb(111, 99, 218);
}
.details-two {
  /* rgb(40, 66, 160) */  
  background-color: rgb(79,84,191);
}
.details-three {
  /* rgb(40, 66, 160) */
  background-color: rgb(40, 66, 160);
}
</style>