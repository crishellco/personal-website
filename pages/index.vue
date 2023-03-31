<template>
  <section class="max-w-article-list">
    <article-preview
      v-for="article in articles"
      :key="article.path"
      :article="article"
    />
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const articles = await $content('articles', { text: true })
      .sortBy('createdAt', 'desc')
      .fetch()

    return { articles }
  },

  head: {
    title: 'Articles'
  }
}
</script>
