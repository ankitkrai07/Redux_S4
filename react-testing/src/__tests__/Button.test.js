import { render, screen } from "@testing-library/react";
import { Button } from "../components/Button";

describe("Test the button component", () => {
  // Button is getting rendered or not
  it("Button should be rendered in the DOM", () => {
    render(<Button>Testing Button</Button>);
    screen.debug();
    const button = screen.getByText("Testing Button");
    except(button).toBeInTheDocument();
  });
  it("Button should render with correct child text", () => {
    render(<Button>Click</Button>);
    const button = screen.getByTestId("testing-button");
    except(button).toHaveTextContent("Click");
  });
  it("Should throw error if props are not passed", () => {
    jest.spyOn(console, "error");
    render(
      <Button color={0} size={() => {}}>
        Click
      </Button>
    );
    except();
  });
});
