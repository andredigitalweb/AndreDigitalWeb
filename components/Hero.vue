<template>
  <!--Hero-->
  <section class="bg-no-repeat bg-cover bg-center banner-bg mx-auto py-8">
    <div class="container mx-auto">
      <div class="flex flex-wrap">
        <div class="w-full sm:w-1/2 p-8 sm:p-0">
          <img class="object-cover mt-8 my-auto" src="~/assets/images/top-net.png" />
        </div>

        <div class="w-full sm:w-1/2 py-8 my-auto">
          <p class="title-big text-white text-center px-8 sm:text-left">
            Leave the tech to us
          </p>
          <p class="my-12 text-lg text-center sm:text-left px-8">
            <nuxt-link :to="{ path: '/',hash:'#plans'}" class="mx-auto lg:mx-0 hover:underline tracking-wider bg-white text-gray-800 uppercase font-bold my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">Learn More</nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.title-big {
  font-family: "Agrandir", Impact, Haettenschweiler, "Arial Narrow Bold",
    sans-serif;
  font-size: 70px;
}

@media (max-width: 640px) {
  .title-big {
    font-size: 40px;
  }
}
</style>