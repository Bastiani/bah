import React, { Component } from "react";
import { ThemeProvider } from "styled-components";

import { Form, FormFields, Input, Button } from "@rafacdb/bah";
import theme from "@rafacdb/bah/src/theme";

class App extends Component {
  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Form>
            <FormFields>
              <Input>Test1</Input>
              <Button success>Salvar</Button>
            </FormFields>
          </Form>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
