import { api } from "../api";

export default {
  index: () => api.$get(`home/index`),
  search: (data) => api.$get(`search?page${data.page}&search=${data.search}`),
};
