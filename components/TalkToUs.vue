<template>
  <section class="bg-no-repeat bg-cover bg-center banner-bg mx-auto py-8">
    <div class="container max-w-5xl mx-auto m-8">
      <div class="w-full mb-4">
        <div class="h-1 mx-auto w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>

      <div class="flex flex-wrap">
        <div class="w-full p-6">
          <p class="my-12 title-big text-white centre">Talk to us</p>
          <p class="my-12 font-thin text-2xl text-white leading-tight">
            Feel free to call, email, or hit us up on our social media accounts.
          </p>
          <nuxt-link to="/contact" class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 uppercased font-bold my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">Email us</nuxt-link>

          <p class="mt-8 font-thin text-2xl text-white leading-tight">
            <span class="pr-2">&phone; </span> +91 <span class="px-2">866 884 8427</span> 
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.banner-bg {
  background-color: #0f193e;
  background-image: url("~assets/images/2.png");
}

.title-big {
  font-size: 100px;
}
</style>
