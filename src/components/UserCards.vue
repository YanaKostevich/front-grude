<template>
    <div class="card">
        <h2>Card</h2>
        <div class="main">
            {{ name }} - {{ email }} - {{ number }} - {{ event }}
        </div>
    </div>

</template>

<script>
    export default{
        props: {
            name:{
                type: String,
                default: "",
            },
            email:{
                type: String,
                default: "",
            },
            number:{
                type: Number,
                default: 0,
            },
            event:{
                type: Date,
                default: "",
            }
        }
    }
</script>