"use client";

import { useRouter } from "next/navigation";
import { Button, MenuItem } from "@mui/material";
import CustomTextField from "../../../components/CustomTextField";
import { useContext } from "react";
import { FormContext } from "../../../context/FormContext";

export default function SecondStep() {
  const router = useRouter();
  const { userData } = useContext(FormContext);

  const cgpaClasses = [
    { value: "first_class", label: "First Class" },
    { value: "second_upper", label: "Second Class Upper" },
    { value: "second_lower", label: "Second Class Lower" },
    { value: "third_class", label: "Third Class" },
    { value: "pass", label: "Pass" },
  ];

  const level = [
    { value: "100_level", label: "100 Level" },
    { value: "200_level", label: "200 Level" },
    { value: "300_level", label: "300 Level" },
    { value: "400_level", label: "400 Level" },
    { value: "500_level", label: "500 Level" },
  ];

 
  const requiredFields = ["university", "course", "level", "cgpa"];

  const isFormIncomplete = () => {
    return requiredFields.some(
      (field) => !userData[field] || userData[field.toString().trim() === ""]
    );
  };

  return (
    <>
      <CustomTextField value="university" label="College/Univerity " />

      <CustomTextField value="course" label="Course of Study" />

      <CustomTextField
        value="level"
        label="Select current level"
        select={true}
      >
        {level.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </CustomTextField>

      <CustomTextField value="cgpa" label="Select CGPA" select={true}>
        {cgpaClasses.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </CustomTextField>

      <div className="button">
        <Button
        variant="contained"
        color="secondary"
        onClick={() => router.push("/form/step1")}
      >
        Back
      </Button>

      <Button
        variant="contained"
        color="primary"
        onClick={() => router.push("/form/step3")}
        disabled={isFormIncomplete()}
      >
        Next
      </Button>
      </div>
    </>
  );
}
