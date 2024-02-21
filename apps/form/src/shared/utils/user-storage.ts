"use client";
import { localStorageUtilsGenerator } from "./local-storage-utils-generator";

export const userInfoStorage = localStorageUtilsGenerator<{
  email: string;
  phoneNumber: string;
}>("user_info");
