import React, { Component } from "react";
import { ThemeProvider, injectGlobal } from "styled-components";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

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
  SidebarItem,
  Tab,
  Radio,
  Checkbox,
  Table,
  TableCol,
  TableHeader,
  TableRow
} from "@rafacdb/bah";

import theme from "@rafacdb/bah/lib/theme";

import { selectTab, showTabs } from "@rafacdb/bah/lib/tabActions";

function Home() {
  return (
    <div>
      <a href="https://github.com/Bastiani/bah/wiki/Tabs" target="_blank">
        <h2>Tabs on wiki!</h2>
      </a>
      <a
        href="https://github.com/Bastiani/bah/wiki/LayoutAdmin"
        target="_blank"
      >
        <h2>Layout Admin on wiki!</h2>
      </a>
      <a href="https://github.com/Bastiani/bah/wiki/Paginate" target="_blank">
        <h2>Paginate on wiki!</h2>
      </a>
      <br />
      <iframe
        width="853"
        height="480"
        src="https://www.youtube.com/embed/gZ3qnMh0bJA"
        frameborder="0"
        allowfullscreen
      />
    </div>
  );
}

function DemoButtons() {
  return (
    <div>
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
      <a href="https://github.com/Bastiani/bah/wiki/Buttons" target="_blank">
        More details on wiki
      </a>
    </div>
  );
}

function DemoForm() {
  return (
    <Form>
      <FormFields>
        <Input>Default</Input>
        <Input isValid>isValid</Input>
        <Input isInvalid>isInvalid</Input>
        <a
          href="https://github.com/Bastiani/bah/wiki/Form,-FormFields,-Input,-InputRedux"
          target="_blank"
        >
          More details on wiki
        </a>
      </FormFields>
    </Form>
  );
}

function DemoRadioCheckbox() {
  return (
    <Form>
      <FormFields>
        <Checkbox name="check1" id="check1" disabled>
          Check1
        </Checkbox>
        <Checkbox name="check2" id="check2">
          Check2
        </Checkbox>
        <Checkbox name="check3" id="check3">
          Check3
        </Checkbox>
        <Radio name="radio1" id="radio1" disabled>
          Radio1
        </Radio>
        <Radio name="radio1" id="radio2">
          Radio2
        </Radio>
        <Radio name="radio1" id="radio3">
          Radio3
        </Radio>
        <a
          href="https://github.com/Bastiani/bah/wiki/Radio-and-Checkbox"
          target="_blank"
        >
          More details on wiki
        </a>
      </FormFields>
    </Form>
  );
}

function DemoTable() {
  return (
    <Form>
      <FormFields>
        <Table>
          <TableHeader>
            <TableCol flexGrow={2}>Title 1</TableCol>
            <TableCol flexGrow={6}>Title 2</TableCol>
            <TableCol flexGrow={6}>Title 3</TableCol>
          </TableHeader>
          <TableRow key={1}>
            <TableCol flexGrow={2}>test 1</TableCol>
            <TableCol flexGrow={6}>test 2</TableCol>
            <TableCol flexGrow={6}>actions</TableCol>
          </TableRow>
          <TableRow key={2}>
            <TableCol flexGrow={2}>test 1-1</TableCol>
            <TableCol flexGrow={6}>test 2-2</TableCol>
            <TableCol flexGrow={6}>actions</TableCol>
          </TableRow>
        </Table>
        <a href="https://github.com/Bastiani/bah/wiki/Table" target="_blank">
          More details on wiki
        </a>
      </FormFields>
    </Form>
  );
}

class App extends Component {
  componentWillMount() {
    this.props.showTabs("home", "form", "buttons", "radio", "table");
    this.props.selectTab("home");
  }
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
    const tabs = [
      {
        id: "home",
        tabCaption: "Home",
        active: true,
        visible: true,
        get content() {
          return <Home />;
        }
      },
      {
        id: "form",
        tabCaption: "Form",
        visible: true,
        get content() {
          return <DemoForm />;
        }
      },
      {
        id: "buttons",
        tabCaption: "Buttons",
        visible: true,
        get content() {
          return <DemoButtons />;
        }
      },
      {
        id: "radio",
        tabCaption: "Radio and Checkbox",
        visible: true,
        get content() {
          return <DemoRadioCheckbox />;
        }
      },
      {
        id: "table",
        tabCaption: "Table",
        visible: true,
        get content() {
          return <DemoTable />;
        }
      }
    ];
    return (
      <div>
        <ThemeProvider theme={theme}>
          <div>
            <Header>header</Header>
            <LayoutAdmin>
              <Article>
                <Tab tabs={tabs} />
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      selectTab,
      showTabs
    },
    dispatch
  );
export default connect(null, mapDispatchToProps)(App);
