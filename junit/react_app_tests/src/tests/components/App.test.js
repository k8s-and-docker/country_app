import {fireEvent, render, screen} from '@testing-library/react';
import App from "../../components/App";
import userEvent from "@testing-library/user-event";

describe("Test main component", () => {

  beforeEach(() => {})

  test("Validate elements test", () => {
    render(<App />);
    const helloWorld = screen.getByText(/hello world/i);
    const button = screen.getByRole('button');
    const input = screen.getByPlaceholderText(/write here/i);
    expect(helloWorld).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(input).toMatchSnapshot();
  });

  test("Validate that the element is not exists", () => {
      render(<App />);
      const notExistingElement = screen.queryByText(/i am no existing/i)
      expect(notExistingElement).toBeNull();
  });

  test("Async test", async () => {
    render(<App />);
    const result = await screen.findByText(/not null value/i);
    expect(result).toBeInTheDocument();
  })

  test("check button event", () => {
    render(<App />)

    const btn = screen.getByTestId("status-btn");

    expect(screen.queryByTestId("status-block")).toBeNull();

    fireEvent.click(btn);
    expect(screen.getByTestId("status-block")).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId("status-block")).toBeNull();


  })

  test ("check input event", () => {
    render(<App />);
    const input = screen.getByTestId("input-target");
    const text = "This is a text from input";
    expect(screen.queryByTestId("main-title")).toBeNull();
    fireEvent.input(input, {
      target: {
        value: text
      }
    });
    expect(screen.getByTestId("main-title")).toBeInTheDocument();
    expect(screen.getByTestId("main-title")).toContainHTML(text);

  })

  test("check user event", () => {
    render(<App />);
    const input = screen.getByTestId("input-target");
    const text = "This is a text from input";
    expect(screen.queryByTestId("main-title")).toBeNull();
    userEvent.type(input, text);
    expect(screen.getByTestId("main-title")).toContainHTML(text);
  })
})
