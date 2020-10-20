<template>
  <section class="max-w-article-list">
    <article class="mt-8">
      <h2 class="text-3xl font-semibold">{{ article.title }}</h2>
      <div
        class="mb-6 text-sm text-gray-700
      "
      >
        <span>{{
          $dateFns.format(new Date(article.createdAt), 'MMMM do, u')
        }}</span>
        <span>&centerdot;</span>
        <span>{{ readTime }}</span>
      </div>
      <div ref="content">
        <nuxt-content :document="article"></nuxt-content>
      </div>
    </article>
    <div class="flex items-center border-t pt-4">
      <div class="relative">
        <span
          class="material-icons cursor-pointer hover:text-gray-700"
          @click="like"
        >
          {{ isLiked ? 'favorite' : 'favorite_border' }}
        </span>
        <transition name="fade-up" @after-enter="showAnimation = false">
          <span
            v-if="showAnimation"
            class="material-icons absolute left-0 top-0"
          >
            favorite
          </span>
        </transition>
      </div>
      <span class="text-sm ml-2">{{ likes.length }} likes</span>
    </div>
  </section>
</template>

<script>
import readTimeEstimate from 'read-time-estimate'

export default {
  async asyncData({ $content, params, error }) {
    const article = await $content('articles', params.slug).fetch()

    return { article }
  },

  data() {
    return {
      likes: [],
      localLikes: [],
      readTime: '',
      showAnimation: false
    }
  },

  computed: {
    isLiked() {
      return this.localLikes.includes(this.article.slug)
    }
  },

  mounted() {
    this.getLikes()
    this.observe()
  },

  methods: {
    observe() {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          this.calculateReadTime()
        })
      })
      observer.observe(this.$refs.content, {
        attributes: true,
        childList: true,
        subtree: true
      })
    },

    getLocalLikes() {
      this.localLikes =
        JSON.parse(localStorage.getItem('crishellco-likes')) || []
    },

    calculateReadTime() {
      const data = readTimeEstimate(
        this.$refs.content.innerHTML,
        275,
        12,
        500,
        ['img', 'Image', 'iframe']
      )

      this.readTime = `${Math.ceil(data.duration)} min read`
    },

    async like() {
      const likes = this.localLikes

      this.showAnimation = true
      this.likes.push({})

      await this.$fireStore.collection('likes').add({
        slug: this.article.slug,
        liked_at: this.$dateFns.formatISO(new Date(), {
          representation: 'date'
        })
      })

      if (!this.isLiked) {
        localStorage.setItem(
          'crishellco-likes',
          JSON.stringify(likes.concat(this.article.slug))
        )
      }

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

<style scoped>
.fade-up-enter-active {
  animation: fade-up 0.5s ease;
}
@keyframes fade-up {
  0% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
}
</style>
