import { render, screen } from "@testing-library/react";
import Home from './Home';

describe('Testing Home Component', () => {
    it('renders component with text', () => {
        render(<Home />)
        expect(screen.getByText(/Hello! You are welcome to Home Page!/i)).toBeInTheDocument();
    })
})