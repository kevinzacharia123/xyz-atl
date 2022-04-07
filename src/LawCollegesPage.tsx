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
  Badge,
  Avatar,
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
      <Group sx={{ width: "100%" }} position="center" p="md">
        <Card sx={{ width: "100%" }}>
          <Group position="apart">
            <Group direction="column">
              <Title order={2}>
                SLS Bangalore - CMR University School of Legal Studies
              </Title>
              <Badge>Private</Badge>
              <Title order={4}>Location: Bangalore, Karnataka</Title>
              <Title order={4}>Courses: BA, LLB Hons </Title>
              <Title order={4}>Fees: ₹ 3,000,000</Title>
              <Title order={4}>Exams: LSAT India, CLAT</Title>
            </Group>
            <Avatar
              size={200}
              src={
                "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/9612/2018/8/10/CMR-University-School-of-Legal-Studies-Bangalore_Campus-View.jpg"
              }
            ></Avatar>
          </Group>
        </Card>
        <Card sx={{ width: "100%" }}>
          <Group position="apart">
            <Group direction="column">
              <Title order={2}>NLU Delhi - National Law University</Title>
              <Badge>Private</Badge>
              <Title order={4}>Location: New Delhi, Delhi</Title>
              <Title order={4}>Courses: BA, LLB Hons </Title>
              <Title order={4}>Fees: ₹ 5,75,000</Title>
              <Title order={4}>Exams: LSAT India, CLAT</Title>
            </Group>
            <Avatar
              size={200}
              src={
                "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/807/2018/4/3/National-Law-University-New-Delhi2.jpg"
              }
            ></Avatar>
          </Group>
        </Card>
        <Card sx={{ width: "100%" }}>
          <Group position="apart">
            <Group direction="column">
              <Title order={2}>SLS Pune - Symbiosis Law School</Title>
              <Badge>Private</Badge>
              <Title order={4}>Location: Pune, Maharashtra</Title>
              <Title order={4}>Courses: BA, LLB Hons </Title>
              <Title order={4}>Fees: ₹ 1,807,500</Title>
              <Title order={4}>Exams: LSAT India, CLAT</Title>
            </Group>
            <Avatar
              size={200}
              src={
                "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/6478/2018/8/3/Symbiosis-Law-School-Pune-Campus1.jpg"
              }
            ></Avatar>
          </Group>
        </Card>
        <Card sx={{ width: "100%" }}>
          <Group position="apart">
            <Group direction="column">
              <Title order={2}>Jindal Global Law School, Sonipat</Title>
              <Badge>Private</Badge>
              <Title order={4}>Location: Sonipat, Haryana</Title>
              <Title order={4}>Courses: BA, LLB Hons </Title>
              <Title order={4}>Fees: ₹ 3,000,000</Title>
              <Title order={4}>Exams: LSAT India</Title>
            </Group>
            <Avatar
              size={200}
              src={
                "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/5788/2018/8/2/Jindal-Global-Law-School-Sonipat-Campus1.jpg"
              }
            ></Avatar>
          </Group>
        </Card>
        <Card sx={{ width: "100%" }}>
          <Group position="apart">
            <Group direction="column">
              <Title order={2}>
                School of Law, University of Petroleum and Energy Studies,
                Dehradun
              </Title>
              <Badge>Private</Badge>
              <Title order={4}>Location: Dehradun, Uttarakhand</Title>
              <Title order={4}>Courses: BA LLB Hons </Title>
              <Title order={4}>Fees: ₹ 19,78,000</Title>
              <Title order={4}>Exams: CLAT, LSAT India, ULSAT</Title>
            </Group>
            <Avatar
              size={200}
              src={
                "https://cache.careers360.mobi/media/presets/200X133/colleges/social-media/media-gallery/6393/2018/10/29/Campus%20View%20Of%20School%20of%20Law%20University%20of%20Petroleum%20and%20Energy%20Studies%20Dehradun_Campus-View.jpg"
              }
            ></Avatar>
          </Group>
        </Card>
      </Group>
    </>
  );
}
