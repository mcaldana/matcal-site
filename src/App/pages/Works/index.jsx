import React, { useState } from "react";

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

import works from "./worksList";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Works = () => {
  const [workTag, setWorkTag] = useState([]);

  const handleChange = (event) => {
    const { target: { value }, } = event;
    setWorkTag(typeof value === 'string' ? value.split(',') : value,);
  };

  const workTags = [...new Set(works.flatMap(x => x.tags))];

  return (
    <React.Fragment>
      <Typography variant="h3">
        Works
      </Typography>
      <div>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={workTag}
            onChange={handleChange}
            input={<OutlinedInput label="Tag" />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {workTags.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={workTag.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </React.Fragment>
  );
}

export default Works;