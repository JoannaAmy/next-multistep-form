"use client";

import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import { useContext } from "react";
import { FormContext } from "../../context/FormContext";

export default function FirstStep() {
  const router = useRouter();
  const { resetForm } = useContext(FormContext);

  return (
    <>
      <div className="form-card-finish">
        <h4>Your response has been submitted</h4>

        <Button
          onClick={() => {
            router.push("/form/step1");
            resetForm();
          }}
        >
          Submit Another response
        </Button>
      </div>
    </>
  );
}
