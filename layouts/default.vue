<template>
  <div class="p-10">
    <div class="flex items-center pb-10">
      <div class="rounded-full overflow-hidden h-16 w-16">
        <img src="~/assets/avatar.jpeg" alt="" />
      </div>
      <div class="ml-4 flex flex-col justify-between">
        <nuxt-link to="/" class="font-semibold hover:underline"
          >Chris Mitchell</nuxt-link
        >
        <div>
          Principal Software Engineer, Architect @
          <a class="hover:underline" href="www.rms.com" target="_blank">RMS</a>
        </div>
        <div class="text-xs">
          <a
            target="_blank"
            href="http://github.com/crishellco"
            class="text-gray-800 hover:underline
          "
            >GitHub</a
          >
          <a
            target="_blank"
            href="https://www.linkedin.com/in/crishellco/"
            class="text-gray-800 hover:underline mx-2
          "
            >LinkedIn</a
          >
          <a
            target="_blank"
            href="https://twitter.com/crishellco"
            class="text-gray-800 hover:underline
          "
            >Twitter</a
          >
        </div>
      </div>
    </div>
    <nuxt />
  </div>
</template>
