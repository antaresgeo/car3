import axios from "axios";

const api_rest = axios.create({
    baseURL: "https://reqres.in",
    timeout: 2000,
    headers: {'B': 'foobar'}
});

api_rest.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
        'A': 'foobar'
    }
    return config
});

api_rest.interceptors.response.use((respose) => {
    const { config, data, headers, request, status, statusText } = respose;
    if(config.url === "/api/users" && config.method === "get"){
        respose.data.data = respose?.data?.data?.map((user: any, index: number) => {
            user.app_id = index;
            return user;
        })
    }
    return respose;
})


export const list = (pagina: number = 1) =>
    api_rest.get("/api/users", { params: { page: pagina } });

export const create = (name: string, job: string) =>
    api_rest.post("/api/users", { name, job });



