<template>
  <section class="max-w-article pb-10">
    <article class="mt-8">
      <h2 class="text-3xl font-semibold">{{ article.title }}</h2>
      <div class="mb-6 text-sm text-gray-700 flex items-center">
        <formatted-date :article="article" />
        <span class="mx-1">&centerdot;</span>
        <read-time :article="article" />
        <span class="mx-1">&centerdot;</span>
        <nuxt-link to="/">Back to articles</nuxt-link>
      </div>
      <div ref="content">
        <nuxt-content :document="article"></nuxt-content>
      </div>
    </article>
    <article-likes
      class="fixed bottom-0 left-0 bg-white w-full py-4 px-10 border-t"
      :article="article"
    />
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const article = await $content('articles', params.slug, {
      text: true
    }).fetch()

    return { article }
  },

  head() {
    const { description, title } = this.article

    return {
      title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: description
        },
        {
          property: 'twitter:card',
          content: 'summary'
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
          content: `${title} | Chris Mitchell`
        },
        {
          property: 'twitter:description',
          content: description
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
