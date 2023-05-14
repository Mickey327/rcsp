import {$host} from "./index";

export const createCategory = async(category) => {
    const {data} = await $host.post('api/category',category,{withCredentials: true})
    return data
}

export const readCategory = async() => {
    const {data} = await $host.get('api/category',{withCredentials: true})
    return data
}

export const readCategoryById = async(id) => {
    const {data} = await $host.get('api/category/' + id, {withCredentials: true})
    return data
}
