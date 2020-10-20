<template>
  <div>
    <div v-if="!loading" class="flex items-center relative">
      <div
        class="relative cursor-pointer group"
        style="line-height: 0;"
        @click="like"
      >
        <span class="material-icons group-hover:text-gray-700 text-3xl">
          {{ isLiked ? 'favorite' : 'favorite_border' }}
        </span>
        <span
          v-if="isLiked"
          class="text-white text-2xs absolute top-0 left-0 w-full h-full flex items-center justify-center"
          >{{ countLocalLikes }}</span
        >
      </div>
      <transition name="fade-up" @after-enter="showAnimation = false">
        <span
          v-if="showAnimation"
          class="material-icons absolute left-0 top-0 text-3xl"
        >
          favorite
        </span>
      </transition>
      <span class="text-sm ml-2">{{ likes.length }} likes</span>
    </div>
  </div>
</template>

<script>
import localLikes from '~/mixins/local-likes'

export default {
  mixins: [localLikes],

  props: {
    article: {
      required: true,
      type: Object
    }
  },

  data() {
    return {
      likes: [],
      loading: true,
      showAnimation: false
    }
  },

  mounted() {
    this.getLikes()
  },

  methods: {
    async like() {
      this.showAnimation = true
      this.likes.push({})
      this.storeLocalLike()

      await this.$fireStore.collection('likes').add({
        slug: this.article.slug,
        liked_at: this.$dateFns.formatISO(new Date(), {
          representation: 'date'
        })
      })

      this.getLikes()
    },

    async getLikes() {
      const results = await this.$fireStore
        .collection('likes')
        .where('slug', '==', this.article.slug)
        .get()

      this.likes = results.docs
      this.loading = false
    }
  }
}
</script>

<style scoped>
.fade-up-enter-active {
  animation: fade-up 0.3s ease;
}
.fade-up-leave-active {
  opacity: 0;
}
@keyframes fade-up {
  0% {
    opacity: 1;
  }
  100% {
    transform: scale(1.2) translateY(-75%);
    opacity: 0;
  }
}
</style>
