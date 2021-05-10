//import the required classes
import {
  Button,
  FormControl,
  FormLabel,
  Textarea,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  HStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import db from '../../index';
import './styles.css';

//add a new post to the page and to the database
const AddNewPost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState("");
  const [isSaving, setSaving] = useState(false);

  //when the user presses submit then save the post to the database
  const handleSubmit = async () => {
    setSaving(true);

    const date = new Date();

    //add the post with the following credentials
    await db.collection("posts").add({
      title,
      upVotesCount: 0,
      downVotesCount: 0,
      createdAt: date.toUTCString(),
      updatedAt: date.toUTCString(),
    });

    onClose();
    setTitle("");
    setSaving(false);
  };

  return (
    <>
      {/*Open the modal to add a post*/}
      <Button id="postButton" onClick={onOpen} colorScheme="blue">
        Reply
      </Button>
      {/*Modal that will take in the post details and saving them to firebase*/}
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay>
          <ModalContent>
            {/*modal header*/}
            <ModalHeader>Add new post</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl id="post-title">
                <FormLabel>Post title</FormLabel>
                {/*add the post details aka the question to be asked or topic to be discussed*/}
                <Textarea
                  type="post-title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </FormControl>
            </ModalBody>
            {/*put a submit button on the bottom of the modal*/}
            <ModalFooter>
              <HStack spacing={4}>
                <Button onClick={onClose}>Close</Button>
                <Button
                  onClick={handleSubmit}
                  colorScheme="blue"
                  disabled={!title.trim()}
                  isLoading={isSaving}
                >
                  Save
                </Button>
              </HStack>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
};
//export the class
export default AddNewPost;
