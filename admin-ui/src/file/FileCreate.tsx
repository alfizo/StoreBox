import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ReceivingTitle } from "../receiving/ReceivingTitle";

export const FileCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="CloudinaryUrl" source="cloudinaryUrl" />
        <TextInput label="Name" source="name" />
        <ReferenceInput
          source="receiving.id"
          reference="Receiving"
          label="Receiving"
        >
          <SelectInput optionText={ReceivingTitle} />
        </ReferenceInput>
        <TextInput label="SytemName" source="sytemName" />
      </SimpleForm>
    </Create>
  );
};
