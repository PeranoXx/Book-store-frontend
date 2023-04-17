<template>
    <div class="text-primary">
        <div class="text-xl font-bold border-b-2 border-secondary mb-5 pb-1 bg-transparent">{{ props.title }}</div>
        <div>
            <ul class="flex flex-col gap-y-3">
                <li class="flex justify-between items-center" v-for="(item, index) in props.data" :key="index">
                    <div class="font-semibold">{{ item.name }}</div>
                    <input type="checkbox" :value="item.id" class="h-5 w-5 form-checkbox rounded text-secondary focus:ring-0" @click="handleChange()"/>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String,
    data: Object
})

const emit = defineEmits(['handleInput'])

const handleChange = () => {
    emit("handleInput");
}
</script>