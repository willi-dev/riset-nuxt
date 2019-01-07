<template>
  <section class="container">
    {{ $t('home.lang') }}
    <div class="col-md-12">
      {{ selectedLang }}
      <select 
        v-model="selectedLang"
        @change="changeLang"> 
        <option value="en">EN</option>
        <option value="id">ID</option>
      </select>
    </div>

    <div class="col-md-6 offset-md-3">
      <logo/>
      <h1 class="title">
        {{ $t('home.about') }}
      </h1>
      <h2 class="subtitle">
        {{ $t('home.description') }}
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
    
    <div class="col-md-12">
      <h2 :style="{ color: warnaText }">
        text input {{ mInput }}
      </h2>

      <input
        v-model="mInput"
        type="text">

      <select 
        v-model="warnaText"
        class="custom-select custom-select-md mb-3" >
        <option value="black">black</option>
        <option value="red">red</option>
        <option value="blue">blue</option>
      </select>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  // data
  data: function() {
    return {
      mInput: 'text',
      warnaText: 'black',
      selectedLang: 'en'
    }
  },
  methods: {
    // change language
    changeLang() {
      // console.log(this.selectedLang)
      // console.log(lang)
      console.log(this.$store.state.locale)

      this.$store.commit('SET_LANG', this.selectedLang)
      this.$router.push({
        path: `${this.$router.currentRoute.path}?lang=${this.selectedLang}`
      })
      console.log(this.$store.state.locale)
    }
  }
}
</script>

<style>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
