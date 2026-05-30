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
  Spinner,
} from "@heroui/react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { Lobster } from "next/font/google";
import Image from "next/image";
const logoFont = Lobster({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lobster",
});
const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    try {
      const { data, error } = await authClient.signUp.email({
        name: user.name,
        email: user.email,
        password: user.password,
        image: user.image,
      });

      if (data) {
        toast.success("SignUp Success");
        router.push("/");
        router.refresh();
      }
      if (error) {
        toast.warning(error.message || "sign Up failed");
        setIsLoading(false);
      }
    } catch (err) {
      alert("An unexpected error occurred");
      setIsLoading(false);
    }
  };

  const handleGoogleSignin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="flex items-center justify-center  bg-default-50/50">
      <div className="w-full max-w-[540px] bg-background rounded-sm p-8 md:p-12">
        <div className="flex items-center  p-2 rounded-2xl">
                        <Image
                          src={"/logo2.png"}
                          height={30}
                          width={30}
                          alt="Logo"
                          className="text-warning"
                        ></Image>
                        <p className={`${logoFont.className} uppercase text-lg font-bold`}>
                          pet<span className="text-warning">place</span>
                        </p>
                      </div>
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
              <Input placeholder="John Doe" disabled={isLoading} />
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
              <Input placeholder="john@example.com" disabled={isLoading} />
              <FieldError />
            </TextField>

            <TextField name="image" type="url">
              <Label>Profile Image URL (Optional)</Label>
              <Input
                placeholder="https://example.com/avatar.jpg"
                disabled={isLoading}
              />
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
                <Input
                  placeholder="Enter your password"
                  className="w-full"
                  disabled={isLoading}
                />
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
                  disabled={isLoading}
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
            variant="outline"
            type="submit"
            radius="full"
            size="sm"
            // isLoading={isLoading}
            // disabled={isLoading}
            className="w-full text-warning font-semibold text-base h-12 transition-transform active:scale-[0.98] mt-2"
          >
            {isLoading ? (
                          <>
                            Creating your account ... <Spinner color="warning" />
                          </>
                        ) : (
                          <>Register</>
                        )}
          </Button>
        </form>

        <div className="flex items-center gap-2 my-4">
          <Separator className="flex-1" />
          <p className="text-sm text-gray-500">OR</p>
          <Separator className="flex-1" />
        </div>

        <Button
          onClick={handleGoogleSignin}
          type="button"
          variant="outline"
          radius="full"
          size="sm"
          disabled={isLoading}
          className="w-full h-12 text-warning transition-transform active:scale-[0.98]"
        >
          <FcGoogle /> Continue with Google
        </Button>

        <p className="text-xs text-foreground-400 text-center mt-4 leading-relaxed">
          By signing up, you acknowledge that you understand and accept our{" "}
          <Link
            href="/register"
            className="text-foreground-500 underline hover:text-foreground"
          >
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link
            href="/register"
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
