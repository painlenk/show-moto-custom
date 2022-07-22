import { render } from "@testing-library/react";
import { Nav } from ".";

test("Nav render correctly", () => {
    const { getByText } = render(<Nav />)

    expect(getByText("News")).toBeInTheDocument();
    expect(getByText("Calendar")).toBeInTheDocument();
    expect(getByText("Contacts")).toBeInTheDocument();
    expect(getByText("WorkShop")).toBeInTheDocument();

})