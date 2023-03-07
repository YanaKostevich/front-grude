<template>
    <div class="card">
        <h2>Card</h2>
        <div class="main">
            {{ name }} - {{ email }} - {{ number }} - {{ eventDate }}
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
                default: "",
            },
            eventDate:{
                type: Date,
                default: "",
            }
        }
    }
</script>