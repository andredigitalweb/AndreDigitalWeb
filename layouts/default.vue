<template>
  <div>
    <Header />
    <slot class="pt-8" />
    <Footer />
  </div>
</template>

<style>
body {
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  background: white;
}

.banner-bg {
  background-image: url("~/assets/images/2.png");
}

.gradient {
  background: rgb(66,26,171);
  background: linear-gradient(90deg, rgba(66,26,171,1) 0%, rgba(2,5,23,1) 100%);
}

.gradient2 {
  background: rgb(80, 26, 171);
  background: linear-gradient(
    90deg,
    rgba(80, 26, 171, 1) 0%,
    rgba(0, 16, 98, 1) 100%
  );
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
