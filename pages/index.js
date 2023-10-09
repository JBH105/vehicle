import GlobalContext from "@/Context/AuthProvider";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";

export default function Index() {
  const router = useRouter();
  const { user } = useContext(GlobalContext);

  useEffect(() => {
    if (user) {
      router.push("/vehicle/vehiclelist");
    } else {
      router.push("/auth/login");
    }
  }, [router]);

  return null;
}
