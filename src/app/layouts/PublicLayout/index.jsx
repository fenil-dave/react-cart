import { Box } from "@mui/system";
import AppbarContainer from "app/components/Appbar";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
    return (
        <>
            <AppbarContainer />
            <Box
                sx={{
                    paddingTop: "64px",
                }}
            >
                <Outlet />
            </Box>
        </>
    );
};

export default PublicLayout;
