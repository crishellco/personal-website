<template>
  <span>
    {{ readTime }}
  </span>
</template>

<script>
import readTimeEstimate from 'read-time-estimate'

export default {
  props: {
    article: {
      required: true,
      type: Object
    }
  },

  computed: {
    readTime() {
      const data = readTimeEstimate(this.article.text, 275, 12, 500, [
        'img',
        'Image',
        'iframe',
        'resizing-iframe'
      ])

      return `${Math.ceil(data.duration)} min read`
    }
  }
}
</script>
