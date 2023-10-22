<template>
  <div :class="[$i18n.locale]">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <Logo />
        <button
  class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarSupportedContent" class="collapse navbar-collapse">
          <ul :class="[$i18n.locale === 'AR' ? 'navbar-nav mr-auto' : 'navbar-nav ml-auto']">
            <li class="nav-item active">
              <a class="nav-link" href="#">{{ $t('Home') }} <span class="sr-only">(current)</span></a>
            </li>
            <LanguageDropdown @changeLanguage="changeLanguage" />
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>



<script>
import Logo from '../Logo.vue';
import LanguageDropdown from '../LanguageDropdown.vue';

export default {
  name: 'HeaderVue',
  components: {
    Logo,
    LanguageDropdown,
  },
  methods: {
    // Handle Change Language
    changeLanguage(locale) {
      this.$i18n.locale = locale;
    },
  },
}
</script>
