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
} from "@mantine/core";
import { Search } from "tabler-icons-react";
import { COI } from "./COI";
import Fuse from "fuse.js";
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
        <ScrollArea sx={{ maxHeight: 250 }}>
          <Group direction="column" grow>
            {data.map((item, i) => (
              <Paper key={i} p="md">
                {item}
              </Paper>
            ))}
          </Group>
        </ScrollArea>
      </Popover>
    </Stack>
  );
}
