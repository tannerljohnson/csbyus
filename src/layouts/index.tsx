import Link from "gatsby-link";
import * as React from "react";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import SidebarMenu from "../components/SidebarMenu/SidebarMenu";
import { Segment, Icon, Container, Sidebar, Button } from "semantic-ui-react";
import "../css/styles.css";
import "../css/responsive.css";
import "../css/semantic.min.css";
import "prismjs/themes/prism-okaidia.css";
import { Provider } from "react-redux";
import { store } from "../store";

// TODO: change paths once pages created. Currently all point to old pages for test
export const menuItems = [
  { name: "Home", path: "/", exact: true, icon: "home", inverted: true },
  { name: "About", path: "/about-extended/", exact: true, icon: "info circle" },
  { name: "Community", path: "/blog/", exact: false, icon: "newspaper" },
  { name: "Contact", path: "/contact/", exact: true, icon: "phone" },
];

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string;
  };
  children: any;
}

export default class DefaultLayout extends React.PureComponent<DefaultLayoutProps, void> {
  render() {
    const { pathname } = this.props.location;
    const isHome = pathname === "/";

    return (
      <Provider store={store}>
        <Sidebar.Pushable as={Segment}>

          <SidebarMenu Link={Link} pathname={pathname} items={menuItems} visible={false} />

          <Sidebar.Pusher style={{ minHeight: "100vh" }}>
            {/* Header */}
            {isHome ? null : <HeaderMenu
              Link={Link}
              pathname={pathname}
              items={menuItems}
            />}

            {/* Render children pages */}
            <div style={{ paddingBottom: 60 }}>
              {this.props.children()}
            </div>

            {/* Footer */}
            <Segment inverted vertical style={{ position: "absolute", bottom: 0, width: "100%" }}>
              <Container textAlign="center">
                <p>Copyright CSbyUs <Icon name="heart" /> 2018</p>
              </Container>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Provider>
    );
  }
}
