//import { getRenderPropValue } from "antd/lib/_util/getRenderPropValue";
import axios, { AxiosResponse } from "axios";
import { getTextOfJSDocComment } from "typescript";
import CategoryModel from "../Models/CategoryModel";

const baseURL: string = "https://localhost:5001/";

export async function getCategory(
 // callback: React.Dispatch<React.SetStateAction<CategoryModel[]>>
): Promise<AxiosResponse<any, any>> {
  return await axios.get(baseURL + "category/getCategories");
  // await axios
  //   .get(baseURL + "category/getCategories")
  //   .then(function (response): void {
  //     callback(response.data);
    
  //   })
  //   .catch(function (error): void {
  //     console.log(error);
  //   });
}

export async function postCategory(categoryModel: object): Promise<void> {
  return axios.post(baseURL + "category/postCategory", categoryModel);
  //await axios
 
    // .post(baseURL + "category/postCategory", todoModel)
    // .then(function (response): void {
    //   console.log(response);
    // //  window.location.reload();
    // })
    // .catch(function (error): void {
    //   console.log(error);
    // });
}

export async function putCategory(categoryModel: CategoryModel): Promise<void> {
    return await axios.put(baseURL + `category/putCategory`, categoryModel)
  // await axios
  //   .put(baseURL + `category/putCategory`, categoryModel)
  //   .then(function (response): void {
  //     console.log(response);
  //   //  window.location.reload();
  //   })
  //   .catch(function (error): void {
  //     console.log(error);
  //   });
}

export async function deleteCategory(id: number): Promise<void> {
  return await axios.delete(baseURL + `category/deleteCategory?id=${id}`);
  // console.log(baseURL + `category/deleteCategory?id=${id}`);
  // await axios
  //   .delete(baseURL + `category/deleteCategory?id=${id}`)
  //   .then(function (response): void {
  //     console.log(response);
  //   //  window.location.reload();
  //   })
  //   .catch(function (error): void {
  //     console.log(error);
  //   });
}