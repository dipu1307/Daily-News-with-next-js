'use client';


import { TextField,Label, Input, FieldError,Description, Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const LoginPage = () => {

const handleLoginFun = (e)=>{
  e.preventDefault();

  //1st way show login info
  const email = e.target.email.value;
  const password = e.target.password.value;
  console.log({ email, password });

  /**
     * 2nd way to show login info
     * const formData = new FormData(e.currentTarget);
  const email = formData.get('email');
  const password = formData.get('password');
     */
}

    return (
      <div className="container mx-auto h-[80vh] flex items-center justify-center bg-slate-100 my-10">
        <div className=" rounded-xl bg-white p-4">
          <h2 className="font-bold text-center my-10 text-2xl ">Login your account</h2>
          <form className='space-y-10' onSubmit={handleLoginFun}>
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label>Email</Label>
              <Input placeholder="john@example.com" />
              <FieldError />
            </TextField>
            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }
                return null;
              }}
            >
              <Label>Password</Label>
              <Input placeholder="Enter your password" />
              <Description>
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>
              <FieldError />
            </TextField>
            <Button fullWidth type='submit' className=' bg-slate-800'>Login</Button>
          </form>
          <div>
            <p className='text-center mt-4'>Don't have an account?<Link href={`/signup`} className='text-blue-500'> Register</Link></p>
          </div>
        </div>
      </div>
    );
};

export default LoginPage;