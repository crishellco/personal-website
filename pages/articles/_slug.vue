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
    </article>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const article = await $content('articles', params.slug).fetch()

    return { article }
  },

  head() {
    const article = this.article

    return {
      title: `${article.title} | Chris Mitchell`,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: article.description
        },
        {
          property: 'twitter:card',
          name: 'summary'
        },
        {
          property: 'twitter:site',
          content: '@crishellco'
        },
        {
          property: 'twitter:creator',
          content: '@crishellco'
        },
        {
          property: 'twitter:title',
          content: `${article.title} | Chris Mitchell`
        },
        {
          property: 'twitter:description',
          content: article.description
        }
      ]
    }
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
