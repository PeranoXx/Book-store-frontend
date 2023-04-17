<template>
    <div class="container mx-auto min-h-screen" v-if="!loading && bookData.data">
        <div class="grid grid-cols-3 gap-x-10" >
            <div class="col-span-1">
                <div class="h-[500px] bg-secondary/10 flex justify-center items-center">
                    <img :src="bookData.data.book.cover_image" loading="lazy" class="w-[300px]" alt="" />
                </div>
            </div>
            <div class="col-span-2">
                <div class="py-4">
                    <div class="flex gap-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-6 h-6 text-secondary">
                            <path fill-rule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clip-rule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-6 h-6 text-secondary">
                            <path fill-rule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clip-rule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-6 h-6 text-secondary">
                            <path fill-rule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clip-rule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-6 h-6 text-secondary">
                            <path fill-rule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clip-rule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6 text-secondary">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                    </div>
                    <div class="">
                        <h1 class="text-4xl font-bold py-5">{{ bookData.data.book.title }}</h1>
                        <p class="text-lg"> {{ bookData.data.book.description }} {{ bookData.data.book.description }}{{
                            bookData.data.book.description }}</p>

                        <div class="py-5 flex flex-col gap-y-2">
                            <p>Author : <strong>{{ bookData.data.book.author.name }}</strong></p>
                            <p>Genre : <strong>{{ bookData.data.book.genre.name }}</strong></p>
                            <p>published At : <strong>{{ bookData.data.book.publication_date }}</strong></p>
                            <p>Isbn : <strong>{{ bookData.data.book.isbn }}</strong></p>
                        </div>

                        <div class="py-10">
                            <a :href="bookData.data.book.book" target="_blank">
                                <Button title="Download" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       <div class="pt-10 pb-20">
            <Heading title="Related Author Books"/>
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10 pt-10">
            <div v-for="(book, index) in bookData.data.related_author" :key="index">
              <Book :bookDetail="book" :author="bookData.data.book.author.name " />
            </div>
          </div>
       </div>

       <div class="pt-10 pb-20">
            <Heading title="Related Genre Books"/>
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10 pt-10">
            <div v-for="(book, index) in bookData.data.related_genre" :key="index">
              <Book :bookDetail="book" :author="bookData.data.book.author.name " />
            </div>
          </div>
       </div>
    </div>
    <div v-else>
            <Loader />
        </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { book } from '../use/book'
import { onMounted, watch } from 'vue'
import Button from '../components/comman/Button.vue';
import Loader from '../components/Loader.vue'
import Heading from '../components/comman/Heading.vue';
import Book from '../components/comman/Cards/Book.vue';

const { loading, bookData, getBook } = book();

const route = useRoute()

onMounted(async () => {
    await getBook(route.params.slug)
})

watch(
        async() => route.params.slug,
        async() => {
            await getBook(route.params.slug) 
        }
    ); 
</script>
