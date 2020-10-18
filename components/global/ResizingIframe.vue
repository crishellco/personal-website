<template>
  <!-- <iframe
    :src="src"
    width="100%"
    frameborder="0"
    style="max-height: 500px"
  ></iframe> -->
  <vue-embed-gist :gist-id="gistId" />
</template>

<script>
import VueEmbedGist from 'vue-embed-gist'

export default {
  components: { VueEmbedGist },

  props: {
    gistId: {
      required: true,
      type: String
    }
  }
}
</script>

<style scoped>
@import url('https://github.githubassets.com/assets/gist-embed-4ac6018bcc05457cde2f66d2e7299d11.css');
</style>
