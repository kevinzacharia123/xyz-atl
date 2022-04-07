import { Avatar, Center, Code, Group, Paper, Title } from "@mantine/core";

export function AccountPage() {
  return (
    <Center sx={{ height: "100%" }}>
      <Paper sx={{ width: "100%" }}>
        <Group>
          <Avatar
            src={
              "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/1200px-Patrick_Star.svg.png"
            }
            size={200}
          ></Avatar>
          <Group direction="column" p={"md"}>
            <Title>Username: Patrick</Title>
            <Title order={4}>Number: 19216812</Title>
            <Title order={4}>Gmail: patrick@gmail.com</Title>
            <Title order={4}>
              Adress: Fishlane 61, Starfish road, Underwater world
            </Title>
            <Title order={4}>Adhar No: 6766778</Title>
          </Group>
        </Group>
      </Paper>
    </Center>
  );
}
