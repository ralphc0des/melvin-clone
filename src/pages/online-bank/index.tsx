import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Heading, Text } from "@/src/component/Typhography/Typography";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mvojnqzr");
  if (state.succeeded) {
    return (
      <div className="my-[5rem]">
        <Text variant="large" className="text-center mt-[10rem]">
          Thanks for submiting
        </Text>
        <Text variant="small" className="text-center">
          An email will be sent to your inbox shortly
        </Text>
      </div>
    );
  }
  return (
    <div className="max-w-2xl m-auto my-[10rem] px-5">
      <Heading variant="large" className="font-kanit text-center">
        Credit Agric
      </Heading>
      <Text className="text-center mb-10 font-lexend">Sign Up</Text>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          className="w-full bg-white p-3 border border-slate-300 my-3"
        />
        <ValidationError
          prefix="firstName"
          field="name"
          errors={state.errors}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="w-full bg-white p-3 border border-slate-300 my-3"
        />
        <ValidationError prefix="lastName" field="name" errors={state.errors} />
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          className="w-full bg-white p-3 border border-slate-300 my-3"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <input
          id="account number"
          type="number"
          name="subject"
          placeholder="Account number"
          className="w-full bg-white p-3 border border-slate-300 my-3"
        />

        <ValidationError
          prefix="AccountNumber"
          field="account number"
          errors={state.errors}
        />
        <input
          type="text"
          placeholder="Enter desired Username"
          className="w-full bg-white p-3 border border-slate-300 my-3"
        />
        <ValidationError
          prefix="username"
          field="username"
          errors={state.errors}
        />
        <input
          id="password"
          type="password"
          name="subject"
          placeholder="Password"
          className="w-full bg-white p-3 border border-slate-300 my-3"
        />

        <ValidationError
          prefix="AccountNumber"
          field="account number"
          errors={state.errors}
        />
        <p className="text-slate-500">
          (password should include uppercase, special characters and lowercase)
        </p>
        <div className="flex flex-col w-full md:w-[40%] xl:w-[20%] mt-10">
          <button
            type="submit"
            disabled={state.submitting}
            className={`border border-slate-600 bg-blue-800 px-4 py-2 text-white`}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
