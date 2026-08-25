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

import {loginSchema, type LoginFormData} from "@/lib/validations/auth";

export default function LoginForm() {
    const [showPassword,setShowPassword] = useState(false);


    const {register,handleSubmit,formState:{errors},} = 
      useForm<LoginFormData>({
        resolver: zodResolver(loginSchema)
      })


      const onSubmit = (data: LoginFormData) => {
        console.log(data);
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

        <Button
          type="submit"
          className="w-full cursor-pointer"
        >
          Sign in
        </Button>
      </form>
    </div>
  );
}