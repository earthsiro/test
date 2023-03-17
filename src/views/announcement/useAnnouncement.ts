import { ref } from "vue";

export const useAnnouncement = () => {
  const textTest = "hello";
 
  const handleClickButton = () => {
    return alert(textTest);
  };

  return { textTest, handleClickButton };
};
