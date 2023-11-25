import axios from "axios";

const getTracksList = async () => {
  const response = await axios.get(
    `https://65617faedcd355c08323e0e1.mockapi.io/tracks`
  );
};

export const tracksList = getTracksList.data;
