import {$host} from "./index";

export const createCompany = async(company) => {
    const {data} = await $host.post('api/company', company,{withCredentials: true})
    return data
}

export const readCompany = async() => {
    const {data} = await $host.get('api/company',{withCredentials: true})
    return data
}

export const readCompanyById = async(id) => {
    const {data} = await $host.get('api/company/' + id, {withCredentials: true})
    return data
}