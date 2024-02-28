// http://localhost:8080/soccer_field/getlist
import fetcher from "./fetcher";


export const getListField = async (page) => {
  try {
    const response = await fetcher.post("/soccer_field/getlist", { "page": page, "search": "" });
    return response.data?.data?.content;
  } catch (error) {
    throw error.response.data?.content;
  }
};

export const getTypeField = async (type) => {
  try {
    const response = await fetcher.post("/soccer_field/gettype", { "type": type });
    return response.data?.data?.content;
  } catch (error) {
    throw error.response.data?.content;
  }
};


export const getListInfo = async (id) => {
  try {
    const response = await fetcher.post("/soccer_field/getinfo", { id: id });
    return response.data?.data?.content;
  } catch (error) {
    throw error.response.data?.content;
  }
};


export const bookingField = async (payload) => {
  try {
    const response = await fetcher.post("/soccer_booking/insert", payload);
    return response.data?.data?.content;
  } catch (error) {
    throw error.response.data?.content;
  }
};

export const getBookById = async (field_id) => {
  try {
    const response = await fetcher.post("/soccer_booking/getinfo", { field_id: field_id });
    return response.data?.data?.content;
  } catch (error) {
    throw error.response.data?.content;
  }
};

