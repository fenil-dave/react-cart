import { AppBar, Badge, Box, Button, Toolbar, Typography } from "@mui/material";
import WithCondition from "app/hoc/WithCondition";
import { getTotalCartItems } from "app/store/cartApp/cartSlice";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import classes from "./Appbar.module.scss";

const AppbarContainer = () => {
    const totalCartItems = useSelector(getTotalCartItems);
    const navItems = useMemo(
        () => [
            {
                name: "Home",
                path: "/",
            },
            {
                name: "Cart",
                path: "/cart",
                badge: true,
                count: totalCartItems,
            },
        ],
        [totalCartItems]
    );

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
                        <WithCondition
                            key={item.path}
                            when={item.badge}
                            then={
                                <Badge color="error" badgeContent={item.count}>
                                    <NavLink
                                        className={classes.navlink}
                                        to={item.path}
                                    >
                                        {item.name}
                                    </NavLink>
                                </Badge>
                            }
                            or={
                                <NavLink
                                    className={classes.navlink}
                                    to={item.path}
                                >
                                    {item.name}
                                </NavLink>
                            }
                        />
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default AppbarContainer;
