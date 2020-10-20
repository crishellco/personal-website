export default {
  data() {
    return {
      localLikesRaw: ''
    }
  },

  computed: {
    allLocalLikes() {
      try {
        return JSON.parse(this.localLikesRaw)
      } catch (e) {
        return []
      }
    },

    articleLocalLikes() {
      return this.allLocalLikes.filter((slug) => {
        return slug === this.article.slug
      })
    },

    countLocalLikes() {
      const length = this.articleLocalLikes.length

      return length < 10 ? length : '9+'
    },

    isLiked() {
      return !!this.articleLocalLikes.length
    }
  },

  watch: {
    localLikesRaw(newVal) {
      localStorage['crishellco-likes'] = newVal
    }
  },

  mounted() {
    this.localLikesRaw = localStorage['crishellco-likes']
  },

  methods: {
    storeLocalLike() {
      const likes = this.articleLocalLikes

      this.localLikesRaw = JSON.stringify(likes.concat(this.article.slug))
    }
  }
}
