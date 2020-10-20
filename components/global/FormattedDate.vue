<template>
  <span>{{ $dateFns.format(new Date(article.createdAt), 'MMMM do, u') }}</span>
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
