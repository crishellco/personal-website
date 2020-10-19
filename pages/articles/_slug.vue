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
        {
          hid: 'description',
          name: 'description',
          content: article.description
        },
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:site',
          content: '@crishellco'
        },
        {
          name: 'twitter:creator',
          content: '@crishellco'
        },
        {
          name: 'twitter:title',
          content: `${article.title} | Chris Mitchell`
        },
        {
          name: 'twitter:description',
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
