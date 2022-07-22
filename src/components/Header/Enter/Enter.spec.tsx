import { render } from '@testing-library/react'
import { Enter } from '.'

test("Enter renders correctly", () => {
    const { getByText } = render(<Enter />)

    expect(getByText("Login")).toBeInTheDocument()
    expect(getByText('Register')).toBeInTheDocument()
})