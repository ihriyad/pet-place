"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Input,
  Button,
  TextField,
  Label,
  FieldError,
  Description,
  Separator,
} from "@heroui/react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { FaGoogle } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    // console.log(user);

    const { data, error } = await authClient.signUp.email({
      name: user.name,
      email: user.email,
      password: user.password,
      image: user.image,
    });
    if (data) {
      alert("SignUp Success");
      redirect("/");
    }
    if (error) {
      alert("sign Up failed");
    }
  };
  const handleGoogleSignin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="flex items-center justify-center py-2 bg-default-50/50">
      <div className="w-full max-w-[540px] bg-background rounded-sm p-8 md:p-12">
        <div className="text-left mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-2">
            Create Account
          </h1>
          <p className="text-foreground-400 text-base">
            Join PetPlace today and find your perfect companion
          </p>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <TextField isRequired name="name" type="text">
              <Label>Full Name</Label>
              <Input placeholder="John Doe" />
              <FieldError />
            </TextField>

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

            <TextField name="image" type="url">
              <Label>Profile Image URL (Optional)</Label>
              <Input placeholder="https://example.com/avatar.jpg" />
              <FieldError />
            </TextField>

            <TextField
              isRequired
              name="password"
              type={showPassword ? "text" : "password"}
              onChange={(value) => setPasswordValue(value)}
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
              <div className="relative flex items-center">
                <Input placeholder="Enter your password" className="w-full" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 text-xl text-foreground-400 hover:text-foreground transition-colors z-10 cursor-pointer"
                >
                  {showPassword ? <HiEyeOff /> : <HiEye />}
                </button>
              </div>
              <Description>
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>
              <FieldError />
            </TextField>

            <TextField
              isRequired
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              validate={(value) => {
                if (value !== passwordValue) {
                  return "Passwords do not match";
                }
                return null;
              }}
            >
              <Label>Confirm Password</Label>
              <div className="relative flex items-center">
                <Input
                  placeholder="Re-enter your password"
                  className="w-full"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 text-xl text-foreground-400 hover:text-foreground transition-colors z-10 cursor-pointer"
                >
                  {showConfirmPassword ? <HiEyeOff /> : <HiEye />}
                </button>
              </div>
              <FieldError />
            </TextField>
          </div>

          <Button
            type="submit"
            radius="full"
            size="sm"
            className="w-full bg-warning text-gray-800 font-semibold text-base h-12 shadow-sm transition-transform active:scale-[0.98] mt-2"
          >
            Sign Up
          </Button>
        </form>

        <div className="flex items-center gap-2 my-2">
          <Separator className="flex-1" />

          <p className="text-sm text-gray-500">OR</p>

          <Separator className="flex-1" />
        </div>
        <Button
          onClick={handleGoogleSignin}
          type="submit"
          radius="full"
          size="sm"
          className="w-full bg-warning text-gray-800 h-12 shadow-sm transition-transform active:scale-[0.98] mt-2"
        >
          <FaGoogle /> Continue with Google
        </Button>

        <p className="text-xs text-foreground-400 text-center mt-4 leading-relaxed">
          By signing up, you acknowledge that you understand and accept our{" "}
          <Link
            href="/privacy"
            className="text-foreground-500 underline hover:text-foreground"
          >
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link
            href="/terms"
            className="text-foreground-500 underline hover:text-foreground"
          >
            Terms of Use
          </Link>
          .
        </p>

        <div className="text-center mt-8">
          <p className="text-sm text-foreground-500">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-warning font-semibold hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
