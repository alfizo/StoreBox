import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Available Stock" source="availableStock" />
        <TextInput label="Brand" source="brand" />
        <NumberInput label="Cost Price" source="costPrice" />
        <TextInput label="Description" multiline source="description" />
        <div />
        <TextInput label="Item Code" source="itemCode" />
        <NumberInput label="Item Price" source="itemPrice" />
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="Reorder Level" source="reorderLevel" />
        <TextInput label="Size" source="size" />
      </SimpleForm>
    </Create>
  );
};
