<template>
  <div class="intro">
    <h1>Intro Component</h1>
    <p>{{ txt | reverse }}</p>
    <p @click="clickIntro(txt)">Pulsa aquí</p>
    <ul>
      <li v-for="user in users" v-bind:key="user.id">
        {{ user.id }} - {{ user.name | reverse }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      txt: 'Hola mundo desde Intro!',
      users: [
        { id: 1, name: 'Andrés' },
        { id: 2, name: 'Juán' }
      ]
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

