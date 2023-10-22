<template>
  <div>
    <HeaderVue />
    <BookingVue />
    <BlogVue />
  </div>
</template>

<script>
import HeaderVue from '../components/main/Header.vue';
import BookingVue from '../components/main/Booking.vue';
import BlogVue from '../components/main/Blog.vue';
export default {
  name: 'Home',
  components: {
    HeaderVue,
    BookingVue,
    BlogVue,
  }
}
</script>
