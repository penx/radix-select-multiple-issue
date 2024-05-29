import * as RadixThemes from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

function App() {
  return (
    <form>
      <RadixThemes.Theme>
        <RadixThemes.Select.Root defaultValue="a">
          <RadixThemes.Select.Trigger />
          <RadixThemes.Select.Content>
            <RadixThemes.Select.Item key="featured-a" value="a">
              Featured A
            </RadixThemes.Select.Item>
            <RadixThemes.Select.Item key="a" value="a">
              A
            </RadixThemes.Select.Item>
          </RadixThemes.Select.Content>
        </RadixThemes.Select.Root>
      </RadixThemes.Theme>
    </form>
  );
}

export default App;
