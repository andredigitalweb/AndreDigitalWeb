<template>
  <!--Hero-->
  <section class="bg-no-repeat bg-cover bg-center banner-bg mx-auto py-8">
    <div class="container max-w-5xl mx-auto p-6 my-8">
      <div class="flex flex-wrap">
        <div class="w-full sm:w-1/2 my-auto">
          <img class="z-50 p-2" src="~/assets/images/top-net.png" />
        </div>

        <div class="w-full sm:w-1/2 my-auto">
          <p class="title-big text-white text-center sm:text-left">
            Leave the tech to us
          </p>
          <p class="my-12 text-center sm:text-left">
            <nuxt-link :to="{ path: '/',hash:'#whatweoffer'}" class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 uppercase font-bold my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">Learn More</nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.banner-bg {
  background-image: url("~/assets/images/2.png");
}
</style>
<!-- <script>
export default {
  scrollToTop: true,
};
</script> -->
