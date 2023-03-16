import { MatchingType } from "../../interfaces/homepage/MatchingType";
import { ref } from "vue";

export const useHomepage = () => {
  const textTest = "hello";
  const matchingList = ref<MatchingType[]>([
    {
      roomId: "room1",
      seq: 1,
      roomName: "Looking For member...",
      hostName: "เฉลิมชัย เชียงคาน",
      limitMember: 15,
      currentMember: 5,
    },
    {
      roomId: "room2",
      seq: 2,
      roomName: "มาเข้าร่วมกับพวกเรา...",
      hostName: "เชียงชัย เฉลิมคาน",
      limitMember: 15,
      currentMember: 5,
    },
    {
      roomId: "room555",
      seq: 3,
      roomName: "Come on guy. Let's go ...",
      hostName: "คานเชียง ชัยเฉลิม",
      limitMember: 15,
      currentMember: 5,
    },
  ]);
  const handleClickButton = () => {
    return alert(textTest);
  };

  return { textTest, matchingList, handleClickButton };
};
