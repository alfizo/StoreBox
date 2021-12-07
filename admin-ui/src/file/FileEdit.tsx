import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ReceivingTitle } from "../receiving/ReceivingTitle";

export const FileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
