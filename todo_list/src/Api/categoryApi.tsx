//import { getRenderPropValue } from "antd/lib/_util/getRenderPropValue";
import axios from "axios";
import { getTextOfJSDocComment } from "typescript";
import CategoryModel from "../Models/CategoryModel";

const baseURL: string = "https://localhost:5001/";

export async function getCaregoty(
  callback: React.Dispatch<React.SetStateAction<CategoryModel[]>>
): Promise<void> {
  await axios
    .get(baseURL + "category/getCategories")
    .then(function (response): void {
      callback(response.data);
    
    })
    .catch(function (error): void {
      console.log(error);
    });
}

export async function postCategory(todoModel: object): Promise<void> {
  await axios
    .post(baseURL + "category/postCategory", todoModel)
    .then(function (response): void {
      console.log(response);
      window.location.reload();
    })
    .catch(function (error): void {
      console.log(error);
    });
}

export async function putCategory(id: number, categoryModel: CategoryModel): Promise<void> {
  await axios
    .put(baseURL + `category/putCategory?id=${id}`, categoryModel)
    .then(function (response): void {
      console.log(response);
      window.location.reload();
    })
    .catch(function (error): void {
      console.log(error);
    });
}

export async function deleteCategory(id: number): Promise<void> {
  console.log(baseURL + `category/deleteCategory?id=${id}`);
  await axios
    .delete(baseURL + `category/deleteCategory?id=${id}`)
    .then(function (response): void {
      console.log(response);
      window.location.reload();
    })
    .catch(function (error): void {
      console.log(error);
    });
}