import {$host} from "./index";

export const readOrder = async(searchParams) => {
    const {data} = await $host.get('api/order',{withCredentials: true, params: searchParams})
    return data
}

export const readOrderById = async(id) => {
    const {data} = await $host.get('api/order/' + id,{withCredentials: true})
    return data
}

export const createOrder = async() => {
    const {data} = await $host.post('api/order', {},{withCredentials: true})
    return data
}

export const updateOrderProduct = async(productID, orderID, amount) => {
    const {data} = await $host.post('api/cart',{quantity: amount},{withCredentials: true, params: {productID: productID, orderID: orderID}})
    return data
}

export const removeProductOrder = async(productID, orderID) => {
    const {data} = await $host.delete('api/cart', {withCredentials: true, params: {productID: productID, orderID: orderID}})
    return data
}

export const processOrder = async() => {
    const {data} = await $host.put('api/order',{status: "Ожидает оплаты", is_arranged: true} ,{withCredentials: true})
    return data
}