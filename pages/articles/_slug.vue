<template>
  <section class="max-w-article-list">
    <article class="mt-8">
      <h2 class="text-3xl font-semibold">{{ article.title }}</h2>
      <div
        class="mb-6 text-sm text-gray-700
      "
      >
        {{ $dateFns.format(new Date(article.createdAt), 'MMMM do, u') }}
      </div>
      <nuxt-content :document="article"></nuxt-content>
      <!-- <nuxt-link
        :to="{ name: 'articles-slug', params: { slug: article.slug } }"
        class="text-gray-700 text-sm hover:text-gray-900"
      >
        Read this article &rarr;
      </nuxt-link> -->
    </article>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const article = await $content('articles', params.slug).fetch()

    return { article }
  }
}
</script>

<style>
.nuxt-content p {
  @apply mb-4;
}
.nuxt-content ul {
  @apply list-disc ml-4 my-4 pl-4;
}
.nuxt-content ol {
  @apply list-decimal ml-4 my-4 pl-4;
}
</style>
