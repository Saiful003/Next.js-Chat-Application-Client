import React, { useEffect, useState } from "react";
import FormHolder from "../../components/Form/FormHolder";
import CustomInput from "../../components/Form/Input";
import LogSignTemp from "../../components/Form/LogSignTemp";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import { useRouter } from "next/router";
import Select from "react-select";
import { colors, rooms } from "../../utils/Data";
import { useRoom } from "../../hooks/useRoom";

interface Inputs {
  username: string;
  color: string;
}

function Login() {
  const {
    handleSubmit,
    register,
    formState: {
      errors: { username },
    },
  } = useForm<Inputs>();

  const { handleAddUser, user } = useAuth();
  const router = useRouter();
  const [profileColor, setProfileColor] = useState("");
  const [room, setRoom] = useState("");
  const { callAddRoom } = useRoom();

  // onSubmit function
  const onSubmit: SubmitHandler<Inputs> = ({ username }) => {
    handleAddUser(username, profileColor);
    callAddRoom(room);
  };

  useEffect(() => {
    if (user) router.push("/");
  });

  const handleSelectChange1 = ({ label }: any) => {
    setProfileColor(label);
  };
  const handleSelectChange2 = ({ label }: any) => {
    setRoom(label);
  };

  return (
    <LogSignTemp role="Welcome">
      <FormHolder>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CustomInput
            label="Username"
            placeholder="Enter your username"
            type="text"
            {...register("username", { required: "Username is required." })}
            isError={username?.type === "required"}
            errorMessage={username?.message!}
          />

          {/* Select Here */}
          <div className="flex flex-col gap-5 mt-5">
            <Select options={colors} onChange={handleSelectChange1} />
            <Select onChange={handleSelectChange2} options={rooms} />
          </div>

          <button
            type="submit"
            className="w-full bg-green-400 mt-4 py-1 text-white rounded-md text-lg"
          >
            Submit
          </button>
        </form>
      </FormHolder>
    </LogSignTemp>
  );
}

export default Login;
