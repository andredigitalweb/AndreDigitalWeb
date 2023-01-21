<template>
  <!--Nav-->
  <div class="leading-normal tracking-normal">
    <nav
      id="header"
      class="fixed w-full bg-no-repeat bg-cover header-bg z-30 top-0 text-white"
    >
      <div
        class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2"
      >
        <div class="pl-4 flex items-center">
          <NuxtLink
            to="/"
            class="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
          >
            <img src="~/assets/images/logos/23.png" class="h-12 mb-2" alt="banner" />
          </NuxtLink>
        </div>
        <!-- <div class="block lg:hidden pr-4">
          <button id="nav-toggle" class="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div> -->
        <div
          class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
          id="nav-content"
        >
          <ul class="list-reset lg:flex justify-end flex-1 items-center">
            <li class="mr-3">
              <NuxtLink
                to="/"
                class="inline-block text-white no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                >Home</NuxtLink
              >
            </li>
            <li class="mr-3">
              <NuxtLink
                to="/about"
                class="inline-block text-white no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                >About</NuxtLink
              >
            </li>
            <li class="mr-3">
              <NuxtLink
                to="/plans"
                class="inline-block text-white no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                >Plans</NuxtLink
              >
            </li>
            <li class="mr-3">
              <NuxtLink
                to="/contact"
                class="inline-block text-white no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                >Contact</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
body {
  font-family: "Lato", "Agrandir", Fallback, sans-serif;
}

.header-bg {
  background-image: url("~assets/images/2.png");
}

.title-big {
  font-family: "Agrandir", Impact, Haettenschweiler, "Arial Narrow Bold",
    sans-serif;
  font-size: 60px;
}

@media (max-width: 640px) {
  .title-big {
    font-size: 40px;
  }
}
</style>
