<template>
  <div class="intro">
    <h1>Intro Component</h1>
    <p>{{ txt | reverse }}</p>
    <p @click="clickIntro(txt)">Pulsa aquí</p>
    <ul v-if="users.length">
      <li v-for="user in users" :key="user.id">
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

    <hr>

    <ul>
      <li v-for="component in components" :key="component">
        <button @click="changeComponent(component)">Componente: {{ component }}</button>
      </li>
    </ul>
    <transition name="fade">
      <component :is="currentView"></component>
    </transition>
  </div>
</template>

<script>
import Child1 from './Child1.vue'
import Child2 from './Child2.vue'
export default {
  components: {
    Child1, Child2
  },
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
      userInput: '',
      components: ['child1', 'child2'],
      currentView: 'child1'
    }
  },
  methods: {
    clickIntro (txt) {
      console.log(txt)
    },
    showUserInput () {
      console.log(this.userInput)
    },
    changeComponent (cmp) {
      this.currentView = cmp
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

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>
