import { render, screen, fireEvent } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

describe("SummaryForm", () => {
  describe("When loaded", () => {
    test("Then the Terms and Conditions checkbox is not checked", () => {
      render(<SummaryForm />);
      const cb = screen.getByRole("checkbox");
      expect(cb).not.toBeChecked();
    });

    test("And the Confirm Order button is disabled", () => {
      render(<SummaryForm />);
      const button = screen.getByRole("button");
      expect(button).toBeDisabled();
    });
  });

  describe("When the Terms and Conditions checkbox is checked", () => {
    test("Then the Confirm Order button is enabled", () => {
      render(<SummaryForm />);
      const cb = screen.getByRole("checkbox");
      fireEvent.click(cb);
      const button = screen.getByRole("button");
      expect(button).toBeEnabled();
    });

    test("And checking the checkbox again disables the button", () => {
      render(<SummaryForm />);
      const cb = screen.getByRole("checkbox");
      fireEvent.click(cb);
      fireEvent.click(cb);
      const button = screen.getByRole("button");
      expect(button).toBeDisabled();
    });
  });
});
