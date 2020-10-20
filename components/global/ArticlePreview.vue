<template>
  <article>
    <nuxt-link
      :to="{ name: 'articles-slug', params: { slug: article.slug } }"
      class="text-xl font-semibold"
      >{{ article.title }}</nuxt-link
    >
    <div class="mb-4 text-sm text-gray-700 flex items-center">
      <formatted-date :article="article" />
      <span class="mx-1">&centerdot;</span>
      <read-time :article="article" />
      <span class="mx-1">&centerdot;</span>
      <article-likes-preview :article="article" />
    </div>
    <p class="my-2">{{ article.description }}</p>
  </article>
</template>

<script>
export default {
  props: {
    article: {
      required: true,
      type: Object
    }
  }
}
</script>
