<template>
  <div class="todos">
    <h2>Todo aplication</h2>
    <router-link to="/">Home</router-link>
    <hr />
    <AddTodo @add-todo="addTodo" />
    <select v-model="filter">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not Completed</option>
    </select>
    <hr />
    <Loader v-if="loading" />
    <TodoList
      v-else-if="filteredTodos.length"
      v-bind:todos="filteredTodos"
      @delete-todo="deleteTodo"
    />
    <p v-else>No todos!</p>
    <div class="users">
      <table>
        <tr>
          <th>
            UserName
        </th>
        <th>
            Email
        </th>
        <th>
            PhoneNumber
        </th>
        <th>
            Events Count
        </th>
        <th>
            UserName
        </th>
        </tr>

      </table>
      <UserCards 
      
          v-for="(user, key) in users"
          :key="key"
          :name="user.name"
          :email="user.email"
          :number="user.number"
          :event="user.eventDate"
        />
    </div>
     

    <MevnHeader :categories="categories" />
    <router-view />

  </div>

</template>

<script>
import TodoList from "@/components/TodoList.vue";
import AddTodo from "@/components/AddTodo.vue";
import Loader from "@/components/Loader.vue";
import UserCards from '@/components/UserCards.vue';
import { mapGetters, mapActions } from 'vuex';
import MevnHeader from "@/components/layouts/Header.vue";

export default {
  name: "App",
  data() {
    return {
      todos: [],
      loading: true,
      filter: "all",
      categories: [
        { name: "PS4", id: 1 },
        { name: "XBOX", id: 1 },
        { name: "Nintendo Switch", id: 1 },
      ],
    };
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=3")
      .then((response) => response.json())
      .then((json) => {
        this.todos = json;
        this.loading = false;
      })
      this.fetchUsers()
  },
  // watch:{
  //     filter(value){
  //         console.log(value)
  //     }
  // },
  computed: {
    filteredTodos() {
      if (this.filter === "all") {
        return this.todos;
      }

      if (this.filter === "completed") {
        return this.todos.filter((t) => t.completed);
      }

      if (this.filter === "not-completed") {
        return this.todos.filter((t) => !t.completed);
      }
    },
    ...mapGetters({
               users: 'users'
           })
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter((t) => t.id !== id);
    },
    addTodo(todo) {
      this.todos.push(todo);
    },
    ...mapActions({
               fetchUsers: 'fetchUsers'
           })
  },
  components: {
    TodoList,
    AddTodo,
    Loader,
    MevnHeader,
    UserCards
  },
};
</script>

<style lang="scss" scoped>
.users{
  border: 2px solid #ccc;
  padding: 0.5rem 2rem;
  table{
    width: 100%;
    margin-bottom: 0.5rem;
    text-align: left;
        tr{
            display: flex;
            justify-content: space-between;
            border-bottom: 1.5px solid #ccc;
            th{
              width: 200px;
            }
        }
        
    }

}


</style>
