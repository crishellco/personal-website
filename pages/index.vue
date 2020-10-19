<template>
  <section class="max-w-article-list">
    <article-preview
      v-for="article in articles"
      :key="article.path"
      :article="article"
      class="mt-8"
    />
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const articles = await $content('articles')
      .sortBy('createdAt', 'desc')
      .fetch()

    return { articles }
  }
}
</script>
