import React, { Component } from "react";
import { ThemeProvider, injectGlobal } from "styled-components";

import {
  Form,
  FormFields,
  Input,
  Button,
  LayoutAdmin,
  Header,
  Nav,
  Article,
  Footer,
  Sidebar,
  SidebarItem
} from "@rafacdb/bah";

import theme from "@rafacdb/bah/src/theme";

function DemoForm() {
  return (
    <Form>
      <FormFields>
        <Input>Default</Input>
        <Input isValid>isValid</Input>
        <Input isInvalid>isInvalid</Input>
        <Button primary inline>
          primary
        </Button>
        <Button success inline>
          success
        </Button>
        <Button info inline>
          info
        </Button>
        <Button warning inline>
          warning
        </Button>
        <Button danger inline>
          danger
        </Button>
        <Button inverse inline>
          inverse
        </Button>
        <Button primary inline small>
          primary small
        </Button>
        <Button success inline large>
          success large
        </Button>
        <Button info inline xlarge>
          info xlarge
        </Button>
      </FormFields>
    </Form>
  );
}

class App extends Component {
  render() {
    // eslint-disable-next-line
    injectGlobal`
      * {
        margin: 0;
        padding: 0;
      }
      html,
      body {
        width: 100%;
        height: 100%;
        font-family: ${theme.bahFontFamily};
        color: ${theme.bahDefaultTextColor};
        background-color: ${theme.bahDefaultBackgroundColor};
      }
    `;
    return (
      <div>
        <ThemeProvider theme={theme}>
          <div>
            <Header>header</Header>
            <LayoutAdmin>
              <Article>
                <DemoForm />
              </Article>
              <Nav>
                <Sidebar>
                  <SidebarItem>
                    <input type="checkbox" id="menu1" />
                    <label htmlFor="menu1">Principal</label>
                    <ul>
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">Dashboard</a>
                      </li>
                      <li>
                        <a href="#">About</a>
                      </li>
                    </ul>
                  </SidebarItem>
                </Sidebar>
              </Nav>
            </LayoutAdmin>
            <Footer>Footer</Footer>
          </div>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
