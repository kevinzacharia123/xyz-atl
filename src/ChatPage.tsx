import { app } from "./firebaseapp";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import {
  ActionIcon,
  Box,
  Button,
  Center,
  Group,
  Input,
  Loader,
  Modal,
  Overlay,
  Paper,
  ScrollArea,
  Textarea,
  Title,
} from "@mantine/core";
import { Send } from "tabler-icons-react";
import { useEffect, useRef, useState } from "react";
import {
  useCollection,
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import { db } from "./firebaseapp";
export function ChatPage() {
  const [room, loading, err] = useDocumentData(
    doc(db, "messages", "eqEHQUb79fqonoZW1zi9")
  );
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const [authorName, setAuthorName] = useState("");
  const [modalOpened, setModalOpened] = useState(true);
  useEffect(() => {
    addEventListener("keydown", () => {
      if (!modalOpened) (inputRef.current as any).focus();
    });
  }, []);

  return (
    <>
      <Group
        sx={{ height: "calc(100vh - 60px)" }}
        direction="column"
        spacing={0}
      >
        <ScrollArea sx={{ height: 0, flexGrow: 1 }}>
          <Group direction="column" p="sm" grow sx={{ width: "100vw" }}>
            {loading ? (
              <></>
            ) : (
              room!.messages.map((_: any, i: any) => (
                <Paper p="md" key={i}>
                  <Title order={4}>{`${_.author}: ${_.value}`}</Title>
                </Paper>
              ))
            )}
          </Group>
        </ScrollArea>
        <Group sx={{ width: "100%" }} p="sm">
          <Input
            sx={{ flexGrow: 1 }}
            value={input}
            onChange={(e: any) => {
              setInput(e.target.value);
            }}
            ref={inputRef}
          ></Input>
          <ActionIcon
            size={"lg"}
            variant="filled"
            color="blue"
            onClick={() => {
              setDoc(doc(db, "messages", "eqEHQUb79fqonoZW1zi9"), {
                messages: [
                  ...room!.messages,
                  {
                    author: authorName,
                    value: input,
                  },
                ],
              });
            }}
          >
            <Send></Send>
          </ActionIcon>
        </Group>
      </Group>
      {loading ? (
        <Overlay color={"black"}>
          <Center sx={{ height: "100%" }}>
            <Loader></Loader>
          </Center>
        </Overlay>
      ) : (
        <></>
      )}
      <Modal
        opened={modalOpened}
        withCloseButton={false}
        title="Name"
        onClose={() => 0}
      >
        <Group direction="column">
          <Input
            value={authorName}
            onChange={(e: any) => setAuthorName(e.target.value)}
          ></Input>
          <Button
            onClick={() => {
              if (authorName != "") setModalOpened(false);
            }}
          >
            Ok
          </Button>
        </Group>
      </Modal>
    </>
  );
}
