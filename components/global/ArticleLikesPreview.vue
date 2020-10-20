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
      loading: true
    }
  },

  mounted() {
    this.getLikes()
  },

  methods: {
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
