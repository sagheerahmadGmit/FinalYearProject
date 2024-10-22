//import the required classes
import { Flex, Spinner, VStack } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react"
import React, { useEffect, useState } from "react";
import Post from "./post";
import db from '../../index';
import AddNewPost from "./add-new-post";
import { ChakraProvider } from "@chakra-ui/react";

const Forum = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // Hook to handle the initial fetching of posts
    db.collection("posts")
      .orderBy("createdAt", "desc")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setPosts(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Hook to handle the real-time updating of posts whenever there is a
    // change in the datastore (https://firebase.google.com/docs/firestore/query-data/listen#view_changes_between_snapshots)

    db.collection("posts")
      .orderBy("createdAt", "desc")
      .onSnapshot((querySnapshot) => {
        const _posts = [];

        querySnapshot.forEach((doc) => {
          _posts.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        setPosts(_posts);
      });
  }, []);

  // the post is loading
  if (isLoading) {
    return (
      <Flex minH="100vh" justifyContent="center" alignItems="center">
        <Spinner />
      </Flex>
    );
  }

  // get the posts from the database
  return (
    <ChakraProvider>
    <div>
      <>
        <AddNewPost />

        <Container maxW="md" centerContent p={8}>
          <div>
              {/*get all the saved posts from the firebase database and display them on the page*/}
              <VStack spacing={8} w="100%">
                {posts.map((post) => (
                  <Post post={post} key={post.id} />
                ))}                
              </VStack>      
          </div>
        </Container>
      </>
    </div>
    </ChakraProvider>
  );
};
//export the class to be used else where
export default Forum;
