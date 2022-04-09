import { Center, Card, Image } from "@mantine/core";

export function PreamblePage() {
  return (
    <Center sx={{ height: "100%" }}>
      <Card>
        <Image
          src={
            "https://i1.wp.com/apnagyaan.com/wp-content/uploads/2019/08/bloombergquint_2019-01_4149e735-a84a-4e50-ab1e-edf7059f72ba_PREAMBLE_1.jpg?fit=1200%2C1800&ssl=1"
          }
          height={"100%"}
        ></Image>
      </Card>
    </Center>
  );
}
