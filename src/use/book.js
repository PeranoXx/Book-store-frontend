import { reactive, ref } from "vue";

import repositories from "../repositorie";
const params = reactive({
    page : 1,
    limit : 12,
    field : '',
    dir : '',
    author : '',
    genre : '',
    search : '',
    pub_date_from : '',
    pub_date_to : '',
})
const resData = ref({})
const bookData = ref([]);
const loading = ref(false);

export const book = () => {
  const getAllBooks = async () => {
    try {
      loading.value = true;
      const res = await repositories.book.getAllBooks(params);
      resData.value = res
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  };

  const getBook = async (data) => {
    try {
      loading.value = true;
      const res = await repositories.book.getBook(data);
      bookData.value = res
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  };

  return {
    loading,
    params,
    resData,
    bookData,
    getAllBooks,
    getBook
  };
};
