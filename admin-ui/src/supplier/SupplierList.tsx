import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ADDRESS_TITLE_FIELD } from "../address/AddressTitle";

export const SupplierList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Suppliers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="account" source="account" />
        <ReferenceField label="Address" source="address.id" reference="Address">
          <TextField source={ADDRESS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="companyRegistration" source="companyRegistration" />
        <TextField label="contactNumber" source="contactNumber" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
