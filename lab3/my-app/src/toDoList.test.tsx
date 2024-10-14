import { render, screen, fireEvent } from "@testing-library/react";
import { ToDoList } from "./toDoList";

describe ("required tests", () => {
    test("read", () => {
        render(<ToDoList />);
        const apples = screen.getByText("Apples")
        const bananas = screen.getByText("Bananas")

        expect(apples).toBeInTheDocument();
        expect(bananas).toBeInTheDocument();
    });

    test("count", () => {
        
    });
});