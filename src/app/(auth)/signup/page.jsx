'use client';

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
      password: '',
      terms: false,
    },
  });

  const handleSignUpFunc = (data) => {
    console.log(data);
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