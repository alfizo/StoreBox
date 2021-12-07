import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { RECEIVING_TITLE_FIELD } from "../receiving/ReceivingTitle";

export const FileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
