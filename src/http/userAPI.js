import {$host} from "./index";

export const registration = async (email, password) => {
    const response = await $host.post('api/users/register', {email, password, role: "user"})
    return response
}

export const checkHello = async () => {
    const response = await $host.get('hello', {})
    return response
}