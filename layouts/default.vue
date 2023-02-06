<template>
  <div class="p-10">
    <div class="flex items-center pb-10">
      <div class="rounded-full overflow-hidden h-16 w-16">
        <img src="~/assets/avatar.jpeg" alt="" />
      </div>
      <div class="ml-4 flex flex-col justify-between">
        <nuxt-link to="/" class="font-semibold">Chris Mitchell</nuxt-link>
        <div>
          Director of Engineering, Architect @
          <a class="" href="https://www.cruxdata.com/" target="_blank">Crux</a>
        </div>
        <div class="text-xs">
          <a target="_blank" href="http://github.com/crishellco">GitHub</a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/crishellco/"
            class="mx-2
          "
            >LinkedIn</a
          >
        </div>
      </div>
    </div>
    <nuxt />
  </div>
</template>
