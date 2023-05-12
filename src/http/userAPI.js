import {$host} from "./index";
import jwtDecode from "jwt-decode";

export const registration = async (email, password) => {
    const {data} = await $host.post('api/register', {email, password, role: "user"})
    return data
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/login', {email, password, role: "user"},{withCredentials: true})
    return jwtDecode(data.token)
}

export const check = async () => {
    const {data} = await $host.get('api/user',{withCredentials: true})
    return jwtDecode(data.token)
}

export const logout = async () => {
    const {data} = await $host.get('api/logout',{withCredentials: true})
    return data
}
