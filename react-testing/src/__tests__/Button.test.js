// import { render, screen } from "@testing-library/react";
// import { Button } from "../components/Button";

// describe("Test the button component", () => {
//   // Button is getting rendered or not
//   it("Button should be rendered in the DOM", () => {
//     render(<Button>Testing Button</Button>);
//     screen.debug();
//     const button = screen.getByText("Testing Button");
//     except(button).toBeInTheDocument();
//   });
//   it("Button should render with correct child text", () => {
//     render(<Button>Click</Button>);
//     const button = screen.getByTestId("testing-button");
//     except(button).toHaveTextContent("Click");
//   });
//   it("Should throw error if props are not passed", () => {
//     jest.spyOn(console, "error");
//     render(
//       <Button color={0} size={() => {}}>
//         Click
//       </Button>
//     );
//     except();
//   });
// });
import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "../components/Button";
import App from "../App";

describe("Test the button component", () => {
  //1. Button is getting rendered or not
  it("Button should be rendered in the DOM", () => {
    render(<Button>Testing Button</Button>);
    screen.debug();
    const button = screen.getByText("Testing Button");
    expect(button).toBeInTheDocument();
  });
  it("Button should render with correct child text", () => {
    render(<Button>Click</Button>);
    const button = screen.getByTestId("testing-button");
    expect(button).toHaveTextContent("Click");
  });
  it("Should throw error if props are not passed", () => {
    jest.spyOn(console, "error");
    render(
      <Button color={0} size={() => {}}>
        Click
      </Button>
    );
    expect(console.error).toBeCalledTimes(2);
  });

  // Onclick function should execute

  it("Should invoke the function onClicking", () => {
    const mockFunc = jest.fn();
    render(<Button func={mockFunc}>Click Me</Button>);
    const button = screen.getByTestId("testing-button");

    fireEvent.click(button);
    expect(mockFunc).toBeCalled();
  });
});

describe("Test Counter", () => {
  it("Counter should be rendered on the DOM", () => {
    render(<App />);
    const counter = screen.getByTestId("counter");
    const button = screen.getByTestId("testing-button");
    expect(counter).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(counter).toHaveTextContent("Counter:0");
  });

  it("Counter should update on clicking the button", () => {
    render(<App />);
    const counter = screen.getByTestId("counter");
    const button = screen.getByTestId("testing-button");
    expect(counter).toHaveTextContent("Counter:0");
    fireEvent.click(button);
    expect(counter).toHaveTextContent("Counter:1");
    fireEvent.click(button);
    expect(counter).toHaveTextContent("Counter:2");
  });

  // Decrementing the count
});
