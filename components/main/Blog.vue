<template>
  <div id="Blogs" class="container mt-5">
    <div class="row">
      <div class="col-md-12">
        <h2 class="blog-title">{{ $t('SimpleBlog') }}</h2>
      </div>
      <div v-for="(post, index) in blogPosts" :key="index" class="blogs col-md-4 mb-5">
        <div class="blog-card">
          <img :src="post.image" :alt="post.title" class="img-fluid" />
          <h2>{{ $t(post.title) }}</h2>
          <p class="fw-bold">{{ $t(post.excerpt) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/Blog.css'
export default {
  name: 'BlogVue',
  data() {
    return {
      blogPosts: [
        {
          title: 'ExploretheBeautifulTropics',
          excerpt: 'BlogOneTitle',
          image: require('@/assets/images/Blogs/Blog-1.jpg')
        },
        {
          title: 'YourDreamVacationAwaits',
          excerpt: 'BlogTwoTitle',
          image: require('@/assets/images/Blogs/Blog-2.jpg')
        },
        {
          title: 'AdventuresintheGreatOutdoors',
          excerpt: 'BlogThreeTitle',
          image: require('@/assets/images/Blogs/Blog-3.jpg')
        }
      ]
    };
  },

  // Handle SEO Description For Blogs
  head() {
    const titleKey = this.$i18n.locale === 'AR' ? 'titleAr' : 'titleEn';
    const descriptionKey = this.$i18n.locale === 'AR' ? 'descriptionAr' : 'descriptionEn';
    return {
      title: this.$t(titleKey),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t(descriptionKey)
        }
      ]
    };
  }
};
</script>
