import {fireEvent, screen} from '@testing-library/react';
import {beforeEach, describe, expect, test} from "vitest";

import {userEvent} from "@testing-library/user-event";
import {UtilityTests} from "test_utils";

describe("Test main component", () => {

  beforeEach(() => {})

  test("Validate elements test", () => {
    UtilityTests.customizedRender(null, "/");

    const helloWorld = screen.getByText(/hello world/i);
    const button = screen.getByRole('button');
    const input = screen.getByPlaceholderText(/write here/i);
    expect(helloWorld).toBeDefined();
    expect(button).toBeDefined();
    expect(input).toMatchSnapshot();
  });

  test("Validate that the element is not exists", () => {
    UtilityTests.customizedRender(null, "/");

      const notExistingElement = screen.queryByText(/i am not existing/i)
      expect(notExistingElement).toBeNull();
  });

  test("Async test", async () => {
    UtilityTests.customizedRender(null, "/");

    const result = await screen.findByText(/not null value/i);
    expect(result).toBeDefined();
  })

  test("check button event", () => {
    UtilityTests.customizedRender(null, "/");

    const btn = screen.getByTestId("status-btn");

    expect(screen.queryByTestId("status-block")).toBeNull();

    fireEvent.click(btn);
    expect(screen.getByTestId("status-block")).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId("status-block")).toBeNull();

  })

  test ("check input event", () => {
    UtilityTests.customizedRender(null, "/");

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

  test("check user event", async () => {
    UtilityTests.customizedRender(null, "/");

    const input = screen.getByTestId("input-target");
    const text = "This is a text from input";
    expect(screen.queryByTestId("main-title")).toBeNull();

    const user = userEvent.setup();
    await user.type(input, text);

    expect(screen.getByTestId("main-title")).toContainHTML(text);
  })
})
