"use client";

import React from "react";
import { Stepper, Step, StepLabel } from "@mui/material";
import { usePathname } from "next/navigation";

const steps = ["Personal Info", "Education Info", "More Info"];
const stepIndex = {
  "/form/step1": 0,
  "/form/step2": 1,
  "/form/step3": 2,
};

export default function StepperUI() {
  const pathname = usePathname();
  const activeStep = stepIndex[pathname] ?? 0;

  return (
    <Stepper
      // style={{ width: "70%", marginBottom: "3rem", placeSelf: 'center' }}
      className="stepper"
      activeStep={activeStep}
      orientation="horizontal"
      alternativeLabel
    >
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}
