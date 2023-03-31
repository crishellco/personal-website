<template>
  <div class="p-10">
    <div class="flex items-center pb-10">
      <div class="rounded-full overflow-hidden w-20 h-20">
        <img src="~/assets/avatar.jpeg" alt="" />
      </div>
      <div class="ml-4 flex flex-col justify-between">
        <nuxt-link to="/" class="font-semibold">Chris Mitchell</nuxt-link>
        <div>
          Director of Engineering, Architect @
          <a class="" href="https://www.cruxdata.com/" target="_blank">Crux</a>
        </div>
        <div class="text-xs space-x-2">
          <span class="font-semibold">Packages</span>
          <span class="font-semibold">/</span>
          <a target="_blank" href="https://crishellco.github.io/vue-call-store/"
            >@crishellco/vue-call-store</a
          >
          <a target="_blank" href="https://crishellco.github.io/vue-beam/"
            >@crishellco/vue-beam</a
          >
          <a target="_blank" href="https://crishellco.github.io/vue-spruce/"
            >@crishellco/vue-spruce</a
          >
          <a target="_blank" href="https://vue-hubble.crishell.co/"
            >@crishellco/vue-hubble</a
          >
          <a target="_blank" href="https://crishellco.github.io/vue-coy/"
            >@crishellco/vue-coy</a
          >
        </div>
        <div class="text-xs space-x-2">
          <span class="font-semibold">Links</span>
          <span class="font-semibold">/</span>
          <a target="_blank" href="http://github.com/crishellco">GitHub</a>
          <a target="_blank" href="https://www.linkedin.com/in/crishellco/"
            >LinkedIn</a
          >
        </div>
      </div>
    </div>
    <nuxt />
  </div>
</template>
