const style = {
    dialogTitle: {
        color: "#fff",
        borderBottom: "1px solid #5D5E63",
        p: "0px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },

    // dialog content scrollbar styles
    dialogContent: {
        "&::-webkit-scrollbar": {
            display: "none",
        },
        scrollbarWidth: "none",
        overflow: "auto",
        color: "#fff",
        borderTop: "none",
        borderBottom: "none",
        p: "10px 20px",
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
        borderTop: "1px solid #3e3f40",
         p: "10px 20px 0px 20px",
    },

    dialogCancel: {
        border: "1px solid #ccc",
        color: "#fff",
        width: "100%", 
    },

    loader: {
        mr: 1,
        color: "#fff"
    },
}

export default style