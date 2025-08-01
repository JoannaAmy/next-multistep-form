"use client";

import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import CustomTextField from "../../../components/CustomTextField";
import { useContext } from "react";
import { FormContext } from "../../../context/FormContext";

export default function FirstStep() {
  const router = useRouter();
  const { userData } = useContext(FormContext);

  const requiredFields = ["firstname", "lastname", "email", "phone"];

  const isFormIncomplete = () => {
    return requiredFields.some(
      (field) => !userData[field] || userData[field.toString().trim() === ""]
    );
  };
  return (
    <>
      <CustomTextField value="firstname" label="First name" />
      <CustomTextField value="lastname" label="Last name" />
      <CustomTextField value="email" label="Email" />
      <CustomTextField value="phone" label="Phone" />

      <Button
        variant="contained"
        style={{ marginTop: "10px" }}
        color="primary"
        onClick={() => router.push("/form/step2")}
        disabled={isFormIncomplete()}
      >
        Next
      </Button>
    </>
  );
}
