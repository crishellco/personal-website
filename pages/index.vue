<template>
  <section class="max-w-article-list">
    <article v-for="article in articles" :key="article.path" class="mt-8">
      <nuxt-link
        :to="{ name: 'articles-slug', params: { slug: article.slug } }"
        class="text-xl font-semibold hover:underline"
        >{{ article.title }}</nuxt-link
      >
      <p class="my-2">{{ article.description }}</p>
      <nuxt-link
        :to="{ name: 'articles-slug', params: { slug: article.slug } }"
        class="text-gray-700 text-sm hover:text-gray-900"
      >
        Read this article &rarr;
      </nuxt-link>
    </article>
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
