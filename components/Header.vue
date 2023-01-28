<template>
  <div
    class="banner-bg bg-cover antialiased fixed w-full bg-no-repeat z-30 top-0"
  >
    <header
      class="w-full container mx-auto flex flex-wrap items-center py-4" 
    > 
     <!-- shadow-md -->
      <div class="flex-1 flex pl-4 justify-between items-center">
        <NuxtLink
          to="/"
          class="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
        >
          <img
            src="~/assets/images/logos/23.png"
            class="h-12 mb-2"
            alt="banner"
          />
        </NuxtLink>
      </div>

      <!-- 
      <label for="menu-toggle hidden sm:w-flex" class="pointer-cursor md:hidden block pr-4">
        <svg
          class="fill-current text-white"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
      <input class="hidden" type="checkbox" id="menu-toggle" /> -->

      <div class="hidden lg:flex md:flex sm:flex" id="menu">
        <nav class="px-8">
          <ul
            class="hidden md:flex items-center justify-between text-xl text-white pt-4 md:pt-0"
          >
            <li><nuxt-link :to="{ path: '/',hash:''}" to="/" class="px-4 md:p-4 py-3 px-0 block">Home</nuxt-link></li>
            <li><nuxt-link :to="{ path: '/about',hash:''}" to="/about" class="px-4 md:p-4 py-3 px-0 block">About</nuxt-link></li>
            <li><nuxt-link :to="{ path: '/',hash:'#plans'}" to="#plans" class="px-4 md:p-4 py-3 px-0 block">Plans</nuxt-link></li>
            <li><nuxt-link :to="{ path: '/',hash:'#contact'}" to="#contact" class="px-4 md:p-4 py-3 px-0 block">Contact</nuxt-link></li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>

</script>

<style scoped>
#menu-toggle:checked + #menu {
  display: block;
}
</style>