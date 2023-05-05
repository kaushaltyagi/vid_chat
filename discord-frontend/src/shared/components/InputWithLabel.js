import React from 'react';
import { styled } from "@mui/system";

const Wrapper = styled("div")({//style component  for div
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
  });

  const Label = styled("p")({  //styling componet for paragraph tag  
    color: "#b9bbbe",
    textTransform: "uppercase",
    fontWeight: "600",
    fontSize: "16px",
  });//styling component for label

  const Input = styled("input")({//styling component for input
    flexGrow: 1,
    height: "40px",
    border: "1px solid black",
    borderRadius: "5px",
    color: "#dcddde",
    background: "#35393f",
    margin: 0,
    fontSize: "16px",
    padding: "0 5px",
  });


  const InputWithLabel = (props) => { //we will be receiving props to this component
    const { value, setValue, label, type, placeholder } = props; // this all that is getting from the props
  
    const handleValueChange = (event) => {
      setValue(event.target.value);//receiving input value from wrapper's input (in return section)
    }; // used to set the value of 'value' with the help of 'set vlaue' 
  
    return (
      <Wrapper>
        <Label>{label}</Label>
        <Input
          value={value}
          onChange={handleValueChange}
          type={type}
          placeholder={placeholder}
        />
      </Wrapper>
    );
  };
  
  export default InputWithLabel; 