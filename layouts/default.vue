<template>
  <div class="p-10 space-y-8">
    <div
      class="flex items-center justify-center md:justify-start flex-col md:flex-row md:space-x-4"
    >
      <div
        class="rounded-full overflow-hidden md:w-20 md:h-20 h-32 w-32 mb-4 md:mb-0"
      >
        <img src="~/assets/avatar.jpeg" alt="" />
      </div>
      <div
        class="flex flex-col items-center md:items-start space-y-2 md:space-y-0"
      >
        <nuxt-link to="/" class="font-semibold text-2xl md:text-xl"
          >Chris Mitchell</nuxt-link
        >
        <div class="text-center md:text-left">
          Director of Engineering, Architect @
          <a href="https://www.cruxdata.com/" target="_blank">Crux</a>
        </div>
        <div
          class="text-xs md:space-x-2 items-center md:items-start flex flex-col md:flex-row"
        >
          <div
            class="md:space-x-2 font-semibold whitespace-no-wrap justify-center md:justify-start flex"
          >
            <span>Packages</span>
            <span class="invisible md:visible">/</span>
          </div>
          <div>
            <a
              target="_blank"
              href="https://crishellco.github.io/vue-call-store/"
              >@crishellco/vue-call-store</a
            >
          </div>
          <div>
            <a target="_blank" href="https://crishellco.github.io/vue-beam/"
              >@crishellco/vue-beam</a
            >
          </div>
          <div>
            <a target="_blank" href="https://crishellco.github.io/vue-spruce/"
              >@crishellco/vue-spruce</a
            >
          </div>
          <div>
            <a target="_blank" href="https://vue-hubble.crishell.co/"
              >@crishellco/vue-hubble</a
            >
          </div>
          <div>
            <a target="_blank" href="https://crishellco.github.io/vue-coy/"
              >@crishellco/vue-coy</a
            >
          </div>
        </div>
        <div
          class="text-xs md:space-x-2  items-center md:items-start flex flex-col md:flex-row"
        >
          <div class="md:space-x-2 font-semibold whitespace-no-wrap">
            <span>Links</span>
            <span class="invisible md:visible">/</span>
          </div>
          <div>
            <a target="_blank" href="http://github.com/crishellco">GitHub</a>
          </div>
          <div>
            <a target="_blank" href="https://www.linkedin.com/in/crishellco/"
              >LinkedIn</a
            >
          </div>
        </div>
      </div>
    </div>
    <nuxt />
  </div>
</template>
