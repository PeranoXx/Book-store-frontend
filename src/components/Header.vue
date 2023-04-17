<template>
    <div class="container mx-auto my-10">
        <div class="flex justify-between items-center">
            <div class="font-semibold text-lg tracking-wider w-1/5">
                <RouterLink :to="{ name: 'home' }">BOOKS</RouterLink>
            </div>
            <ul class="flex gap-x-5 text-primary justify-center w-3/5">
                <li class="group group-hover:bg-secondary tracking-wider">
                    <RouterLink :to="{ name: 'home' }"
                        class="group-hover:bg-secondary group-hover:shadow-md px-5 py-1.5 rounded-full transition duration-300 ease-in-out"
                        :class="route.name == 'home' ? 'bg-secondary' : ''">Home</RouterLink>
                </li>
                <li class="active group group-hover:bg-secondary">
                    <RouterLink :to="{ name: 'books' }"
                        class="group-hover:bg-secondary group-hover:shadow-md px-5 py-1.5 rounded-full transition duration-300 ease-in-out"
                        :class="route.name == 'books' ? 'bg-secondary' : ''">
                        Books</RouterLink>
                </li>
            </ul>
            <div class="w-1/5">
                <form class="flex items-center">
                    <label for="simple-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                        <!-- <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"> -->
                        <svg class="w-5 h-5 text-primary absolute top-3 left-3" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <!-- </div> -->
                        <div class="relative">
                            <input type="text" id="simple-search"  autocomplete="false"
                                class="border border-primary text-gray-900 bg-transparent text-sm rounded-full block w-full pl-10 p-2.5 relative z-[1]"
                                placeholder="Search" required v-model="searchString" @keyup="onSearch()"
                                @click="openSearch" @blur="closeSeachBox" />


                            <div class="border-b border-l border-r border-primary rounded-b-md absolute top-5 w-full z-10"
                                :class="searchBox ? 'block' : 'hidden'" >
                                <div class="mt-12 bg-[#fff7f2]" v-if="searchLoading">
                                    <div v-if="searchData.data && searchData.data.data.length > 0">
                                        <div v-for="(item, index) in searchData.data.data" :key="index">
                                            <div class="pb-2 px-4">
                                                <RouterLink :to="{ name: 'books-detail', params: { slug: item.slug } }"
                                                    @click="searchBox = false">
                                                    <div class="flex gap-x-2">
                                                        <div><img :src="item.cover_image" loading="lazy" class="w-10"
                                                                alt=""></div>
                                                        <div>
                                                            <p class="font-bold"> {{ item.title }}</p>
                                                            <p class="text-sm">By : <strong> {{ item.author.name }}</strong>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </RouterLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-12 bg-[#fff7f2]" v-else>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-primary bg-secondary rounded-full "><svg class="w-5 h-5 bg-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button> -->
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { home } from '../use/home';
import Loader from './Loader.vue';

const { loading, params, searchData, search } = home()
const route = useRoute()
const searchString = ref('');
const searchLoading = ref(false)
const timer = ref();
const searchBox = ref(false)

const onSearch = () => {
    params.page = 1;
    params.search = searchString.value;
    clearTimeout(timer.value);

    timer.value = setTimeout(async () => {
        await search();
    }, 300);
};

const openSearch = async () => {
    searchLoading.value = false
    searchBox.value = true
    if (!searchData.value.data) {
        await search();
    }
    searchLoading.value = true
}

const closeSeachBox = () => {
    setTimeout(() => {
        searchBox.value = false
        searchString.value = ''
        params.search = ''
        searchData.value = ''
    }, 300)
}


</script>
