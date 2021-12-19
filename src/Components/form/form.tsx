import { FC } from "react";
import { useForm } from "react-hook-form";
import { ICat } from "../../Interfaces/cat";
import { IForm } from "../../Interfaces/form";
import { message } from "../../Utils/message";
import { Button } from "../button/button";
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
        registerProps={{ required: message.required, maxLength: message.maxLength  }}
        inputAttr={{ maxLength: 50 }}
      />
            <Input
        labelText="Breed"
        name="breed"
        useFormProps={rest}
        registerProps={{ required: message.required, maxLength: message.maxLength  }}
        inputAttr={{ maxLength: 50 }}
      />
                  <Input
        labelText="Age"
        name="age"
        type="number"
        useFormProps={rest}
        registerProps={{ required: message.required }}
        inputAttr={{ max: 100, min: 0 }}

      />
                  <Input
        labelText="Description"
        name="description"
        useFormProps={rest}
        registerProps={{ maxLength: message.maxLength }}
        inputAttr={{ maxLength: 200 }}
      />
                  <Input
        labelText="Location"
        name="location"
        useFormProps={rest}
        registerProps={{ required: message.required, maxLength: message.maxLength }}
        inputAttr={{ maxLength: 50 }}
      />
      <Button type='submit' isDisabled={false} text="Submit"/>
      {/* <input type="submit" /> */}
    </form>
  );
};
