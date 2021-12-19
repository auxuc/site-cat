import { FC } from "react";
import { useForm } from "react-hook-form";
import { ICat } from "../../Interfaces/cat";
import { IForm } from "../../Interfaces/form";
import { Input } from "../input/input";

const defaultValues = {
  name: "",
  breed: "",
  age: 0,
  description: "",
  location: ""
};

export const Form: FC<IForm> = (props) => {
  const onSubmit = (data: ICat) => props.setData(data);
  const { handleSubmit, getValues, setValue, ...rest } = useForm({defaultValues});

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        labelText="Name"
        name="name"
        useFormProps={rest}
        registerProps={{ required: true }}
        inputAttr={{ maxLength: 50 }}
      />
            <Input
        labelText="Breed"
        name="breed"
        useFormProps={rest}
        registerProps={{ required: true }}
        inputAttr={{ maxLength: 50 }}
      />
                  <Input
        labelText="Age"
        name="age"
        type="number"
        useFormProps={rest}
        registerProps={{ required: true }}
        inputAttr={{ maxLength: 3 }}
      />
                  <Input
        labelText="Description"
        name="description"
        useFormProps={rest}
        registerProps={{ required: false }}
        inputAttr={{ maxLength: 200 }}
      />
                  <Input
        labelText="Location"
        name="location"
        useFormProps={rest}
        registerProps={{ required: true }}
        inputAttr={{ maxLength: 50 }}
      />
      <input type="submit" />
    </form>
  );
};
