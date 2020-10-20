<template>
  <div>
    <div v-if="!loading" class="flex items-center">
      <span class="material-icons text-base">
        {{ isLiked ? 'favorite' : 'favorite_border' }}
      </span>
      <span class="ml-2 text-sm">{{ likes.length }}</span>
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
      loading: true,
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

    async getLikes() {
      const results = await this.$fireStore
        .collection('likes')
        .where('slug', '==', this.article.slug)
        .get()

      this.likes = results.docs
      this.getLocalLikes()
      this.loading = false
    }
  }
}
</script>
