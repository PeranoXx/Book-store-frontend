<template>
  <div class="min-h-screen container mx-auto text-primary" v-if="!loading">
    <div>
      <div class="lg:h-[600px] border-b border-primary lg:flex items-center justify-around">
        <div class="text-7xl px-4 tracking leading-[80px] font-bold">
          <p class="pb-4">Find Your Best Friend.</p>
          <p class="text-2xl lg:w-[600px] xl:w-[700px]">
            Get Your New Book Collection. Fill your house with lots of books and experience. The
            content of the book are its different chapters and sections, usually shown at the
            begining of the book.
          </p>
        </div>
        <div>
          <img src="../assets/images/books.png" loading="lazy" alt="books" class="mx-auto" />
        </div>
      </div>
    </div>

    <div class="py-14 border-b border-primary">
      <div class="relative">
        <Heading title="Popular Authors" />
        <div class="hidden md:block md:absolute right-0 top-4">
          <RouterLink :to="{name: 'books'}" class="flex gap-x-2 font-semibold">View All
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6 font-bold">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </RouterLink>
        </div>
      </div>
      <div class="py-10 px-4 xl:px-0" v-if="resData.data && resData.data.popular_author.length > 0">
        <div v-for="(item, index) in resData.data.popular_author" :key="index">
          <div class="pb-16">
            <p>Author : <strong> {{ item.name }} </strong></p>
            <p>Email : <strong> {{ item.email }} </strong></p>

            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10 pt-4" >
              <div v-for="(book, bookIndex) in item.books" :key="bookIndex">
                <!-- <Bookcard v-bind:book="book" /> -->
                <Book :bookDetail="book" :author="item.name" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="py-10">
        <p class="text-center">No data found</p>
      </div>
    </div>

    <div class="py-8 border-b border-primary">
      <div class="relative">
        <Heading title="Fetured Books" />
        <div class="absolute right-0 top-4">
          <RouterLink :to="{name: 'books'}" class="flex gap-x-2 font-semibold">View All
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6 font-bold">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </RouterLink>
        </div>
      </div>
      <div class="py-10 px-4 xl:px-0" v-if="resData.data && resData.data.popular_books.length > 0">
        <div class="pb-16">
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10 pt-4">
            <div v-for="(book, index) in resData.data.popular_books" :key="index">
              <Book :bookDetail="book" :author="book.author.name" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-[#0c0808] fixed w-full top-0 z-10" :class="loading == false ? 'slide-up' : 'h-screen'">
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Heading from '../components/comman/Heading.vue'
import Book from '../components/comman/Cards/Book.vue';
import { home } from '../use/home'

const { loading, resData, main } = home()

onMounted(async () => {
  await main()
})
</script>

<style>
.book {
  box-shadow: rgba(0, 0, 0, 0.4) 5px 5px 10px;
}

.slide-up {
  animation-name: slideUp;
  animation-duration: 0.6s;
  animation-timing-function: cubic-bezier(0.75, 0.13, 0.21, 0.78);
}

@keyframes slideUp {
  0% {
    height: 100vh;
  }

  100% {
    height: 0px;
    display: none;
  }
}
</style>
