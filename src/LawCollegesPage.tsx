import {
  ActionIcon,
  Box,
  Group,
  Input,
  Title,
  Text,
  Card,
  Paper,
  Image,
} from "@mantine/core";
import { Search, AdjustmentsHorizontal } from "tabler-icons-react";

export function LawCollegesPage() {
  return (
    <>
      <Group p="md">
        <Input
          sx={{ flexGrow: 1 }}
          radius="md"
          placeholder="Search law colleges"
          rightSection={
            <ActionIcon>
              <Search></Search>
            </ActionIcon>
          }
        ></Input>
        <ActionIcon sx={{ width: "fit-content" }} onClick={() => undefined}>
          <AdjustmentsHorizontal></AdjustmentsHorizontal>
        </ActionIcon>
      </Group>
      <Paper sx={{ background: "transparent" }}>
        <Text p="md">Recommended Law Colleges</Text>
      </Paper>
      <Group sx={{ width: "100%" }} position="center"></Group>
    </>
  );
}
