import { Autocomplete, Box, Button, Checkbox, FormControl, FormControlLabel, IconButton, InputBase, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const genres = [
  'Action',
  'Adventure',
  'Animation',
  'Comedy',
  'Crime',
  'Documentary',
  'Drama',
  'Family',
  'Fantasy',
  'History',
  'Horror',
  'Music',
  'Mystery',
  'Romance',
  'Science Fiction',
  'TV Movie',
  'Thriller',
  'War',
  'Western',
];

const languages = [
  'English',
  'Spanish',
  'French',
  'German',
  'Chinese',
  'Japanese',
  'Korean',
];

const SideItems = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleGenresChange = (event, newValue) => {
    setSelectedGenres(newValue);
  };

  const handleFromDateChange = (date) => {
    setFromDate(date);
  };

  const handleToDateChange = (date) => {
    setToDate(date);
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleSearchKeywordChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: 'white',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'white',
          padding: 12,
        }}
      >
        <Button
          variant="outlined"
          style={{
            borderColor: 'black',
            color: 'black',
            marginBottom: 10,
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          Sort
          <div style={{ display: 'flex' }}>
            <KeyboardArrowRightIcon />
          </div>
        </Button>
        <Button
          variant="outlined"
          style={{
            borderColor: 'black',
            color: 'black',
            marginBottom: 16,
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          Where to Watch
          <div style={{ display: 'flex', marginLeft: 50 }}>
            <KeyboardArrowRightIcon />
          </div>
        </Button>
        {/* Filters */}
        <Typography variant="h6" style={{ marginBottom: 8 }}>
          Filters
        </Typography>
        {/* Add your filter components here */}
        <Box
          sx={{
            border: '1px solid rgba(0, 0, 0, 0.1)',
            padding: 5,
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            marginBottom: 1,
          }}
        >
          {/* Radio buttons */}
          <RadioGroup
            aria-label="filterOptions"
            name="filterOptions"
            defaultValue="everything"
          >
            <FormControlLabel
              value="everything"
              control={<Radio />}
              label="Everything"
            />
            <FormControlLabel
              value="notSeen"
              control={<Radio />}
              label="Movies I Haven't Seen"
            />
            <FormControlLabel
              value="seen"
              control={<Radio />}
              label="Movies I Have Seen"
            />
          </RadioGroup>
        </Box>

        {/* Line separator */}
        <hr
          style={{ border: '1px solid rgba(0, 0, 0, 0.1)', marginBottom: 1 }}
        />

        {/* Checkboxes */}
        <Typography variant="h6" style={{ marginBottom: 8 }}>
          Availabilities
        </Typography>
        <FormControlLabel
          control={<Checkbox />}
          label="Search all availabilities?"
        />

        <Typography variant="h6" style={{ marginTop: 16, marginBottom: 8 }}>
          Release Dates
        </Typography>
        <FormControlLabel control={<Checkbox />} label="Search all releases?" />

        {/* <Typography variant="h6" style={{ marginTop: 16, marginBottom: 8 }}>
          Countries
        </Typography> */}
        <FormControlLabel
          control={<Checkbox />}
          label="Search all countries?"
        />
        <FormControlLabel control={<Checkbox />} label="Theatrical (limited)" />
        <FormControlLabel control={<Checkbox />} label="Theatrical" />
        <FormControlLabel control={<Checkbox />} label="Premiere" />
        <FormControlLabel control={<Checkbox />} label="Digital" />
        <FormControlLabel control={<Checkbox />} label="Physical" />
        <FormControlLabel control={<Checkbox />} label="TV" />

        {/* <DatePicker
          label="From"
          value={fromDate}
          onChange={handleFromDateChange}
          inputFormat="MM/dd/yyyy"
          renderInput={(params) => <TextField {...params} variant="outlined" />}
        />
        <DatePicker
          label="To"
          value={toDate}
          onChange={handleToDateChange}
          inputFormat="MM/dd/yyyy"
          renderInput={(params) => <TextField {...params} variant="outlined" />}
        /> */}
        {/* AutoComplete for Genres */}
        <Box>
          <Typography variant="h6" style={{ marginBottom: 8 }}>
            Genres
          </Typography>
          <Autocomplete
            multiple
            id="genres"
            options={genres}
            value={selectedGenres}
            onChange={handleGenresChange}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Select Genres"
                placeholder="Genres"
              />
            )}
            style={{ width: 300 }}
          />
        </Box>

        <Typography variant="h6" style={{ marginBottom: 8 }}>
          Languages
        </Typography>
        <FormControl variant="outlined" sx={{ minWidth: 120 }}>
          <InputLabel htmlFor="language">Select Language</InputLabel>
          <Select
            value={selectedLanguage}
            onChange={handleLanguageChange}
            label="Select Language"
            inputProps={{
              name: 'language',
              id: 'language',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {languages.map((language) => (
              <MenuItem key={language} value={language}>
                {language}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Typography variant="h6" style={{ marginTop: 5 }}>
          Keywords
        </Typography>
        <InputBase
          sx={{ ml: 1, flex: 1, marginTop: 2 }}
          placeholder="Filter By Keywords"
          inputProps={{ 'aria-label': 'search google maps' }}
        />
      </Box>
    </Box>
  );
}

export default SideItems