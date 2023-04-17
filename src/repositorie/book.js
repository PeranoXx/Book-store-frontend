import { api } from "../api";

export default {
    getAllBooks: (data) => api.$get(`book?page=${data.page}&limit=${data.limit}&field=${data.field}&dir=${data.dir}&author=${data.author}&genre=${data.genre}&search=${data.search}&pub_date_from=${data.pub_date_from}&pub_date_to=${data.pub_date_to}`),
    getBook:(data) => api.$get(`book/${data}`),
};
