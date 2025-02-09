"use client";

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-md mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              {isLogin ? "Welcome Back" : "Create Account"}
            </h2>
            <p className="mt-2 text-gray-600">
              {isLogin
                ? "Sign in to access your account"
                : "Register to join our platform"}
            </p>
          </div>

          <form className="space-y-6">
            {!isLogin && (
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#2C7C41] focus:border-[#2C7C41] bg-white text-black"
                  placeholder="John Doe"
                />
              </div>
            )}

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-[#2C7C41] focus:border-[#2C7C41] bg-white text-white"
                  placeholder="john@example.com"
                />
                <Mail className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-[#2C7C41] focus:border-[#2C7C41] bg-white text-white"
                  placeholder="••••••••"
                />
                <Lock className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
                <button
                  type="button"
                  className="absolute right-1 top-0.5 bg-white"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-4 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            {isLogin && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 text-[#2C7C41] focus:ring-[#2C7C41] border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-[#2C7C41] hover:text-[#15b5d8]"
                >
                  Forgot password?
                </a>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-[#2C7C41] text-white py-2  px-4 rounded-md hover:bg-[#15b5d8] transition-colors"
            >
              {isLogin ? "Sign In" : "Create Account"}
            </button>
          </form>

          <div className="mt-3">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  {isLogin
                    ? "New to our platform?"
                    : "Already have an account?"}
                </span>
              </div>
            </div>

            <button
              className="w-full bg-[#2C7C41] text-white mt-2 py-2 px-4 rounded-md hover:bg-[#15b5d8] transition-colors"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Create an account" : "Sign in to your account"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
