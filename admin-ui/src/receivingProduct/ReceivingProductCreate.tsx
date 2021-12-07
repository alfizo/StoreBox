import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { ProductTitle } from "../product/ProductTitle";

export const ReceivingProductCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="dateReceived" source="dateReceived" />
        <TextInput label="description" multiline source="description" />
        <ReferenceInput source="product.id" reference="Product" label="product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="quantity" source="quantity" />
      </SimpleForm>
    </Create>
  );
};
