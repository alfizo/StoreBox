import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { RECEIVING_TITLE_FIELD } from "./ReceivingTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ReceivingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="DateReceived" source="dateReceived" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="OrderNumber" source="orderNumber" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField reference="File" target="ReceivingId" label="Files">
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
