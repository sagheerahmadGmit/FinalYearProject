//import the required classes
import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";
import VoteButtons from "./vote-buttons";

//load the post from the db and output it to the screen
const Post = ({ post }) => {
  return (
    <HStack key={post.id} w="100%" alignItems="flex-start">
        {/*add the vote buttons */}
      <VoteButtons post={post} />
      {/*  add the posts*/}
      <Box bg="gray.100" p={4} rounded="md" w="100%">
        <Text>{post.title}</Text>
      </Box>
    </HStack>
  );
};

export default Post;
