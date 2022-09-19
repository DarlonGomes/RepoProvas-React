import React, { useEffect, useState, useContext } from "react";
import { HandlerContext } from "../../context/handleProvider";
import { Ambient } from "./style";
import PageHeader from "../Header";
import DisciplineList from "../Lists/Discipline/DisciplineList";
import TeacherList from "../Lists/Teacher/TeacherList";
import TestForms from "../Forms/NewTest";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { retrieveLocalData } from "../../utils";
import {
  gatherTestByDisciplines,
  gatherTestByTeachers,
  gatherFormOptions,
} from "../../services/api";
import HandleAlert from "../Alert";

export default function HomePage() {
  const { isAlertOpen, setIsAlertOpen, refresh } = useContext(HandlerContext);
  const [value, setValue] = useState("1");
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [disciplineList, setDisciplineList] = useState([]);
  const [teacherList, setTeacherList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [disciplines, setDisciplines] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    async function getServerLists() {
      const config = retrieveLocalData();
      const disciplinesPromise = gatherTestByDisciplines(config);
      const teachersPromise = gatherTestByTeachers(config);
      const optionsPromise = gatherFormOptions(config);
      try {
        const [disciplinesResponse, teachersResponse, optionsResponse] =
          await Promise.all([
            disciplinesPromise,
            teachersPromise,
            optionsPromise,
          ]);
        setDisciplineList(disciplinesResponse.data);
        setTeacherList(teachersResponse.data);
        setCategories(optionsResponse.data.categories);
        setDisciplines(optionsResponse.data.disciplines);
        setTeachers(optionsResponse.data.teachers);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {
        setMessage(error.response);
        setIsAlertOpen(true);
        setLoading(false);
      }
    }
    getServerLists();
  }, [refresh]);

  return (
    <Ambient>
      <PageHeader />
      <HandleAlert
        isAlertOpen={isAlertOpen}
        setIsAlertOpen={setIsAlertOpen}
        message={message}
      />
      {!loading && (
        <TabContext value={value}>
          <Box sx={{ borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              centered
            >
              <Tab
                label="By Disciplines"
                value="1"
                sx={{ marginRight: "165px" }}
              />
              <Tab
                label="By Teachers"
                value="2"
                sx={{ marginRight: "165px" }}
              />
              <Tab label="New Test" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <DisciplineList list={disciplineList} />
          </TabPanel>
          <TabPanel value="2">
            <TeacherList list={teacherList} />
          </TabPanel>
          <TabPanel value="3">
            <TestForms
              categories={categories}
              disciplines={disciplines}
              teachers={teachers}
            />
          </TabPanel>
        </TabContext>
      )}
      {loading && <>Loading</>}
    </Ambient>
  );
}
