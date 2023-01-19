<template>
  <section class="bg-no-repeat bg-cover bg-center banner-bg mx-auto py-8">
    <div class="container max-w-5xl mx-auto m-8">
      <div class="w-full mb-4">
        <div class="h-1 mx-auto w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>

      <div class="flex flex-wrap">
        <div class="w-full p-4">
          <p class="my-6 title-big text-white text-center sm:text-left">
            Talk to us
          </p>
          <p
            class="text-2xl text-white text-center sm:text-left"
          >
            Feel free to call, email, or hit us up on our social media accounts.
          </p>

          <p
            class="mt-8 font-thin text-2xl text-white text-center sm:text-left"
          >
            <!-- https://api.whatsapp.com/send?phone=&text= -->
            <a
              href="whatsapp://send?phone=8668848427&text=Hello%20there%2C%20I%20am%20interested%20in%20your%20services%20and%20would%20like%20to%20get%20in%20touch%20with%20you%20for%20more%20details."
              class="inline-block"
            >
              <span class="pr-2 inline-block"
                ><img
                  class="inline-block"
                  width="30"
                  height="30"
                  src="~/assets/images/wa.png"
                  alt=""
              /></span>
            </a>
            <a href="tel:+918668848427" class="inline-block">
              <span class="inline-block">+91 866 884 8427</span>
            </a>
          </p>

          <br /><br />

          <p class="text-center sm:text-left">
            <nuxt-link
              to="/contact"
              class="sm:mx-auto hover:underline bg-white text-gray-800 uppercase font-bold my-6 mx-auto py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              >Email us</nuxt-link
            >
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.banner-bg {
  background-image: url("~assets/images/2.png");
}

.title-big {
  font-size: 100px;
}

@media (max-width: 640px) {
  .title-big {
    font-size: 60px;
  }
}
</style>
