import {
  AppShell,
  Box,
  Button,
  Footer,
  Header,
  Input,
  MantineProvider,
  Navbar,
  ThemeIcon,
  Title,
  useMantineTheme,
  Text,
  Paper,
  Avatar,
  Group,
  Burger,
  UnstyledButton,
  Drawer,
  Center,
  Stack,
  ActionIcon,
  ColorScheme,
  Divider,
  Card,
  Image,
  ScrollArea,
} from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";
import {
  Aperture,
  Certificate,
  Circle,
  Files,
  Home,
  MoonStars,
  School,
  Search,
  Sun,
  User,
  Writing,
} from "tabler-icons-react";
import React, { useState } from "react";
import {
  Route,
  Routes,
  Link,
  BrowserRouter,
  useLocation,
  useNavigate,
} from "react-router-dom";

// pages

import { HomePage } from "./HomePage";
import { LawyersPage } from "./LawyersPage";
import { AccountPage } from "./AccountPage";
import { PILPage } from "./PILPage";
import { LawCollegesPage } from "./LawCollegesPage";

const pages = [
  {
    route: "/",
    label: "Home",
    icon: (
      <ThemeIcon variant="light">
        <Home></Home>
      </ThemeIcon>
    ),
    el: <HomePage></HomePage>,
  },
  {
    route: "/account",
    label: "Account",
    icon: (
      <ThemeIcon variant="light">
        <User></User>
      </ThemeIcon>
    ),
    el: <AccountPage></AccountPage>,
  },
  {
    route: "/lawyers",
    label: "Lawyers",
    icon: (
      <ThemeIcon variant="light">
        <Certificate></Certificate>
      </ThemeIcon>
    ),
    el: <LawyersPage></LawyersPage>,
  },
  {
    route: "/law-colleges",
    label: "Law Colleges",
    icon: (
      <ThemeIcon variant="light">
        <School></School>
      </ThemeIcon>
    ),
    el: <LawCollegesPage></LawCollegesPage>,
  },
  {
    route: "/pil",
    label: "PIL Instruction",
    icon: (
      <ThemeIcon variant="light">
        <Writing></Writing>
      </ThemeIcon>
    ),
    el: <PILPage></PILPage>,
  },
  {
    route: "/preamble",
    label: "Preamble",
    icon: (
      <ThemeIcon variant="light">
        <Files></Files>
      </ThemeIcon>
    ),
    el: (
      <Center sx={{ height: "100%" }}>
        <Card>
          <Image
            src={
              "https://i1.wp.com/apnagyaan.com/wp-content/uploads/2019/08/bloombergquint_2019-01_4149e735-a84a-4e50-ab1e-edf7059f72ba_PREAMBLE_1.jpg?fit=1200%2C1800&ssl=1"
            }
          ></Image>
        </Card>
      </Center>
    ),
  },
];

function DrawerLink(props: {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  label: string;
  path?: string;
}) {
  const nav = useNavigate();
  return (
    <UnstyledButton
      sx={(theme) => ({
        display: "block",
        width: "100%",
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color:
          theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
        },
      })}
      onClick={() => props.path && nav(props.path)}
    >
      <Group>
        {props.icon}
        <Text size="sm">{props.label}</Text>
      </Group>
    </UnstyledButton>
  );
}

function MyShell(props: {
  children: React.ReactNode;
  header?: React.ReactNode;
}) {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[8]
            : theme.colors.gray[2],
        minHeight: `100vh`,
      })}
    >
      <Group sx={{ height: "100%" }} direction="column" grow spacing={0}>
        {props.header}
        <Box>{props.children}</Box>
      </Group>
    </Box>
  );
}

function App() {
  const theme = useMantineTheme();
  const [navOpened, setNavOpened] = useState(false);

  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] =
    useState<ColorScheme>(preferredColorScheme);
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <MantineProvider theme={{ colorScheme: colorScheme, primaryColor: "blue" }}>
      <MyShell
        header={
          <Header height={60} p={0}>
            <Group sx={{ height: "100%" }} px={20} position="apart">
              <Group>
                <Avatar src="./lawyer.png"></Avatar>
                <Paper>
                  <Title>Quicklaw</Title>
                </Paper>
              </Group>
              <Burger
                opened={false}
                onClick={() => setNavOpened(!navOpened)}
              ></Burger>
            </Group>
          </Header>
        }
      >
        <Routes>
          {pages.map((_, i) => (
            <Route path={_.route} element={_.el} key={i}></Route>
          ))}
        </Routes>
      </MyShell>
      <Drawer
        zIndex={1000}
        title={
          <Group>
            <ActionIcon component="button" onClick={() => toggleColorScheme()}>
              {colorScheme === "light" ? (
                <MoonStars color="blue"></MoonStars>
              ) : (
                <Sun color="yellow"></Sun>
              )}
            </ActionIcon>
            <Title order={2}>Menu</Title>
          </Group>
        }
        opened={navOpened}
        onClose={() => setNavOpened(!navOpened)}
        padding="sm"
        styles={{
          drawer: {
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        {/* <ScrollArea sx={{ height: "100%", maxHeight: "100%" }}>
          <Group sx={{ height: "100%" }} direction="column">
            {pages.map((_) => (
              <DrawerLink
                icon={_.icon}
                label={_.label}
                path={_.route}
              ></DrawerLink>
            ))}
          </Group>
        </ScrollArea> */}
        <ScrollArea sx={{ height: "100%" }}>
          <Group direction="column">
            {pages.map((_, i) => (
              <DrawerLink
                key={i}
                icon={_.icon}
                label={_.label}
                path={_.route}
              ></DrawerLink>
            ))}
          </Group>
        </ScrollArea>
      </Drawer>
    </MantineProvider>
  );
}

export default App;
