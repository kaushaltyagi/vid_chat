import React from "react";
import Button from "@mui/material/Button";

const CustomPrimaryButton = ({
  label,
  additionalStyles,
  disabled,
  onClick,
}) => {
  return (
    <Button
      variant="contained"
      sx={{
        bgcolor: "#5865F2",
        color: "white",
        textTransform: "none",
        fontSize: "16px",
        fontWeight: 500,
        width: "100%",
        height: "40px",
      }} // sx is for custom styling
      style={additionalStyles ? additionalStyles : {}} // if additional style is given by props we will use it otherwise 'blank'.
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default CustomPrimaryButton;
