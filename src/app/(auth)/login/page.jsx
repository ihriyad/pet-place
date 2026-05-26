"use client";

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
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation"; // CHANGED: Swapped direct redirect for useRouter
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    try {
      const { data, error } = await authClient.signIn.email({
        email: user.email,
        password: user.password,
      });

      if (data) {
        toast.success("Login Success");
        router.push("/");
      }

      if (error) {
        toast.error(error.message || "Login failed");
        setIsLoading(false);
      }
    } catch (err) {
      toast.error("An unexpected error occurred");
      setIsLoading(false);
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
            Welcome!
          </h1>
          <p className="text-foreground-400 text-base">
            Sign in or create an account to get started
          </p>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
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
                if (value.length < 8)
                  return "Password must be at least 8 characters";
                if (!/[A-Z]/.test(value))
                  return "Password must contain at least one uppercase letter";
                if (!/[0-9]/.test(value))
                  return "Password must contain at least one number";
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
          </div>

          <Button
            type="submit"
            radius="full"
            variant="outline"
            size="sm"
            className="w-full text-warning h-12 font-semibold text-base transition-transform active:scale-[0.98] mt-2"
            isLoading={isLoading}
            disabled={isLoading}
          >
            Sign In
          </Button>
        </form>

        <div className="flex items-center gap-2 my-4">
          <Separator className="flex-1" />
          <p className="text-sm text-gray-500">OR</p>
          <Separator className="flex-1" />
        </div>

        <Button
          onClick={handleGoogleSignin}
          disabled={isLoading}
          type="button" // Fixed type definition
          radius="full"
          size="sm"
          variant="outline"
          className="w-full text-warning h-12 transition-transform active:scale-[0.98]"
        >
          <FcGoogle className="text-lg" /> Continue with Google
        </Button>

        <p className="text-xs text-foreground-400 text-center mt-4 leading-relaxed">
          By signing in, you acknowledge that you understand and accept our{" "}
          <Link
            href="/login"
            className="text-foreground-500 underline hover:text-foreground"
          >
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link
            href="/login"
            className="text-foreground-500 underline hover:text-foreground"
          >
            Terms of Use
          </Link>
        </p>

        <div className="mt-8 p-5 bg-default-50 border border-divider rounded-xl">
          <p className="text-sm text-foreground-500 leading-relaxed">
            Sign into your PetPlace account to view pet details, add your pet,
            adopt another pet and many more!
          </p>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-foreground-500">
            Do not have an account?{" "}
            <Link
              href="/register"
              className="text-warning font-semibold hover:underline"
            >
              Create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
