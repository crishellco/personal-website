<template>
  <article>
    <nuxt-link
      :to="{ name: 'articles-slug', params: { slug: article.slug } }"
      class="text-xl font-semibold"
      >{{ article.title }}</nuxt-link
    >
    <p class="my-2">{{ article.description }}</p>
    <nuxt-link
      :to="{ name: 'articles-slug', params: { slug: article.slug } }"
      class="text-sm"
    >
      Read this article &rarr;
    </nuxt-link>
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
