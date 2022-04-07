import {
  Center,
  Input,
  ActionIcon,
  Autocomplete,
  ScrollArea,
  Group,
  Paper,
  Text,
  Stack,
  Popover,
  Box,
  Button,
  Space,
} from "@mantine/core";
import { Search } from "tabler-icons-react";
import { COI } from "./COI";
import Fuse from "fuse.js";
import { Link } from "react-router-dom";
import { SetStateAction, useState } from "react";
const fuse = new Fuse(COI[0] as any, {
  keys: ["ArtNo", "Name", "ArtDesc"],
});

export function HomePage() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<any[]>([]);
  return (
    <Stack sx={{ height: "100%" }} align="center">
      <Input
        radius="md"
        placeholder="Search your legal query"
        sx={{ width: "75vw" }}
        rightSection={
          <ActionIcon>
            <Search></Search>
          </ActionIcon>
        }
        mt="md"
        onChange={(e: any) => {
          setSearch(e.target.value);
          setData(
            fuse
              .search(e.target.value)
              .map((i: any) => (
                <Text>{`Article ${i.item.ArtNo}:\n ${i.item.Name}`}</Text>
              ))
          );
        }}
      ></Input>
      <Popover
        opened={data.length != 0}
        // coordinates={{ x: 10, y: 10 }}
        position="bottom"
        placement="center"
        target={<></>}
        width={"75vw"}
        positionDependencies={[data]}
      >
        <ScrollArea sx={{ height: "30vh" }}>
          <Group direction="column" grow>
            {data.map((item, i) => (
              <Paper key={i} p="md">
                {item}
              </Paper>
            ))}
          </Group>
        </ScrollArea>
      </Popover>
      <Space></Space>
      <Group position="center" direction="column">
        <Group>
          <Button<typeof Link> component={Link} to="lawyers" size="xl">
            Lawyers
          </Button>
          <Button<typeof Link> component={Link} to="law-colleges" size="xl">
            Law Colleges
          </Button>
        </Group>
        <Group>
          <Button<typeof Link> component={Link} to="pil" size="xl">
            PIL Instructions
          </Button>
          <Button<typeof Link> component={Link} to="preamble" size="xl">
            Preamble
          </Button>
        </Group>
      </Group>
    </Stack>
  );
}
