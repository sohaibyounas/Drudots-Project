import React from "react";
import { Box, Typography, Button, CircularProgress, DialogTitle } from "@mui/material";
import { IoWarningOutline } from "react-icons/io5";
import Dialog from "../component/Ui/Dialog.jsx";
import style from "../assets/css/Admin/AdminDashboard.js"

const ConfirmDialog = ({
    open,
    onClose,
    onConfirm,
    loading = false,
    title = "Confirm Deletion",
    message = "Are you sure you want to delete this item?",
}) => {
    return (
        <Dialog open={open} onClose={onClose}>
            {/* header */}
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <IoWarningOutline size={28} color="red" />
            </Box>

            {/* title */}
            <DialogTitle sx={style.deletTitle}>
                {title}
            </DialogTitle>

            {/* subtitle */}
            <Typography sx={style.deletSubTitle}>
                {message}
            </Typography>

            {/* cancel, delete button */}
            <Box sx={style.cancelBox}>
                <Button onClick={onClose} variant="outlined" sx={style.cancelTitle}>
                    Cancel
                </Button>

                <Button
                    variant="contained"
                    color="error"
                    onClick={onConfirm}
                    disabled={loading}
                    sx={style.deleteButton}
                >
                    {loading ? <CircularProgress size={20} sx={style.loader} /> : "Delete"}
                </Button>
            </Box>
        </Dialog>
    );
};

export default ConfirmDialog;
