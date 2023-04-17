import { httpClient } from "./http";

export const api = {
    request: httpClient.request,
    get: httpClient.get,
    delete: httpClient.delete,
    post: httpClient.post,
    put: httpClient.put,
    patch: httpClient.patch,
    $request: async (confi) => (await httpClient.request(config)).data,
    $get: async (url, config) => (await httpClient.get(url, config)).data,
    $delete: async (url, config) => (await httpClient.delete(url, config)).data,
    $post: async (url, data, config) => (await httpClient.post(url, data, config)).data,
    $put: async (url, data, config) => (await httpClient.put(url, data, config)).data,
    $patch: async (url, data, config) => (await httpClient.patch(url, data, config)).data,
};
