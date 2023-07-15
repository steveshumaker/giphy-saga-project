import { useSelector } from "react-redux";
// MUI
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const GiphyDisplay = () => {
  const { giphySearch } = useSelector((store) => store);

  const toggleFavorite = () => {};

  return (
    <ImageList
      sx={{ width: 500, height: 450, mx: "auto" }}
      cols={3}
      rowHeight={164}
    >
      {giphySearch.map(({ id, title, images, user, username }) => (
        <ImageListItem key={images.fixed_height.url}>
          <img
            src={`${images.fixed_height.url}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${images.fixed_height.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={title}
            loading="lazy"
          />
          <ImageListItemBar
            title={title}
            subtitle={username}
            actionIcon={
              <IconButton
                onClick={toggleFavorite}
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${title}`}
              >
                <FavoriteIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default GiphyDisplay;
