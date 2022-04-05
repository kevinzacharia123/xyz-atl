import {
  ActionIcon,
  Center,
  Input,
  Paper,
  Title,
  Text,
  Group,
  Grid,
  Stack,
  Card,
  Image,
  ScrollArea,
  Box,
  Drawer,
} from "@mantine/core";
import fuse from "fuse.js";
import { useState } from "react";
import { AdjustmentsHorizontal, Search } from "tabler-icons-react";

export function LawyersPage() {
  const [drawerOpened, setDrawerOpened] = useState(false);
  return (
    <>
      <Group p="md">
        <Input
          sx={{ flexGrow: 1 }}
          radius="md"
          placeholder="Search your lawyer"
          rightSection={
            <ActionIcon>
              <Search></Search>
            </ActionIcon>
          }
        ></Input>
        <ActionIcon
          sx={{ width: "fit-content" }}
          onClick={() => setDrawerOpened(true)}
        >
          <AdjustmentsHorizontal></AdjustmentsHorizontal>
        </ActionIcon>
      </Group>
      <Paper sx={{ background: "transparent" }}>
        <Text p="md">Most Searched Lawyers</Text>
      </Paper>
      <Group sx={{ width: "100%" }} position="center">
        {Array(100)
          .fill(null)
          .map((_, i) => (
            <Card>
              <Image src={`https://picsum.photos/seed/${i}/200`}></Image>
              <Box p={"md"}>
                <Text weight={700}>{`Name: ${i}`}</Text>
                <Text weight={700}>{`Court: ${i}`}</Text>
                <Text weight={700}>{`Contact No: ${Math.floor(
                  Math.random() * 10000000000
                )}`}</Text>
                <Text weight={700}>{`Gmail ID: ${i}`}</Text>
                <Text weight={700}>{`No. of cases taken up: ${i}`}</Text>
              </Box>
            </Card>
          ))}
      </Group>
      <Drawer
        opened={drawerOpened}
        onClose={function (): void {
          setDrawerOpened(false);
        }}
        position="right"
      >
        <Group></Group>
      </Drawer>
    </>
  );
}
