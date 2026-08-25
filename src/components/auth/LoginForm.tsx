"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {EyeOff,Eye} from "lucide-react";
import {useState} from "react";
import {useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {signInWithEmail} from "@/services/auth/auth.service";

import {loginSchema, type LoginFormData} from "@/lib/validations/auth";

import {useRouter} from "next/navigation";

export default function LoginForm() {
    const [showPassword,setShowPassword] = useState(false);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState<string | null>(null);

    const router = useRouter();


    const {register,handleSubmit,formState:{errors},} = 
      useForm<LoginFormData>({
        resolver: zodResolver(loginSchema)
      })


      const onSubmit = async (data: LoginFormData) => {
        setIsLoading(true);
        setError("");

        try{
          await signInWithEmail(data.email,data.password)

          router.push("/dashboard")
          router.refresh();
          // console.log("LOGIN SUCCESS:", result);
        }catch(error){
          // console.error("LOGIN ERROR:", error);
          setError(
            error instanceof Error ? error.message : "Unable to sing in.Please try again",
          );
        }finally{
          setIsLoading(false);
        }
      }






  return (
    <div className="space-y-5">
      <Button
        type="button"
        variant="outline"
        className="w-full cursor-pointer"
      >
        Continue with Google
      </Button>

      <div className="flex items-center gap-3">
        <Separator className="flex-1" />

        <span className="text-xs text-muted-foreground">
          OR
        </span>

        <Separator className="flex-1" />
      </div>

      <form 
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="email">Email address</Label>

          <Input
            id="email"
            // type="email"
            type="email"
            placeholder="kyliejenner@gmail.com"
            autoComplete="email"
            {...register("email")}
          />

          {errors.email && (
            <p className="text-xs text-destructive">
              {errors.email.message}
            </p>
          )}






        </div>

        <div className="relative">
            <Input 
                id="password"
                // name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                autoComplete="password"
                className="pr-10"
                {...register("password")}/>

                {errors.password && (
                  <p className="text-xs text-destructive">
                    {errors.password.message}
                  </p>
                )}

            <button
                type="button"
                onClick={()=>setShowPassword((value)=>!value)}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-muted-foreground hover:text=foreground">
                
                {showPassword ? (
                    <EyeOff className="size-4"/>
                ): (
                    <Eye className="size-4"/>
                )}

            </button>

        </div>

        <div className="flex justify-end">
          <Link
            href="/forgot-password"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Forgot password?
          </Link>
        </div>

        {error && (
          <p className="rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">
            {error}
          </p>
        )}

        <Button
          type="submit"
          className="w-full cursor-pointer"
          disabled={isLoading}
        >
          {
            isLoading ? "Signing in..." : "Sign in"
          }
        </Button>
      </form>
    </div>
  );
}