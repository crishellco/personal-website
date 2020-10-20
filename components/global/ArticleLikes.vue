<template>
  <div>
    <div class="flex items-center relative">
      <span
        class="material-icons cursor-pointer hover:text-gray-700"
        @click="like"
      >
        {{ isLiked ? 'favorite' : 'favorite_border' }}
      </span>
      <transition name="fade-up" @after-enter="showAnimation = false">
        <span v-if="showAnimation" class="material-icons absolute left-0 top-0">
          favorite
        </span>
      </transition>
      <span class="text-sm ml-2">{{ likes.length }} likes</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      required: true,
      type: Object
    }
  },

  data() {
    return {
      likes: [],
      localLikes: [],
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
  },

  methods: {
    getLocalLikes() {
      this.localLikes =
        JSON.parse(localStorage.getItem('crishellco-likes')) || []
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
  }
}
</script>

<style scoped>
.fade-up-enter-active {
  animation: fade-up 0.5s ease;
}
.fade-up-leave-active {
  opacity: 0;
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
