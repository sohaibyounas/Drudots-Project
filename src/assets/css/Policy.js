const style = {
    dialogTitle: {
        color: "#fff",
        borderBottom: "1px solid #5D5E63",
        mx: -2.5,
        p: "0px 16px 0px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },

    // dialog content scrollbar styles
    dialogContent: {
        "&::-webkit-scrollbar": {
            width: "8px",
        },
        "&::-webkit-scrollbar-track": {
            background: "none",
        },
        "&::-webkit-scrollbar-thumb": {
            background: "#555",
            borderRadius: "4px",
        },
        "&::-webkit-scrollbar-button": {
            display: "none",
        },
        scrollbarColor: "#262626",
        color: "#fff",
        borderTop: "none",
        borderBottom: "none",
        p: "24px 0px",
    },

    dialogChip: {
        mr: 1,
        color: "#fff"
    },

    dialogList: {
        display: "flex",
        alignItems: "center",
        mb: 1
    },

    dialogActions: {
        width: "100%",
    },

    dialogCancel: {
        border: "1px solid #ccc",
        color: "#fff",
        flex: 1
    },

    loader: {
        mr: 1,
        color: "#fff"
    },
}

export default style