'use client';

import { authClient } from '@/lib/auth-client';
import { Button, Checkbox, Form, Input, Label, TextField } from '@heroui/react';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      photo: '',
      password: '',
      terms: false,
    },
  });

  const handleSignUpFunc = async(formData) => {
    console.log(formData);
    const {name, email, password,photo}= formData;
    console.log(name, email, photo);

    const { data, error } = await authClient.signUp.email({
      name: name, // required, The name of the user.
      email: email, // required, The email address of the user.
      password: password, // required, The password of the user. It should be at least 8 characters long and max 128 by default.
      image: photo, // An optional profile image of the user.
      callbackURL: "/", // An optional URL to redirect to after the user signs up.
    });
    console.log(data, error);

    if(error){
      alert(error.message);
    }
    if(data){
      alert("Signup Successful");
    }

  };

  return (
    <div className="container mx-auto flex items-center justify-center min-h-[80vh] bg-slate-100 px-4 py-10">
      <div className="w-full max-w-md rounded-xl bg-white p-6 space-y-4">
        <h2 className="text-center text-2xl font-semibold">
          Register your Account
        </h2>

        <Form
          className="space-y-5"
          validationBehavior="aria"
          onSubmit={handleSubmit(handleSignUpFunc)}
        >
          <TextField className="w-full">
            <Label>Your Name</Label>
            <Input
              className="w-full"
              placeholder="Enter your name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </TextField>

          <TextField className="w-full">
            <Label>Email</Label>
            <Input
              className="w-full"
              type="email"
              placeholder="Enter your email address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </TextField>
          <TextField>
            <Label>Photo URL</Label>
            <Input
              className="w-full"
              type="url"
              placeholder="Enter your photo url"
              {...register("photo")}
            ></Input>
          </TextField>

          <TextField className="w-full">
            <Label>Password</Label>
            <Input
              className="w-full"
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </TextField>

          <Button fullWidth type="submit">
            Register Now
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignUpPage;