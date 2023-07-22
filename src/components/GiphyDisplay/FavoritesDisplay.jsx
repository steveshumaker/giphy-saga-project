import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
// MUI
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Container, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Button from "@mui/material/Button";

const FavoritesDisplay = () => {
  const giphyFavorites = [
    {
      id: 1,
      title: "White Dog GIF",
      gif: "https://media2.giphy.com/media/4Zo41lhzKt6iZ8xff9/200.gif?cid=184bf328cje1b6a0haszvwti1rswgxbt2hfnfjvpyiudhvvr&ep=v1_gifs_search&rid=200.gif&ct=g",
      username: "username",
      category_id: 2,
    },
  ];

  //   const [giphyFavorites, setGiphyFavorites] = useState([]);

  //   useEffect(() => {
  //     fetch("/api/favoite")
  //       .then((response) => response.json())
  //       .then(setGiphyFavorites)
  //       .catch((error) => console.log(error));
  //   }, []);

  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [isMenu, setIsMenu] = useState(false);
  const [categoryToSet, setCategoryToSet] = useState("");

  useEffect(() => {
    fetch("api/category")
      .then((response) => response.json())
      .then(setCategories);
  }, []);

  const toggleFavorite = () => {};

  return (
    <>
      <Typography variant="h2" align="center">
        Favorites
      </Typography>
      <Container sx={{ width: "18rem" }}>
        <FormControl fullWidth>
          <InputLabel id="favorites-category">Category</InputLabel>
          <Select
            labelId="favorites-category-label"
            id="favorites-category-select"
            value={category}
            label="Age"
            onChange={(event) => setCategory(event.target.value)}
          >
            {categories.map((cat) => (
              <MenuItem key={cat.id} value={cat.id}>
                {cat.name}
              </MenuItem>
            ))}
            <MenuItem key="all" value="all">
              All
            </MenuItem>
          </Select>
        </FormControl>
      </Container>
      <ImageList
        sx={{ width: 500, height: 450, mx: "auto" }}
        cols={3}
        rowHeight={164}
      >
        {giphyFavorites.map(({ id, title, gif, username, category_id }) => {
          if (category_id === category || category === "all") {
            return (
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
                      onClick={() => setIsMenu(!isMenu)}
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${title}`}
                    >
                      <MoreHorizIcon />
                    </IconButton>
                  }
                />
                {isMenu && (
                  <Container>
                    <FormControl fullWidth>
                      <InputLabel id="set-favorites">Category</InputLabel>
                      <Select
                        labelId="favorites-category-picker"
                        id="favorites-category-pick"
                        value={categoryToSet}
                        label="Age"
                        onChange={(event) =>
                          setCategoryToSet(event.target.value)
                        }
                      >
                        {categories.map((cat) => (
                          <MenuItem key={cat.id} value={cat.id}>
                            {cat.name}
                          </MenuItem>
                        ))}
                        <MenuItem key="none" value="">
                          None
                        </MenuItem>
                      </Select>
                    </FormControl>
                    <Button>Save</Button>
                  </Container>
                )}
              </ImageListItem>
            );
          }
        })}
      </ImageList>
    </>
  );
};

export default FavoritesDisplay;
