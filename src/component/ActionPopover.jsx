import React from "react";
import { Box, MenuItem, Popover } from "@mui/material";
import { FaEdit, FaTrash } from "react-icons/fa";
import style from "../assets/css/Admin/AdminDashboard"

const ActionPopover = ({ anchorEl, open, onClose, onEdit, onDelete, editLabel = "Edit", deleteLabel = "Delete" }) => {
    return (
        <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={onClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            slotProps={{ paper: { sx: style.paper } }}
        >
            <Box>
                <MenuItem onClick={() => { onEdit(); onClose(); }}>
                    <FaEdit style={style.editIcon} /> {editLabel}
                </MenuItem>
                <MenuItem onClick={() => onDelete()} sx={{ color: "error.main" }}>
                    <FaTrash style={style.deleteIcon} /> {deleteLabel}
                </MenuItem>
            </Box>
        </Popover>
    );
};

export default ActionPopover;
