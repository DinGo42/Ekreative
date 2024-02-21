"use client";
import { localStorageUtilsGenerator } from "./local-storage-utils-generator";

export const userAuthorizedStore = localStorageUtilsGenerator<boolean>("is_authorized");
