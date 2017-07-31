<template>
  <div class="intro">
    <h1>Intro Component</h1>
    <p>{{ txt | reverse }}</p>
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
  // , Ejemplo de filtro a nivel de componente
  // filters: {
  //   reverse (value) {
  //     return value.split('').reverse().join('')
  //   }
  // }
}
</script>

