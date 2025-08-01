'use client';

import StepperUI from "../../components/stepperUI";

export default function FormLayout({ children }) {
  return (
    <div className="form-card">
      <h3>Scholarship Form For University Students</h3>
      <StepperUI />
      <p><span>NOTE:</span> Please fill every section correctly</p>

      {children}
    </div>
  );
}
