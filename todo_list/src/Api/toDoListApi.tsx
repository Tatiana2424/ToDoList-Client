//import { getRenderPropValue } from "antd/lib/_util/getRenderPropValue";
import axios from "axios";
import { getTextOfJSDocComment } from "typescript";
import ToDoListModel from "../Models/ToDoListModel";

const baseURL: string = "https://localhost:44309/";

export async function getToDoList(
  callback: React.Dispatch<React.SetStateAction<ToDoListModel[]>>
): Promise<void> {
  await axios
    .get(baseURL + "todolist")
    .then(function (response): void {
      callback(response.data);
    })
    .catch(function (error): void {
      console.log(error);
    });
}

export async function postToDoList(todoModel: object): Promise<void> {
  await axios
    .post(baseURL + "todolist", todoModel)
    .then(function (response): void {
      console.log(response);
    })
    .catch(function (error): void {
      console.log(error);
    });
}

export async function deleteToDoList(id: number): Promise<void> {
  console.log(baseURL + `todolist?id=${id}`);
  await axios
    .delete(baseURL + `todolist?id=${id}`)
    .then(function (response): void {
      console.log(response);
    })
    .catch(function (error): void {
      console.log(error);
    });
}