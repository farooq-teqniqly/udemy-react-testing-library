import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

const getButton = () => {
  return screen.getByRole("button", { name: "Change to blue" });
};

const getCheckbox = () => {
  return screen.getByRole("checkbox", { name: "Disable button" });
};

test("initally, checkbox not checked and button enabled", () => {
  render(<App />);

  const checkbox = getCheckbox();
  expect(checkbox).not.toBeChecked();

  const button = getButton();
  expect(button).toHaveStyle({ backgroundColor: "red" });
  expect(button).toBeEnabled();
});

test("button turns blue when clicked", () => {
  render(<App />);

  const button = getButton();
  fireEvent.click(button);

  expect(button).toHaveStyle({ backgroundColor: "blue" });
  expect(button.textContent).toBe("Change to red");
});

test("when checkbox checked, button is disabled", () => {
  render(<App />);

  const checkbox = getCheckbox();
  fireEvent.click(checkbox);

  const button = getButton();
  expect(button).not.toBeEnabled();
});

test("when checkbox checked, button is gray", () => {
  render(<App />);

  const checkbox = getCheckbox();
  fireEvent.click(checkbox);

  const button = getButton();
  expect(button).toHaveStyle({ backgroundColor: "gray" });
});

test("button is gray, then checkbox checked, button is red", () => {
  render(<App />);

  const checkbox = getCheckbox();
  fireEvent.click(checkbox);
  fireEvent.click(checkbox);

  const button = getButton();
  expect(button).toHaveStyle({ backgroundColor: "red" });
});

test("button clicked, then checkbox checked, then checkbox undhecked, button is blue", () => {
  render(<App />);

  const button = getButton();
  fireEvent.click(button);

  const checkbox = getCheckbox();
  fireEvent.click(checkbox);
  fireEvent.click(checkbox);

  expect(button).toHaveStyle({ backgroundColor: "blue" });
});
