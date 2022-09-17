import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API
});

export const signUp = async (data) => api.post("/api/user/sign-up", data);

export const signIn = async (data) => api.post("/user/sign-in", data);

export const createTest = async(data, config) => api.post("/test/submit", data, config);

export const gatherTestByDisciplines = async(config) => api.get("/test/discipline", config);

export const gatherTestByTeachers = async (config) => api.get("/test/teacher", config);

// export const getTeacherRelation = async(config)=> api.get("")