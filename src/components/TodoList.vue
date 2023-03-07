<template>
    <div>
        <ul>
            <TodoListItems 
                v-for="(todo, i) of todos"
                v-bind:todo="todo"
                v-bind:index="i"
                v-on:delete-todo="deleteTodo"
            />
        </ul>
    </div>
</template>
<script>

import TodoListItems from '@/components/TodoListItems.vue';
export default{
    props: ['todos'],
    components: {
        TodoListItems
    },
    methods: {
        deleteTodo (id){
            this.$emit('delete-todo', id)
        }
    }
}
</script>
<style scoped>
    ul{
        list-style: none;
        margin: 0;
        padding: 0;
    }
</style>