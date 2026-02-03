// src/components/AddEditPolicyModal.jsx
import React, { useState, useEffect } from "react";
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Box,
  Typography,
  Chip,
  CircularProgress,
} from "@mui/material";
import GavelIcon from "@mui/icons-material/Gavel";
import CloseIcon from "@mui/icons-material/Close";
import AppTextField from "./designSystem/AppTextField.jsx";
import Dialog from "./Ui/Dialog.jsx";
import style from "../assets/css/Policy.js";

const AddEditPolicy = ({
  open,
  onClose,
  onSave,
  initialData = null,
}) => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("list"); // 'list' or 'paragraph'
  const [content, setContent] = useState(""); // for paragraph
  const [items, setItems] = useState([""]); // for list
  const [loading, setLoading] = useState(false);

  //   Populate form if editing existing policy
  useEffect(() => {
    if (initialData) {
      setLoading(true);
      // Simulate fetching data
      setTimeout(() => {
        setTitle(initialData.title || "");
        setType(initialData.paragraph ? "paragraph" : "list");
        if (initialData.paragraph) {
          setContent(initialData.paragraph);
          setItems([""]); // Reset list items
        } else {
          setItems(initialData.items || [""]);
          setContent(""); // Reset paragraph content
        }
        setLoading(false);
      }, 500);
    } else {
      // Reset form for new policy
      setTitle("");
      setType("list");
      setContent("");
      setItems([""]);
      setLoading(false); // Ensure loading is false
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
    setLoading(true);
    // Simulate async save
    setTimeout(() => {
      const data = {
        id: initialData?.id || `custom-${Date.now()}`,
        title,
        icon: initialData?.icon || <GavelIcon sx={{ color: "#fff" }} />,
      };

      if (type === "paragraph") {
        data.paragraph = content;
      } else {
        data.items = items.filter((item) => item.trim() !== "");
      }

      onSave(data);
      setLoading(false);
      onClose();
    }, 100); // Simulate network delay
  };
  return (
    <Dialog
      open={open}
      onClose={(e, reason) => {
        // Only allow closing via Cancel button or Close icon, not backdrop or escape
        if (reason === "backdropClick" || reason === "escapeKeyDown") return;
        onClose(e, reason);
      }}
      maxWidth="md"
      fullWidth
      sx={{ padding: "22px 0px 26px 0px" }}
    >
      <DialogTitle sx={style.dialogTitle}>
        {initialData ? "Edit Policy" : "Add New Policy"}
        <IconButton aria-label="close" onClick={onClose} sx={{ color: "#fff" }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers sx={style.dialogContent}>
        {/* Policy Title Input */}
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Policy Title
          </Typography>
          <AppTextField
            fullWidth
            margin="dense"
            value={title}
            sx={{ mb: 2 }}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Box>

        {/* type selection section */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" gutterBottom>
            Type
          </Typography>
          <Box>
            <Chip
              label="Bullet List"
              color={type === "list" ? "primary" : "default"}
              onClick={() => setType("list")}
              sx={style.dialogChip}
            />
            <Chip
              label="Paragraph"
              color={type === "paragraph" ? "primary" : "default"}
              onClick={() => setType("paragraph")}
              sx={{ color: "#fff" }}
            />
          </Box>
        </Box>

        {/* list or paragraph */}
        {type === "paragraph" ? (
          // paragraph input
          <AppTextField
            fullWidth
            multiline
            rows={6}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        ) : (
          // list input
          <Box>
            {items.map((item, idx) => (
              <Box key={idx} sx={style.dialogList}>
                <AppTextField
                  fullWidth
                  size="small"
                  value={item}
                  onChange={(e) => handleItemChange(idx, e.target.value)}
                />
                <IconButton
                  size="small"
                  onClick={() => removeItem(idx)}
                  sx={{ color: "#fff" }}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </Box>
            ))}
            <Button size="small" onClick={addItem} sx={{ color: "#fff" }}>
              + Add Item
            </Button>
          </Box>
        )}
      </DialogContent>

      <DialogActions sx={style.dialogActions}>
        <Button onClick={onClose} sx={style.dialogCancel}>
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={!title.trim() || loading}
          sx={{ width: "100%" }}
        >
          {loading ? (
            <>
              <CircularProgress size={20} sx={style.loader} />
              {initialData ? "Updating..." : "Saving..."}
            </>
          ) : initialData ? (
            "Update Policy"
          ) : (
            "Save Policy"
          )}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddEditPolicy;
