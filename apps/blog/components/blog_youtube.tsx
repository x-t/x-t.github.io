import getYouTubeID from "get-youtube-id";
import YouTube from "react-youtube";

export const BlogYouTube = ({ props }) => {
  const { url } = props.value;
  const id = getYouTubeID(url);
  return <YouTube videoId={id} />;
};
