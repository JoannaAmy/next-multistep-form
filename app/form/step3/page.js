"use client";

import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import CustomTextField from "../../../components/CustomTextField";
import { useContext } from "react";
import { FormContext } from "../../../context/FormContext";

export default function ThirdStep() {
  const router = useRouter();
  const { userData, resetForm } = useContext(FormContext);

  const requiredFields = ["reason"];

  const isFormIncomplete = () => {
    if (userData.reason?.trim().length < 100) {
      return true;
    }

    return requiredFields.some(
      (field) => !userData[field] || userData[field.toString().trim() === ""]
    );
  };
  const isValidEmail = (email = "") => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone = "") =>
    /^(\+?234|0|\(?234\)?|\(?0\)?)[-.\s]?([789][01])\d[-.\s]?\d{3}[-.\s]?\d{4}$/.test(
      phone
    );

  const isValidReason = (reason = "") => reason.trim().length >= 100;

  const emailError = !isValidEmail(userData.email);
  const phoneError = !isValidPhone(userData.phone);
  const reasonError = !isValidReason(userData.reason);

  const hasErrors = emailError || phoneError || reasonError;

  const handleFixErrors = () => {
    if (emailError || phoneError) {
      return router.push("/form/step1");
    }
    if (reasonError) {
      return router.push("/form/step3");
    }
  };

  return (
    <>
      <CustomTextField
        value="reason"
        label="Why do you need this scholarship?"
        rows={12}
      />

      <div className="button-three">
        <div className="top-btn">

        <Button
          variant="contained"
          color="secondary"
          onClick={() => router.push("/form/step2")}
        >
          Back
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            handleFixErrors();
          }}
          disabled={!hasErrors}
        >
          Fix Errors
        </Button>
        </div>

        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            router.push("/finish");
            resetForm();
          }}
          disabled={isFormIncomplete() || hasErrors}
        >
          Submit
        </Button>
      </div>
    </>
  );
}
