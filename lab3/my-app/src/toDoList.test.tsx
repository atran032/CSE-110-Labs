import { render, screen, fireEvent } from "@testing-library/react";
import { ToDoList } from "./toDoList";

describe ("required tests", () => {
    test("read", () => {
        render(<ToDoList />);
        
    });

    test("count", () => {
        render(<ToDoList />);

    });
});