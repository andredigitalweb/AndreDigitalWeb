<template>
  <div class="footer-bg">
    <!--Footer-->
    <footer class="bg-white">
      <div class="container mx-auto px-8">
        <div class="w-full flex flex-col md:flex-row py-6">
          <div class="flex-1 mb-6 text-black">
            <NuxtLink
              to="/"
              class="text-indigo-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            >
              <img src="~/assets/images/logos/24.png" :width="140" alt="banner" />
            </NuxtLink>
          </div>
          <div class="flex-1">
            <p class="uppercase text-gray-500 md:mb-6">Links</p>
            <ul class="list-reset mb-6">
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  class="no-underline hover:underline text-gray-800 hover:text-indigo-500"
                  >FAQ</a
                >
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  class="no-underline hover:underline text-gray-800 hover:text-indigo-500"
                  >Help</a
                >
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  class="no-underline hover:underline text-gray-800 hover:text-indigo-500"
                  >Support</a
                >
              </li>
            </ul>
          </div>
          <div class="flex-1">
            <p class="uppercase text-gray-500 md:mb-6">Legal</p>
            <ul class="list-reset mb-6">
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  class="no-underline hover:underline text-gray-800 hover:text-indigo-500"
                  >Terms</a
                >
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  class="no-underline hover:underline text-gray-800 hover:text-indigo-500"
                  >Privacy</a
                >
              </li>
            </ul>
          </div>
          <div class="flex-1">
            <p class="uppercase text-gray-500 md:mb-6">Social</p>
            <ul class="list-reset mb-6">
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="https://wa.me/message/SNDMUBOQXMZGL1" target="blank"
                  class="no-underline hover:underline text-gray-800 hover:text-indigo-500"
                  >Whatsapp</a
                >
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="https://www.facebook.com/Andredigitalweb?mibextid=ZbWKwL" target="blank"
                  class="no-underline hover:underline text-gray-800 hover:text-indigo-500"
                  >Facebook</a
                >
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="https://instagram.com/andredigitalweb?igshid=YmMyMTA2M2Y=" target="blank"
                  class="no-underline hover:underline text-gray-800 hover:text-indigo-500"
                  >Instagram</a
                >
              </li>
            </ul>
          </div>
          <div class="flex-1">
            <p class="uppercase text-gray-500 md:mb-6">Company</p>
            <ul class="list-reset mb-6">
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="/"
                  class="no-underline hover:underline text-gray-800 hover:text-indigo-500"
                  >Home</a
                >
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="/about"
                  class="no-underline hover:underline text-gray-800 hover:text-indigo-500"
                  >About</a
                >
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="/contact"
                  class="no-underline hover:underline text-gray-800 hover:text-indigo-500"
                  >Contact</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.footer-bg {
  background: #0f193e;
}
</style>
