import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme, { shallow } from "enzyme";
import App from "./App";

import Header from "./components/Header/Header";
import Todolist from "./components/Todolist/Todolist";
import Form from "./components/Form/Form";

Enzyme.configure({ adapter: new Adapter() });

const mockTodos = [{ id: 1, todo: "Mencuci mobil", isCompleted: false }];
const mockSetTodos = jest.fn();
const mockTextHandler = jest.fn();
const mockSubmitHandler = jest.fn();
const mockText = "";
const mockCount = 1;

describe("rendering components", () => {
  it("rendered succesfully", () => {
    shallow(<App />);
  });
  it("render Header", () => {
    const header = shallow(<Header text="TODOs" />);
    expect(header).not.toBeNull();
  });
  it("render Todolist", () => {
    const wrapper = shallow(
      <Todolist todos={mockTodos} setTodos={mockSetTodos} />
    );
    const list = wrapper.find("ul");
    expect(list.length).toEqual(1);
  });
  it("render Form", () => {
    const wrapper = shallow(<Form />);
    const input = wrapper.find("input");
    expect(input).not.toBeNull();
  });
});

describe("header test", () => {
  it("has h1 and h2 elements", () => {
    const header = shallow(<Header text="TODOs" />);
    const h1 = header.find("h1");
    const h2 = header.find("h2");
    expect(h1.text()).not.toBeNull();
    expect(h2.text()).not.toBeNull();
  });
  it("h1 value matches the props", () => {
    const header = shallow(<Header text="TODOs" />);
    const h1 = header.find("h1");
    expect(h1.text()).toBe("TODOs");
  });
});

describe("Form test", () => {
  it("accepts user's input", () => {
    const wrapper = shallow(
      <Form
        text={mockText}
        textHandler={mockTextHandler}
        submitHandler={mockSubmitHandler}
        count={mockCount}
      />
    );
    const input = wrapper.find("input");
    input.simulate("change", { target: { value: "Cuci mobil" } });
    expect(input.text()).toBe("Cuci mobil");
  });
});
