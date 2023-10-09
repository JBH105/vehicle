import GlobalContext from "@/Context/AuthProvider";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      router.push("/vehicle/vehiclelist");
    } else {
      router.push("/auth/login");
    }
  }, [router]);

  return null;
}
