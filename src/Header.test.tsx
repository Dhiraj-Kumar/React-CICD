import { render, screen } from "@testing-library/react";
import Header from './Header';
import { createRoot } from "react-dom/client";
import { act } from "react";
import { Provider } from 'react-redux'
import store from './redux/store.ts'
import { BrowserRouter } from "react-router";

describe('Testing Header Component', () => {
    let element: any;

    beforeEach(() => {
        element = document.createElement("div");
        document.body.appendChild(element);
    });

    it('renders component with text', () => {
        render(<Provider store={store}>
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        </Provider>)
        expect(screen.getByText(/Auth Demo/i)).toBeInTheDocument();
    })

    it("Header component should have navbar-brand class", () => {
        render(<Provider store={store}>
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        </Provider>)
        expect(screen.getByTestId("brand")).toHaveClass("navbar-brand");
    })

    it("Header should have navbar with 7 hyperlinks", () => {
        act(()=>{
            createRoot(element).render(<Provider store={store}>
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        </Provider>);
        })
        const count = element.querySelectorAll("a").length;
        expect(count).toBe(7);
    });

})