<template>
  <div>
    <li class="nav-item dropdown">
      <a
  id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">
        {{ $t($i18n.locale) }}
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a
  v-for="locale in locales" :key="locale.code" class="dropdown-item" href="#"
          @click="changeLanguage(locale.code)">
          {{ locale.name }}
        </a>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  name: 'LanguageDropdown',
  data() {
    return {
      locales: [
        { code: 'EN', name: 'English' },
        { code: 'AR', name: 'العربية' },
      ],
    };
  },
  methods: {
    // Handle Change Language And Pass The Data
    changeLanguage(locale) {
      this.$emit('changeLanguage', locale);
    },
  },
};
</script>
