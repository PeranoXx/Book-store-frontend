<template>
     <div class="text-center text-4xl font-bold">{{props.title}}</div>
</template>

<script setup>

const props = defineProps({
    title: String
})
</script>