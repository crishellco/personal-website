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
    <div class="flex items-center border-t pt-4">
      <span v-if="isLiked" class="material-icons">
        favorite
      </span>
      <span
        v-else
        class="material-icons cursor-pointer hover:text-gray-700"
        @click="like"
      >
        favorite_border
      </span>
      <span class="text-sm ml-2">{{ likes.length }} likes</span>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const article = await $content('articles', params.slug).fetch()

    return { article }
  },

  data() {
    return {
      likes: [],
      localLikes: []
    }
  },
  computed: {
    isLiked() {
      return this.localLikes.includes(this.article.slug)
    }
  },

  mounted() {
    this.getLikes()
  },

  methods: {
    getLocalLikes() {
      this.localLikes =
        JSON.parse(localStorage.getItem('crishellco-likes')) || []
    },

    async like() {
      if (this.isLiked) {
        return
      }

      const likes = this.localLikes

      await this.$fireStore.collection('likes').add({
        slug: this.article.slug,
        liked_at: this.$dateFns.formatISO(new Date(), {
          representation: 'date'
        })
      })

      localStorage.setItem(
        'crishellco-likes',
        JSON.stringify(likes.concat(this.article.slug))
      )

      this.getLikes()
    },

    async getLikes() {
      const results = await this.$fireStore
        .collection('likes')
        .where('slug', '==', this.article.slug)
        .get()

      this.likes = results.docs
      this.getLocalLikes()
    }
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
