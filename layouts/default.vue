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
          Principal Software Engineer, Architect @ RMS
        </div>
        <div class="text-xs">
          <a
            target="_blank"
            href="http://github.com/crishellco"
            class="text-gray-600 hover:text-gray-900
          "
            >GitHub</a
          >
          <a
            target="_blank"
            href="https://www.linkedin.com/in/crishellco/"
            class="text-gray-600 hover:text-gray-900 mx-2
          "
            >LinkedIn</a
          >
          <a
            target="_blank"
            href="https://twitter.com/crishellco"
            class="text-gray-600 hover:text-gray-900
          "
            >Twitter</a
          >
        </div>
      </div>
    </div>
    <nuxt />
  </div>
</template>
