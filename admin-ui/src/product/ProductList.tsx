import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ProductList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Products"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Available Stock" source="availableStock" />
        <TextField label="Brand" source="brand" />
        <TextField label="Cost Price" source="costPrice" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Image" source="image" />
        <TextField label="Item Code" source="itemCode" />
        <TextField label="Item Price" source="itemPrice" />
        <TextField label="Name" source="name" />
        <TextField label="Reorder Level" source="reorderLevel" />
        <TextField label="Size" source="size" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
