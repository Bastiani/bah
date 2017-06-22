# bah
## bah is a set of simple, easy of use and styled components for React
https://bastiani.github.io/bah/

![](https://raw.githubusercontent.com/Bastiani/bah/master/bah.gif)

bah use [Styled-Components](https://www.styled-components.com)

Easy style all components, edit **theme.js** and change all styles

Any contribution is very appreciate! :wink:

> **Examples:**

**Buttons**

```JSX
<Button primary xlarge inline>primary</Button>
<Button info xlarge inline>info</Button>
<Button success xlarge inline>success</Button>
<Button warning xlarge inline>warning</Button>
<Button danger xlarge inline>danger</Button>
<Button inverse xlarge inline>inverse</Button>
<br />
<Button primary large inline>primary</Button>
<Button info large inline>info</Button>
<Button success large inline>success</Button>
<Button warning large inline>warning</Button>
<Button danger large inline>danger</Button>
<Button inverse large inline>inverse</Button>
<br />
<Button primary inline>primary</Button>
<Button info inline>info</Button>
<Button success inline>success</Button>
<Button warning inline>warning</Button>
<Button danger inline>danger</Button>
<Button inverse inline>inverse</Button>
<br />
<Button primary small inline>primary</Button>
<Button info small inline>info</Button>
<Button success small inline>success</Button>
<Button warning small inline>warning</Button>
<Button danger small inline>danger</Button>
<Button inverse small inline>inverse</Button>
```
**Inputs**
```JSX
<Input isInvalid id="teste1">Teste1</Input>
<Input isValid id="teste4">Teste4</Input>
<Input disabled id="teste5">Teste5</Input>
```

**Tabs (with react-router-dom)**
```JSX
const tabs = [
  {
    id: 1,
    tabCaption: 'Home',
    active: true,
    get content() {
      return (<Route exact path="/" component={Home} />);
    },
  },
  {
    id: 2,
    tabCaption: 'Person',
    get content() {
      return (<Route exact path="/person" component={Person} />);
    },
  },
];

<Switch>
  <Tabs tabs={tabs}>
    <TabItem tabs={tabs} />
  </Tabs>
</Switch>
```

**Layout**
```JSX
import React, { Component } from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';
import { Route, Switch, Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import theme from './bah/src/theme';
import {
  LayoutAdmin,
  Header,
  Nav,
  Article,
  Footer,
  Checkbox,
  Radio,
  Button,
  Sidebar,
  SidebarItem,
  Input,
  Tabs,
  TabItem,
} from './bah/src';

class App extends Component {
  render() {
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
        background-color: gray;
      }
    `;
    return (
      <div>
        <ThemeProvider theme={theme}>
          <div>
            <Header>
              header
            </Header>
            <LayoutAdmin>
              <Article>
                <Switch>
                  <Tabs tabs={tabs}>
                    <TabItem tabs={tabs} />
                  </Tabs>
                </Switch>
              </Article>
              <Nav>
                <Sidebar>
                  <SidebarItem>
                    <input type="checkbox" id="menu1" />
                    <label htmlFor="menu1">Principal</label>
                    <ul>
                      <li>
                        <Link to="/">
                          <i className={'fa fa-home'} /> Home
                        </Link>
                      </li>
                      <li><Link to="/person">
                          <i className={'fa fa-paper'} /> Pessoas
                        </Link></li>
                    </ul>
                  </SidebarItem>
                  <SidebarItem>
                    <input type="checkbox" id="menu2" />
                    <label htmlFor="menu2">Gerencial</label>
                    <ul>
                      <li><a href="">Pessoas</a></li>
                      <li><a href="">Unidades</a></li>
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
```
