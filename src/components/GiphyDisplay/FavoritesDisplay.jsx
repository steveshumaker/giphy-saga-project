import { useSelector } from "react-redux";
// MUI
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Typography } from "@mui/material";

const FavoritesDisplay = () => {
  //   const { giphyFavorites } = useSelector((store) => store);

  const giphyFavorites = [
    {
      id: 1,
      title: "White Dog GIF",
      gif: "https://media2.giphy.com/media/4Zo41lhzKt6iZ8xff9/200.gif?cid=184bf328cje1b6a0haszvwti1rswgxbt2hfnfjvpyiudhvvr&ep=v1_gifs_search&rid=200.gif&ct=g",
      username: "username",
      category_id: 2,
    },
  ];

  const toggleFavorite = () => {};

  return (
    <>
      <Typography variant="h2" align="center">
        Favorites
      </Typography>
      <ImageList
        sx={{ width: 500, height: 450, mx: "auto" }}
        cols={3}
        rowHeight={164}
      >
        {giphyFavorites.map(({ id, title, gif, username, category_id }) => (
          <ImageListItem key={id}>
            <img
              src={`${gif}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${gif}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
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
    </>
  );
};

export default FavoritesDisplay;
