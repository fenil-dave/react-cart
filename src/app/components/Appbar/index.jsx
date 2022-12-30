import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

import classes from "./Appbar.module.scss";

const navItems = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Compare",
        path: "/compare",
    },
    {
        name: "Cart",
        path: "/cart",
    },
];

const AppbarContainer = () => {
    return (
        <AppBar component="nav">
            <Toolbar>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                >
                    React-cart
                </Typography>
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            className={classes.navlink}
                            to={item.path}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default AppbarContainer;
