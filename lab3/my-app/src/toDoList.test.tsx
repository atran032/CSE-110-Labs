import { render, screen, fireEvent } from "@testing-library/react";
import { ToDoList } from "./toDoList";
import { dummyGroceryList } from "./constant";

describe ("required tests", () => {
    test("read", () => {
        render(<ToDoList />);
        const apples = screen.getByText("Apples")
        const bananas = screen.getByText("Bananas")

        expect(apples).toBeInTheDocument();
        expect(bananas).toBeInTheDocument();
    });

    test("count", () => {
        render(<ToDoList />);
        const count0 = screen.getByText("Items bought: 0")
        expect(count0).toBeInTheDocument();

        const applesCheckbox = screen.getByTestId(`checkbox-${dummyGroceryList[0].name}`)
        fireEvent.click(applesCheckbox);
        const count1 = screen.getByText("Items bought: 1")
        expect(count1).toBeInTheDocument();

        const bananasCheckbox = screen.getByTestId(`checkbox-${dummyGroceryList[1].name}`)
        fireEvent.click(bananasCheckbox);
        const count2 = screen.getByText("Items bought: 2")
        expect(count2).toBeInTheDocument();
    });
});