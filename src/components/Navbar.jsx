import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import {SearchBar} from "./index";



const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={"https://img.icons8.com/?size=512&id=9a46bTk3awwI&format=png"} alt="logo" height={45} />
    </Link>
   <SearchBar />
  </Stack>
);

export default Navbar;
