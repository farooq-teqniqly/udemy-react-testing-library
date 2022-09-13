import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SummaryForm from "../SummaryForm";

const setup = (jsx) => {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
};

const getPopover = () => {
  return screen.queryByText(/no ice cream will actually be delivered/i);
};

describe("SummaryForm", () => {
  let testSetup = {};

  beforeEach(() => {
    testSetup = setup(<SummaryForm />);
  });

  describe("When loaded", () => {
    test("Then the Terms and Conditions checkbox is not checked", () => {
      const cb = screen.getByRole("checkbox");
      expect(cb).not.toBeChecked();
    });

    test("And the Confirm Order button is disabled", () => {
      const button = screen.getByRole("button");
      expect(button).toBeDisabled();
    });

    test("And the popover is hidden", () => {
      expect(getPopover()).not.toBeInTheDocument();
    });
  });

  describe("When the Terms and Conditions checkbox is checked", () => {
    test("Then the Confirm Order button is enabled", async () => {
      const cb = screen.getByRole("checkbox");
      await testSetup.user.click(cb);
      const button = screen.getByRole("button");
      expect(button).toBeEnabled();
    });

    test("And checking the checkbox again disables the button", async () => {
      const cb = screen.getByRole("checkbox");
      await testSetup.user.click(cb);
      await testSetup.user.click(cb);
      const button = screen.getByRole("button");
      expect(button).toBeDisabled();
    });
  });

  describe("When the user hovers over the terms and conditions text", () => {
    test("Then the popover appears", async () => {
      const termsAndConditions = screen.getByText(/terms and conditions/i);
      await testSetup.user.hover(termsAndConditions);
      expect(getPopover()).toBeInTheDocument();
    });

    test("And unhovering removes the popover", async () => {
      const termsAndConditions = screen.getByText(/terms and conditions/i);
      await testSetup.user.hover(termsAndConditions);
      await testSetup.user.unhover(termsAndConditions);
      expect(getPopover()).not.toBeInTheDocument();
    });
  });
});
