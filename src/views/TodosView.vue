<template>
  <div class="todos">
    <h2>Todo aplication</h2>
    <router-link to="/">Home</router-link>
    <br>
    <router-link to="/user">User</router-link>
    <hr>
    <AddTodo
      @add-todo="addTodo"
    />
    <select v-model="filter">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not Completed</option>
    </select>
    <hr>
    <Loader v-if="loading"/>
    <TodoList
    v-else-if="filteredTodos.length"
    v-bind:todos="filteredTodos"
    @delete-todo="deleteTodo"
    />
    <p v-else>No todos!</p>

    <MevnHeader :categories="categories" />
    <router-view />

  </div>
  
</template>

<script>
import TodoList from '@/components/TodoList.vue'
import AddTodo from '@/components/AddTodo.vue'
import Loader from '@/components/Loader.vue'
import MevnHeader from '@/components/layouts/Header.vue'

export default {
  name: 'App',
  data() {
    return{
      todos: [],
      loading: true,
      filter: 'all',
      categories: [
        { name: "PS4", id: 1 },
        { name: "XBOX", id: 1 },
        { name: "Nintendo Switch", id: 1 },
      ]
    }
    
  },
  mounted(){
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then(response => response.json())
      .then(json => {
          this.todos = json
          this.loading = false
      })
  },
  // watch:{
  //     filter(value){
  //         console.log(value)
  //     }
  // },
  computed: {
      filteredTodos(){
          if (this.filter === 'all'){
              return this.todos
          }

          if (this.filter === 'completed'){
              return this.todos.filter(t => t.completed)
          }

          if (this.filter === 'not-completed'){
              return this.todos.filter(t => !t.completed)
          }
      }
  },
  methods:{
    deleteTodo(id){
      this.todos = this.todos.filter(t => t.id !== id)
    },
    addTodo(todo){
      this.todos.push(todo)
    }
  },
  components: {
    TodoList,
    AddTodo,
    Loader,
    MevnHeader
  }
}
</script>


