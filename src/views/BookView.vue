<template>
  <div class="container mx-auto px-4">
    <div class="grid xl:grid-cols-5 gap-x-16" v-if="(!loading) || (resData.data)">
      <div class="col-span-1" v-if="resData.data">
        <div class="flex flex-col gap-y-10">
        <Filter title="Authors" :data="resData.data.authors" @handleInput="handleAuthorInput()" />
        <Filter title="Genre" :data="resData.data.genre" @handleInput="handleGenreInput()" />
      </div>
      </div>
      <div class="col-span-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 pt-4 gap-y-16" v-if="bookData && bookData.length > 0">
            <div v-for="(book, index) in bookData" :key="index">
              <Book :bookDetail="book" :author="book.author.name" />
            </div>
        </div>
        <div class="text-center py-10 flex justify-center">
        <Button v-if="!loading && resData.data && resData.data.books.current_page != resData.data.books.last_page" title="Load More" :loading="loading" :disabled="loading" @click="loadMore()" />
        <div v-else><Loader /> </div>
      </div>
      </div>
    </div>
    <div v-else>
      <Loader />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { book } from '../use/book'
import Book from '../components/comman/Cards/Book.vue';
import Button from '../components/comman/Button.vue';
import Filter from '../components/comman/Filter.vue';
import Loader from '../components/Loader.vue';

const { loading, resData, params, getAllBooks } = book()
const bookData = ref([])
const authorArray = ref([])
const genreArray = ref([])

onMounted(async () => {
  params.page = 1
  await getAllBooks(params)
  bookData.value = resData.value.data.books.data
})

const loadMore = async()=>{
  params.page = params.page + 1;
  await getAllBooks(params)
  bookData.value.push(...resData.value.data.books.data)
}

const handleAuthorInput = async() =>{
  

  if(event.target.checked){
    authorArray.value.push(event.target.value)
  }
  else{
    authorArray.value = authorArray.value.filter(x => x != event.target.value)
  }
  params.author = authorArray.value.join(',')
  await getAllBooks(params)
  bookData.value = resData.value.data.books.data
}

const handleGenreInput = async() => {
  if(event.target.checked){
    genreArray.value.push(event.target.value)
  }
  else{
    genreArray.value = genreArray.value.filter(x => x != event.target.value)
  }
  params.genre = genreArray.value.join(',')
  await getAllBooks(params)
  bookData.value = resData.value.data.books.data
}
</script>

<style></style>
