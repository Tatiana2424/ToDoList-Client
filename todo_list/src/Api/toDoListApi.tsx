//import { getRenderPropValue } from "antd/lib/_util/getRenderPropValue";
import axios, { AxiosResponse } from "axios";
import { getTextOfJSDocComment } from "typescript";
import ToDoListModel from "../Models/ToDoListModel";
//import { Link, useLocation } from "react-router-dom";
const baseURL: string = "https://localhost:5001/";
//const location = useLocation();
export async function getToDoList(
//  callback: React.Dispatch<React.SetStateAction<ToDoListModel[]>>
): Promise<AxiosResponse<any, any>> {
  return await axios.get(baseURL + "todolist");
  // await axios
  //   .get(baseURL + "todolist")
  //   .then(function (response): void {
  //     callback(response.data);
      
  //   })
  //   .catch(function (error): void {
  //     console.log(error);
  //   });
}

export async function getToDoListByCategoryId(
  categoryId: number,
 // callback: React.Dispatch<React.SetStateAction<ToDoListModel[]>>
): Promise<AxiosResponse<any, any>> {
  return await axios.get(baseURL + `todolist/getToDoListByCategoryId?categoryId=${categoryId}`)
  // await axios
  //   .get(baseURL + `todolist/getToDoListByCategoryId?categoryId=${categoryId}`)
  //   .then(function (response): void {
  //     callback(response.data);
   
  //   })
  //   .catch(function (error): void {
  //     console.log(error);
  //   });
}

export async function postToDoList(todoModel: object): Promise<void> {
  return  await axios.post(baseURL + "todolist/postToDoList", todoModel)
  // await axios
  //   .post(baseURL + "todolist/postToDoList", todoModel)
  //   .then(function (response): void {
  //     console.log(response);
  //     window.location.reload();
  //   })
  //   .catch(function (error): void {
  //     console.log(error);
  //   });
}

export async function putToDoList(todolistModel: ToDoListModel): Promise<void> {
  return await axios.put(baseURL + `todolist/putToDoList`, todolistModel)
  // await axios
  //   .put(baseURL + `todolist/putToDoList`, todolistModel)
  //   .then(function (response): void {
  //     console.log(response);
  //     window.location.reload();
  //   })
  //   .catch(function (error): void {
  //     console.log(error);
  //   });
}

export async function deleteToDoList(id: number): Promise<void> {
  return await axios.delete(baseURL + `todolist/deleteToDoList?id=${id}`)
  // console.log(baseURL + `todolist/deleteToDoList?id=${id}`);
  // await axios
  //   .delete(baseURL + `todolist/deleteToDoList?id=${id}`)
  //   .then(function (response): void {
  //     console.log(response);
  //     window.location.reload();
  //   })
  //   .catch(function (error): void {
  //     console.log(error);
  //   });
}