import { MatchingType } from "../../../interfaces/matchmaking/MatchingType";
import { ref } from "vue";

export const useMatchmaking = () => {
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


  return {  matchingList};
};
