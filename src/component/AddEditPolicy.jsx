// src/components/AddEditPolicyModal.jsx
import React, { useState, useEffect } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    IconButton,
    Box,
    Typography,
    Chip,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AppTextField from "./designSystem/AppTextField";

const AddEditPolicy = ({ open, onClose, onSave, initialData = null }) => {
    const [title, setTitle] = useState("");
    const [type, setType] = useState("list"); // 'list' or 'paragraph'
    const [content, setContent] = useState(""); // for paragraph
    const [items, setItems] = useState([""]); // for list
    const [loading, setLoading] = useState(false);

    //   Populate form if editing existing policy
    useEffect(() => {
        if (initialData) {
            setTitle(initialData.title || "");
            setType(initialData.paragraph ? "paragraph" : "list");
            if (initialData.paragraph) {
                setContent(initialData.paragraph);
            } else {
                setItems(initialData.items || [""]);
            }
        }
    }, [initialData]);

    //   Handlers for list items
    const handleItemChange = (index, value) => {
        const newItems = [...items];
        newItems[index] = value;
        setItems(newItems);
    };

    //   Add or remove list items
    const addItem = () => setItems([...items, ""]);
    const removeItem = (index) => setItems(items.filter((_, i) => i !== index));

    //   Handle form submission
    const handleSubmit = () => {
        const data = {
            id: initialData?.id || `custom-${Date.now()}`,
            title,
            icon: initialData?.icon || <GavelIcon sx={{ color: "#fff" }} />, // default or dynamic
        };

        if (type === "paragraph") {
            data.paragraph = content;
        } else {
            data.items = items.filter((item) => item.trim() !== "");
        }

        onSave(data);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle sx={{ color: "#fff" }}>
                {initialData ? "Edit Policy" : "Add New Policy"}
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{ position: "absolute", right: 8, top: 8, color: "#fff" }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            <DialogContent dividers sx={{ color: "#fff" }}>
                <Box>
                    {/* Policy Title Input */}
                    <Typography variant="subtitle2" gutterBottom>
                        Policy Title
                    </Typography>
                    <AppTextField
                        fullWidth
                        margin="dense"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        sx={{ mb: 2 }}
                    />
                </Box>

                <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" gutterBottom>
                        Type
                    </Typography>
                    <Box component="span">
                        <Chip
                            label="Bullet List"
                            color={type === "list" ? "primary" : "default"}
                            onClick={() => setType("list")}
                            sx={{ mr: 1, color: "#fff" }}
                        />
                        <Chip
                            label="Paragraph"
                            color={type === "paragraph" ? "primary" : "default"}
                            onClick={() => setType("paragraph")}
                            sx={{ color: "#fff" }}
                        />
                    </Box>
                </Box>

                {type === "paragraph" ? (
                    <Box>
                        <Typography variant="subtitle2" gutterBottom>
                            Paragraph Content
                        </Typography>
                        <AppTextField
                            fullWidth
                            multiline
                            rows={6}
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </Box>
                ) : (
                    <Box>
                        <Typography variant="subtitle2" gutterBottom>
                            Items
                        </Typography>
                        {items.map((item, idx) => (
                            <Box
                                key={idx}
                                sx={{ display: "flex", alignItems: "center", mb: 1 }}
                            >
                                <AppTextField
                                    fullWidth
                                    size="small"
                                    value={item}
                                    onChange={(e) => handleItemChange(idx, e.target.value)}
                                />
                                <IconButton size="small" onClick={() => removeItem(idx)}>
                                    <CloseIcon fontSize="small" />
                                </IconButton>
                            </Box>
                        ))}
                        <Button size="small" onClick={addItem}>
                            + Add Item
                        </Button>
                    </Box>
                )}
            </DialogContent>

            <DialogActions sx={{ width: "100%", p: 2, justifyContent: "space-between" }}>
                <Button onClick={onClose} sx={{ border: "1px solid #ccc", width: "100%" }}>Cancel</Button>
                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    disabled={!title.trim()}
                    sx={{ width: "100%" }}
                >
                   {loading ? "Updating..." : "Save Policy"}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddEditPolicy;
