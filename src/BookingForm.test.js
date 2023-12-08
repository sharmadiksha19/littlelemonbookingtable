import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("renders BookingForm component", () => {
  render(<BookingForm />);
  const nameLabel = screen.getByLabelText("Name:");
  const emailLabel = screen.getByLabelText("Email:");
  const dateLabel = screen.getByLabelText("Date:");
  const timeLabel = screen.getByLabelText("Time:");
  const submitButton = screen.getByRole("button", { name: "Submit" });

  expect(nameLabel).toBeInTheDocument();
  expect(emailLabel).toBeInTheDocument();
  expect(dateLabel).toBeInTheDocument();
  expect(timeLabel).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test("submits form with valid data", () => {
  render(<BookingForm />);
  const nameInput = screen.getByLabelText("Name:");
  const emailInput = screen.getByLabelText("Email:");
  const dateInput = screen.getByLabelText("Date:");
  const timeInput = screen.getByLabelText("Time:");
  const submitButton = screen.getByRole("button", { name: "Submit" });

  fireEvent.change(nameInput, { target: { value: "John Doe" } });
  fireEvent.change(emailInput, { target: { value: "john@example.com" } });
  fireEvent.change(dateInput, { target: { value: "2023-12-25" } });
  fireEvent.change(timeInput, { target: { value: "15:30" } });

  fireEvent.click(submitButton);

  // Add assertions based on your expected behavior after form submission
});

// Add more tests as needed
