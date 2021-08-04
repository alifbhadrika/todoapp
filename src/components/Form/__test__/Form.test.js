import { render, screen, fireEvent } from "@testing-library/react";
import Form from "../Form";
import App from "../../../App";

const mockedTextHandler = jest.fn();
const mockedSubmitHandler = jest.fn();

describe("Form test", () => {
  it("shows input form", () => {
    render(<Form />);
    const form = screen.getByPlaceholderText("Mau ngapain?");
    expect(form).not.toBeNull();
  });
  it("accept user's input", () => {
    render(
      <App>
        <Form
          text={""}
          textHadler={mockedTextHandler}
          submitHandler={mockedSubmitHandler}
          count={0}
        />
      </App>
    );
    const form = screen.getByPlaceholderText("Mau ngapain?");
    fireEvent.change(form, { target: { value: "Cuci mobil" } });

    expect(form.value).toBe("Cuci mobil");
  });
  it("change when button is clicked", () => {
    render(
      <App>
        <Form
          text={""}
          textHadler={mockedTextHandler}
          submitHandler={mockedSubmitHandler}
          count={1}
        />
      </App>
    );
    const form = screen.getByPlaceholderText("Mau ngapain?");
    const button = screen.getByRole("button");

    fireEvent.change(form, { target: { value: "Cuci mobil" } });
    expect(form.value).toBe("Cuci mobil");

    fireEvent.click(button);
    expect(form.value).toBe("");

    expect(button.textContent).toBe("Add todo ke-2");
  });
});
