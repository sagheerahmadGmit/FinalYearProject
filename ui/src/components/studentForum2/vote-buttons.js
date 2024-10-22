import { IconButton, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import db from '../../index';

const VoteButtons = ({ post }) => {
  const [isVoting, setVoting] = useState(false);
  const [votedPosts, setVotedPosts] = useState([]);

  useEffect(() => {
    // Fetch the previously voted items from localStorage. See https://stackoverflow.com/a/52607524/1928724 on why we need "JSON.parse" and update the item on localStorage. Return "true" if the user has already voted the post.
    const votesFromLocalStorage = localStorage.getItem("votes") || [];
    let previousVotes = [];

    try {
      // Parse the value of the item from localStorage. If the value of the
      // items isn't an array, then JS will throw an error.
      previousVotes = JSON.parse(votesFromLocalStorage);
    } catch (error) {
      console.error(error);
    }

    setVotedPosts(previousVotes);
  }, []);

  const handleDisablingOfVoting = (postId) => {
    // This function is responsible for disabling the voting button after a
    // user has voted. Fetch the previously voted items from localStorage. See
    // https://stackoverflow.com/a/52607524/1928724 on why we need "JSON.parse"
    // and update the item on localStorage.
    const previousVotes = votedPosts;
    previousVotes.push(postId);

    setVotedPosts(previousVotes);

    // Update the voted items from localStorage. See https://stackoverflow.com/a/52607524/1928724 on why we need "JSON.stringify" and update the item on localStorage.
    localStorage.setItem("votes", JSON.stringify(votedPosts));
  };

  const handleClick = async (type) => {
    setVoting(true);

    // Do calculation to save the vote.
    let upVotesCount = post.upVotesCount;
    let downVotesCount = post.downVotesCount;

    const date = new Date();

    //user wants to upvote a post
    if (type === "upvote") {
      upVotesCount = upVotesCount + 1;
      //user wants to downvote a post
    } else {
      downVotesCount = downVotesCount + 1;
    }

    //update the post in the database in firebase
    await db.collection("posts").doc(post.id).set({
      title: post.title,
      upVotesCount,
      downVotesCount,
      createdAt: post.createdAt,
      updatedAt: date.toUTCString(),
    });

    // Disable the voting button once the voting is successful.
    handleDisablingOfVoting(post.id);

    setVoting(false);
  };

  // check to see if the user already upvoted or downvoted a post
  const checkIfPostIsAlreadyVoted = () => {
    if (votedPosts.indexOf(post.id) > -1) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      {/*Button to upvote a post*/}
      <VStack>
        <IconButton
          size="lg"
          colorScheme="purple"
          aria-label="Upvote"
          icon={<FiArrowUp />}
          onClick={() => handleClick("upvote")}
          isLoading={isVoting}
          isDisabled={checkIfPostIsAlreadyVoted()}
        />
        <Text bg="gray.100" rounded="md" w="100%" p={1}>
          {post.upVotesCount}
        </Text>
      </VStack>
      {/*Button to downvote a post*/}
      <VStack>
        <IconButton
          size="lg"
          colorScheme="yellow"
          aria-label="Downvote"
          icon={<FiArrowDown />}
          onClick={() => handleClick("downvote")}
          isLoading={isVoting}
          isDisabled={checkIfPostIsAlreadyVoted()}
        />
        <Text bg="gray.100" rounded="md" w="100%" p={1}>
          {post.downVotesCount}
        </Text>
      </VStack>
    </>
  );
};
//export the class to be used in another class
export default VoteButtons;
