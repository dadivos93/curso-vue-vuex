<template>
  <div class="intro">
    <h1>Intro Component</h1>
    <p>{{ txt }}</p>
    <p @click="clickIntro(txt)">Pulsa aquí</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      txt: 'Hola mundo desde Intro!'
    }
  },
  methods: {
    clickIntro (txt) {
      console.log(txt)
    }
  }
}
</script>

