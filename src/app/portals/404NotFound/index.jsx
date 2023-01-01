const { Typography } = require("@mui/material");
const { Box } = require("@mui/system");

const PageNotFoundError = ({ error = false }) => {
    return (
        <Box
            sx={{
                justifyContent: "center",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
            }}
        >
            <Typography sx={{ fontSize: "2rem", fontWeight: 500 }}>
                Oppps!
            </Typography>
            {!error && (
                <Typography>
                    Seems like you are on a wrong path of life.
                </Typography>
            )}
            {error && <Typography>Seems like you broke my CODE.</Typography>}
        </Box>
    );
};

export default PageNotFoundError;
