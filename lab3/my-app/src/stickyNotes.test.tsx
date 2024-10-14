import { render, screen, fireEvent } from "@testing-library/react";
import { StickyNotes } from "./stickyNotes";
import exp from "constants";

describe("Create StickyNote", () => {
  test("renders create note form", () => {
    render(<StickyNotes />);

    const createNoteButton = screen.getByText("Create Note");
    expect(createNoteButton).toBeInTheDocument();
  });

  test("creates a new note", () => {
    render(<StickyNotes />);

// Please make sure your sticky note has a title and content input field with the following placeholders.
    const createNoteTitleInput = screen.getByPlaceholderText("Note Title");
    const createNoteContentTextarea =
      screen.getByPlaceholderText("Note Content");
    const createNoteButton = screen.getByText("Create Note");

    fireEvent.change(createNoteTitleInput, { target: { value: "New Note" } });
    fireEvent.change(createNoteContentTextarea, {
      target: { value: "Note Content" },
    });
    fireEvent.click(createNoteButton);

    const newNoteTitle = screen.getByText("New Note");
    const newNoteContent = screen.getByText("Note Content");

    expect(newNoteTitle).toBeInTheDocument();
    expect(newNoteContent).toBeInTheDocument();
  });
});

describe("required tests", () => {
    test("read", () => {
        render(<StickyNotes />);
        const note1 = screen.getByText("test note 1 title");
        const note2 = screen.getByText("test note 2 title");
        const note3 = screen.getByText("test note 3 title");
        const note4 = screen.getByText("test note 4 title");
        const note5 = screen.getByText("test note 5 title");
        const note6 = screen.getByText("test note 6 title");

        expect(note1).toBeInTheDocument();
        expect(note2).toBeInTheDocument();
        expect(note3).toBeInTheDocument();
        expect(note4).toBeInTheDocument();
        expect(note5).toBeInTheDocument();
        expect(note6).toBeInTheDocument();
    });

    test("update", () => {
        render(<StickyNotes />);
        const createNoteTitleInput = screen.getByPlaceholderText("Note Title");
        const createNoteContentTextarea =
          screen.getByPlaceholderText("Note Content");
        const createNoteButton = screen.getByText("Create Note");
    
        fireEvent.change(createNoteTitleInput, { target: { value: "New Note" } });
        fireEvent.change(createNoteContentTextarea, {
          target: { value: "Note Content" },
        });
        fireEvent.click(createNoteButton);

        const newNoteTitle = screen.getByText("New Note");
        const newNoteContent = screen.getByText("Note Content");

        fireEvent.click(newNoteTitle);
        fireEvent.change(newNoteTitle, { target: { value: "Hello" } });
        fireEvent.click(newNoteContent)
        fireEvent.change(newNoteContent, {
          target: { value: "World" },
        });

        const Hello = screen.getByText("Hello");
        const World = screen.getByText("World");

        expect(Hello).toBeInTheDocument();
        expect(World).toBeInTheDocument();
    });

    test("delete", () => {
        render(<StickyNotes />);
        const createNoteTitleInput = screen.getByPlaceholderText("Note Title");
        const createNoteContentTextarea =
          screen.getByPlaceholderText("Note Content");
        const createNoteButton = screen.getByText("Create Note");
    
        fireEvent.change(createNoteTitleInput, { target: { value: "New Note" } });
        fireEvent.change(createNoteContentTextarea, {
          target: { value: "Note Content" },
        });
        fireEvent.click(createNoteButton);

        const newNoteTitle = screen.getByText("New Note");
        const newNoteContent = screen.getByText("Note Content");

        const deleteButton = screen.getByText("X");
        fireEvent.click(deleteButton);

        expect(newNoteTitle).not.toBeInTheDocument();
        expect(newNoteTitle).not.toBeInTheDocument();
    });
});