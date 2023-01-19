<template>
  <!--Hero-->
  <section class="bg-no-repeat bg-cover bg-center banner-bg mx-auto py-8">
    <div class="container max-w-5xl mx-auto m-8">
      <div class="w-full mb-4">
        <div class="h-1 mx-auto w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>

      <div class="flex flex-wrap">
        <div class="w-full sm:w-1/2 p-6">
          <!-- <img class="z-50" src="~/assets/images/6.png" /> -->
        </div>

        <div class="w-full sm:w-1/2 p-6 my-12">
          <p class="my-12 title-big text-white text-center sm:text-left">
            Leave the tech to us
          </p>
          <p class="text-center sm:text-left">
            <nuxt-link :to="{ path: '/',hash:'#whatweoffer'}" class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 uppercase font-bold my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">Learn More</nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  scrollToTop: true,
};
</script>

<style scoped>
.banner-bg {
  background-image: url("~assets/images/3.png");
}
</style>
