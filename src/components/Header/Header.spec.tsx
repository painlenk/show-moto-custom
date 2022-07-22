import { render } from "@testing-library/react";
import { Header } from ".";

jest.mock("../../assets/images/LogoImage", () => {
  return "img";
});

test("Header renders correctly", () => {
  const { getByText } = render(<Header />);

  expect(getByText("News")).toBeInTheDocument();
  expect(getByText("Calendar")).toBeInTheDocument();
  expect(getByText("Contacts")).toBeInTheDocument();
  expect(getByText("WorkShop")).toBeInTheDocument();
  expect(getByText("Login")).toBeInTheDocument();
  expect(getByText("Register")).toBeInTheDocument();
});
