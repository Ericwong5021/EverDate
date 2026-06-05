import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const anniversaryApi = {
  create: (data: {
    title: string;
    date: string;
    type: string;
    partnerName: string;
    description?: string;
  }) => api.post("/anniversaries", data),
  getById: (id: string) => api.get(`/anniversaries/${id}`),
  update: (
    id: string,
    data: Partial<{ title: string; date: string; type: string; partnerName: string }>,
  ) => api.put(`/anniversaries/${id}`, data),
  delete: (id: string) => api.delete(`/anniversaries/${id}`),
};

export const emailApi = {
  preview: (id: string) => api.get(`/emails/${id}/preview`),
  update: (id: string, data: Partial<{ subject: string; body: string; photos: string[] }>) =>
    api.put(`/emails/${id}`, data),
  schedule: (id: string, sendAt: string) => api.post(`/emails/${id}/schedule`, { sendAt }),
};

export const aiApi = {
  generateGreeting: (data: { anniversaryId: string; style: string; story?: string }) =>
    api.post("/ai/greeting", data),
};

export const paymentApi = {
  createOrder: (data: { anniversaryId: string; method: "wechat" | "alipay" }) =>
    api.post("/payments/orders", data),
  getOrderStatus: (id: string) => api.get(`/payments/orders/${id}`),
};

export default api;
