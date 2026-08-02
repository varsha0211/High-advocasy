import api from "../lib/axios";

export const testimonialApi = {
  create: async (data) => {
    const { data: response } = await api.post("/", data);
    return response.result;
  },

  getAll: async (status) => {
    const { data: response } = await api.get("/", {
      params: status ? { status } : {},
    });
    return response.result;
  },

  updateStatus: async (id, status) => {
    const { data: response } = await api.patch(`/status/${id}`, {
      status,
    });
    return response.result;
  },
};
