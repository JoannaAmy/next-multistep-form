"use client";

import { useContext } from "react";
import { TextField } from "@mui/material";
import { FormContext } from "../context/FormContext";

export default function CustomTextField({
  value: fieldName,
  label,
  select = false,
  children,
  rows,
}) {
  const { userData, handleChange } = useContext(FormContext);
  const fieldValue = userData[fieldName] || "";

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone) => /^(\+?234|0)[789][01]\d{8}$/.test(phone);

  let error = false;
  let helperText = "";

  if (fieldName === "email") {
    error = fieldValue && !isValidEmail(fieldValue);
    helperText = error ? "Enter a valid email" : "";
  }

  if (fieldName === "phone") {
    error = fieldValue && !isValidPhone(fieldValue);
    helperText = error ? "Enter a valid Nigerian phone number" : "";
  }

  if (fieldName === "reason") {
    const textLength = fieldValue.trim().length;
    error = textLength > 0 && textLength < 100;
    helperText = error ? `Minimum of 100 characters (currently ${textLength})` : "";
  }

  return (
    <div>
    <TextField
    className="textarea"
      name={fieldName}
      label={label}
      required
      multiline={Boolean(rows)}
      rows={rows}
      select={select}
      margin="normal"
      variant="outlined"
      color="secondary"
      value={fieldValue}
      onChange={(e) => handleChange(fieldName, e.target.value)}
      error={error}
      helperText={helperText}
    >
      {select ? children : null}
    </TextField>
    </div>

  );
}
