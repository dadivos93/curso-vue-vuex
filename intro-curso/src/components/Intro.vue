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

    <hr>
    
    <input v-model="userInput" />
    <p>{{ userInput }}</p>
    <button @click="showUserInput">Ver user input desde el componente</button>
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
      users: [],
      userInput: ''
    }
  },
  methods: {
    clickIntro (txt) {
      console.log(txt)
    },
    showUserInput () {
      console.log(this.userInput)
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
