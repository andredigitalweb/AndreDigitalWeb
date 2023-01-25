<template>
    <section>
      <div class="container mt-4 mx-auto px-2 pt-4 pb-12 text-gray-800">
        <h2
          class="my-4 text-4xl text-center text-gray-900"
        >
          Choose Your Plan
        </h2>
        <p
          class="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl"
        >
          And get the most effective web design plan
        </p>

        <div
          class="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4"
        >
          <div
            class="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4"
          >
            <div
              class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
            >
              <div class="p-8 text-3xl font-bold text-center border-b-4">
                Basic
              </div>
              <ul class="w-full text-center text-sm">
                <li class="border-b py-4">Free domain &amp; hosting</li>
                <li class="border-b py-4">2-5 page website</li>
                <li class="border-b py-4">5 free changes yearly</li>
                <li class="border-b py-4">
                  1000 Rs worth of paid advertisement
                </li>
                <li class="border-b py-4">Basic SEO optimisation</li>
              </ul>
            </div>
            <div
              class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
            >
              <div class="w-full pt-6 text-3xl font-bold text-center">
                Rs.20000
                <span class="text-base">/ year</span>
              </div>
              <div class="flex items-center justify-center">
                <nuxt-link
                  to="/booking"
                  class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                >
                  Get started
                </nuxt-link>
              </div>
            </div>
          </div>
          <div
            class="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10"
          >
            <div
              class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
            >
              <div class="w-full p-8 text-3xl font-bold text-center">Advanced</div>
              <div class="h-1 w-full gradient my-0 py-0 rounded-t"></div>
              <ul class="w-full text-center text-base font-bold">
                <li class="border-b py-4">Free domain &amp; hosting</li>
                <li class="border-b py-4">2-10 page website</li>
                <li class="border-b py-4">10 free changes yearly</li>
                <li class="border-b py-4">
                  1500 Rs worth of paid advertisement
                </li>
                <li class="border-b py-4">SEO optimisation</li>
              </ul>
            </div>
            <div
              class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
            >
              <div class="w-full pt-6 text-4xl font-bold text-center">
                Rs.30000
                <span class="text-base">/ year</span>
              </div>
              <div class="flex items-center justify-center">
                <nuxt-link
                  to="/booking"
                  class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                >
                  Get started
                </nuxt-link>
              </div>
            </div>
          </div>
          <div
            class="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4"
          >
            <div
              class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
            >
              <div class="p-8 text-3xl font-bold text-center border-b-4">
                Ultimate
              </div>
              <ul class="w-full text-center text-sm">
                <li class="border-b py-4">Free domain &amp; hosting</li>
                <li class="border-b py-4">Large website</li>
                <li class="border-b py-4">20 free changes yearly</li>
                <li class="border-b py-4">
                  2500 Rs worth of paid advertisement
                </li>
                <li class="border-b py-4">SEO optimisation</li>
              </ul>
            </div>
            <div
              class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
            >
              <div class="w-full pt-6 text-3xl font-bold text-center">
                Rs.50000
                <span class="text-base">/ year</span>
              </div>
              <div class="flex items-center justify-center">
                <nuxt-link
                  to="/booking"
                  class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                >
                  Get started
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>
