import { reactive, ref } from "vue";

import repositories from "../repositorie";
const resData = ref({})
const searchData = ref({})
const loading = ref(false);
const params = reactive({
  page : 1,
  search : '',
})

export const home = () => {
  const main = async () => {
    try {
      loading.value = true;
      const res = await repositories.home.index();
      resData.value = res
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  };

  const search = async () => {
    try {
      const res = await repositories.home.search(params);
      searchData.value = res
    } catch (error) {
      console.log(error);
    } 
  };

  return {
    loading,
    params,
    resData,
    searchData,
    main,
    search,
  };
};
