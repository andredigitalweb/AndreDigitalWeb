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

      <label for="menu-toggle" class="pointer-cursor md:hidden block pr-4">
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
      <input class="hidden" type="checkbox" id="menu-toggle" />

      <div class="hidden md:flex md:items-center md:w-auto w-full" id="menu">
        <nav class="px-8">
          <ul
            class="md:flex items-center justify-between text-base text-white pt-4 md:pt-0"
          >
            <li><NuxtLink to="/" class="px-4 md:p-4 py-3 px-0 block">Home</NuxtLink></li>
            <li><NuxtLink to="/about" class="px-4 md:p-4 py-3 px-0 block">About</NuxtLink></li>
            <li><NuxtLink to="/plans" class="px-4 md:p-4 py-3 px-0 block">Plans</NuxtLink></li>
            <li><NuxtLink to="#contact" class="px-4 md:p-4 py-3 px-0 block">Contact</NuxtLink></li>
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