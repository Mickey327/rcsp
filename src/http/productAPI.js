import {$host} from "./index";

export const createProduct = async(product) => {
    const {data} = await $host.post('api/product',product,{withCredentials: true})
    return data
}

export const readProduct = async(searchParams) => {
    const {data} = await $host.get('api/product',{withCredentials: true, params: searchParams})
    return data
}

export const readProductComments = async (searchParams) => {
    const {data} = await $host.get('api/comment',{withCredentials: true, params: searchParams})
    return data
}

export const writeProductComment = async (message, searchParams) => {
    const {data} = await $host.post('api/comment', message,{withCredentials: true, params: searchParams})
    return data
}

export const readProductById = async(id, searchParams) => {
    const {data} = await $host.get('api/product/' + id, {withCredentials: true, params: searchParams})
    return data
}