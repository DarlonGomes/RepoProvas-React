import { React, useState, useContext } from "react";
import { FormWrapper, FormButton } from "./style";
import {
  InputLabel,
  OutlinedInput,
  FormControl,
  Box,
  Autocomplete,
  TextField,
} from "@mui/material";
import { createTest } from "../../../services/api";
import { retrieveLocalData } from "../../../utils";
import { HandlerContext } from "../../../context/handleProvider";

export default function TestForms({ categories, disciplines, teachers }) {
  const { setIsAlertOpen, setRefresh, refresh } =
    useContext(HandlerContext);
  const [isDisabled, setDisabled] = useState(false);
  const [teacherDisabled, setTeacherDisabled] = useState(true);
  const [refreshInput, setRefreshInput] = useState(true);
  const [values, setValues] = useState({
    name: "",
    pdfUrl: "",
    categoryId: "",
    disciplineId: "",
    teacherId: "",
    disciplineTeacher: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setDisabled(true);
    const form = {
      name: values.name,
      pdfUrl: values.pdfUrl,
      categoryId: values.categoryId,
      teacherId: values.teacherId,
      disciplineId: values.disciplineId,
    };
    setRefresh(!refresh);
    try {
      const config = retrieveLocalData();
      await createTest(form, config);

      setTimeout(() => {
        setDisabled(false);
      }, 1000);
    } catch (err) {
      setTimeout(() => {
        setDisabled(false);
        setValues({
          name: "",
          pdfUrl: "",
          categoryId: "",
          teacherId: "",
          disciplineId: "",
        });
        setIsAlertOpen(true);
      }, 1000);
    }
  };

  return (
    <FormWrapper>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <FormControl
          sx={{ marginBottom: "25px", width: "700px" }}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-test">Test Title</InputLabel>
          <OutlinedInput
            id="outlined-adornment-test"
            type="text"
            value={values.name}
            onChange={handleChange("name")}
            label="Test Title"
            disabled={isDisabled}
            autoComplete="off"
            style={{ backgroundColor: isDisabled ? "#CECECE" : "#FAFAFA" }}
          />
        </FormControl>
        <FormControl
          sx={{ marginBottom: "25px", width: "700px" }}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-email">Test url</InputLabel>
          <OutlinedInput
            id="outlined-adornment-url"
            type="text"
            value={values.pdfUrl}
            onChange={handleChange("pdfUrl")}
            label="Test url"
            disabled={isDisabled}
            autoComplete="off"
            style={{ backgroundColor: isDisabled ? "#CECECE" : "#FAFAFA" }}
          />
        </FormControl>
        <Autocomplete
          disablePortal
          id="combo-box-categories"
          onChange={(event, value) => (values.categoryId = value.id)}
          options={categories}
          sx={{
            width: 700,
            marginBottom: "25px",
            backgroundColor: isDisabled ? "#CECECE" : "#FAFAFA",
          }}
          disabled={isDisabled}
          isOptionEqualToValue={(option, value) => option.label === value.label}
          renderInput={(params) => <TextField {...params} label="Category" />}
        />
        <Autocomplete
          disablePortal
          id="combo-box-disciplines"
          onChange={(event, value) => {
            if (values.disciplineId === "")
              setTeacherDisabled(!teacherDisabled);
            values.disciplineId = value.id;
            values.disciplineTeacher = value.teacherId;
            setRefreshInput(!refreshInput);
          }}
          options={disciplines}
          sx={{
            width: 700,
            marginBottom: "25px",
            backgroundColor: isDisabled ? "#CECECE" : "#FAFAFA",
          }}
          disabled={isDisabled}
          isOptionEqualToValue={(option, value) => option.label === value.label}
          renderInput={(params) => <TextField {...params} label="Discipline" />}
        />
        <Autocomplete
          disablePortal
          id="combo-box-teachers"
          key={values.disciplineId}
          onChange={(event, value) => (values.teacherId = value.id)}
          options={teachers.filter((e) => e.id === values.disciplineTeacher)}
          sx={{
            width: 700,
            marginBottom: "25px",
            backgroundColor: isDisabled ? "#CECECE" : "#FAFAFA",
          }}
          disabled={teacherDisabled}
          isOptionEqualToValue={(option, value) =>
            option.label === value.label && option.id === value.id
          }
          renderInput={(params) => <TextField {...params} label="Teacher" />}
        />
        <FormButton status={isDisabled} shown={teacherDisabled} type="submit">
          Submit
        </FormButton>
      </Box>
    </FormWrapper>
  );
}
