import { useEffect, useState } from "react";
import { getCategory, putCategory, deleteCategory } from "../Api/categoryApi";
import CategoryModel from "../Models/CategoryModel";
// import {Props} from "../PageComponents/CategoryList";

// export default function Category(props: Props) {
//     useEffect((): void => {
//         getCategory().then((resp): void => {
//         props.setCategories(resp.data);
//       });
//     }, []);
  
  
//     export const showDeleteConfirm = () => {
     
       
//           deleteCategory(props.item.id).then((resp) => {
//             getCategory().then((resp): void => {
//               props.setCategories(resp.data);
//             });
//           });
     
//         }
      
      
//     };
  
//     export const onRename = (): void => {
//       let model: CategoryModel = props.item;
//       model.name = categoryName;
//       putCategory(model).then(function (response): void {
//         getCategory().then((resp): void => {
//           props.setCategories(resp.data);
//         });
//       });
//       setShowEditCategory(!showEditCategory);
//     };
// }