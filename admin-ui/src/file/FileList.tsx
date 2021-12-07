import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { RECEIVING_TITLE_FIELD } from "../receiving/ReceivingTitle";

export const FileList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Files"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="CloudinaryUrl" source="cloudinaryUrl" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <ReferenceField
          label="Receiving"
          source="receiving.id"
          reference="Receiving"
        >
          <TextField source={RECEIVING_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="SytemName" source="sytemName" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
