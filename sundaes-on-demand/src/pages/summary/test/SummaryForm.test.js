import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SummaryForm from "../SummaryForm";

const setup = (jsx) => {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
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
});
