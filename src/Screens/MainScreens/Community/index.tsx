// libs
import React, { useEffect, useRef, useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";

// 3rd party
import firestore, { Timestamp } from "@react-native-firebase/firestore";

// custom
import { ICONS, STRING } from "../../../Constants";
import {
  AddComment,
  AddPost,
  Story,
  UserPost,
  WithModal,
} from "../../../Components";
import { addLikes, firebaseDB } from "../../../Utils/userUtils";
import { useAppSelector } from "../../../Redux/Store";
import { CommunityProps } from "../../../Defs/navigators";
import { Post } from "../../../Defs";
import { styles } from "./styles";

const postSignSize = {
  width: 20,
  height: 20,
};

const dummyStoryData = [
  "data:image/jpeg;base64,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",
  "https://i.pinimg.com/736x/f7/27/88/f72788284c5f79abe0b744aad2255bae.jpg",
];

const Community: React.FC<CommunityProps> = ({ navigation }) => {
  const handleAddStory = () => setPostModalVisible(true);
  const postId = useRef<string>();
  const goToPostScreen = (postId: string) => {
    return () => navigation.navigate("PostScreen", { postId });
  };

  // state use
  const [postModalVisible, setPostModalVisible] = useState(false);
  const [commentModalVisible, setCommentModalVisible] = useState(false);
  const [postsData, setPostsData] = useState<Post[]>();

  // redux use
  const { id: userId } = useAppSelector((state) => state.User.data);

  // effect use
  useEffect(() => {
    const unsubscribe = firestore()
      .collection(firebaseDB.collections.posts)
      .orderBy("createdOn", "desc")
      .onSnapshot((snapshot) => {
        const data = snapshot.docs;
        const x = data.map((val) => val.data()) as Post[];
        console.log(x);
        setPostsData(x);
      });

    return () => unsubscribe();
  }, []);

  return (
    <ScrollView style={styles.parent}>
      <View style={styles.titleCtr}>
        <Text style={styles.titleText}>{STRING.COMMUNITY.TITLE}</Text>
        <TouchableOpacity onPress={handleAddStory} style={styles.iconCtr}>
          {ICONS.PostSign(postSignSize)}
        </TouchableOpacity>
      </View>

      <FlatList
        data={dummyStoryData}
        renderItem={({ item }) => <Story photo={item} />}
        horizontal
        style={{ marginVertical: 24 }}
      />

      <View>
        {postsData
          ? postsData?.map((val) => {
              const isLiked = val.likedByUsersId.includes(userId!);
              return (
                <Pressable
                  onPress={goToPostScreen(val.postId!)}
                  key={val.postId}
                >
                  <UserPost
                    postData={{
                      caption: val.caption,
                      noOfComments: val.comments?.length,
                      noOfLikes: val.likedByUsersId?.length ?? 0,
                      photo: val.photo,
                      postedOn: Timestamp.fromMillis(
                        val.createdOn.seconds * 1000
                      )
                        .toDate()
                        .toDateString(),
                      userName: val.userName,
                      userPhoto: val.userPhoto,
                      isLiked,
                      id: val.postId!,
                    }}
                    handleCommentsPress={() => {
                      postId.current = val.postId;
                      setCommentModalVisible(true);
                    }}
                    handleLikesPress={() => {
                      if (isLiked) {
                        addLikes(
                          val.postId!,
                          val.likedByUsersId.filter((value) => value !== userId)
                        );
                      } else {
                        addLikes(
                          val.postId!,
                          val.likedByUsersId.concat(userId!)
                        );
                      }
                    }}
                  />
                </Pressable>
              );
            })
          : null}
      </View>
      <WithModal
        modalVisible={postModalVisible}
        setModalVisible={setPostModalVisible}
      >
        <AddPost setModalVisible={setPostModalVisible} />
      </WithModal>
      <WithModal
        modalVisible={commentModalVisible}
        setModalVisible={setCommentModalVisible}
      >
        <AddComment
          setModalVisible={setCommentModalVisible}
          postId={postId.current!}
        />
      </WithModal>
    </ScrollView>
  );
};

export default Community;
