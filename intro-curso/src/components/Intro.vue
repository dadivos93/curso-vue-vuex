<template>
  <div class="intro">
    <h1>Intro Component</h1>
    <p>{{ txt | reverse }}</p>
    <p @click="clickIntro(txt)">Pulsa aquí</p>
    <ul v-if="users.length">
      <li v-for="user in users" v-bind:key="user.id">
        {{ user.id }} - {{ user.name | reverse }}
      </li>
    </ul>
    <div v-else>
      No existen usuarios
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.users.push(
      { id: 1, name: 'Andrés' },
      { id: 2, name: 'Juán' }
    )
  },
  data () {
    return {
      txt: 'Hola mundo desde Intro!',
      users: []
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
