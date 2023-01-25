<template>
  <section class="bg-no-repeat bg-cover bg-center banner-bg mx-auto py-8">
    <div class="container max-w-5xl mx-auto m-8">
      <div class="flex flex-wrap">
        <div class="w-full p-4">
          <p class="text-2xl text-white text-center sm:text-left">
            Feel free to call, email, or hit us up on our social media accounts.
          </p>
          
          <p class="my-6 title-big text-white text-center sm:text-left">
            Talk to us
          </p>

          <!-- <p class="text-center sm:text-left">
            <nuxt-link
              to="/contact"
              class="sm:mx-auto hover:underline bg-white text-gray-800 uppercase font-bold my-6 mx-auto py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              >Email us</nuxt-link
            >
          </p> -->

          <p class="my-4 text-sm text-white text-center sm:text-left">
            <b>Office address:</b> FF S04, near TB cunha circle, Vasco arcade building, Vasco - Goa. 
          </p>

          <p class="my-4 text-sm text-white text-center sm:text-left">
            <span class="mr-4">&#9742; <a href="tel:+918668848427"> +91 866 884 8427 </a></span>
            <span class="mr-4">&#9993; <nuxt-link to="/contact"> E-mail </nuxt-link></span>
            <span class="mr-4 inline-block">
              <img class="inline-block" width="20" height="20" src="~/assets/images/wa.png" alt="wa"/> 
              <a href="https://api.whatsapp.com/send?phone=&text="> WhatsApp </a></span>
          </p>
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
