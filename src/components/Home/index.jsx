import React, { useEffect, useState, useContext } from "react";
import { HandlerContext } from "../../context/handleProvider";
import { Ambient } from "./style";
import PageHeader from "../Header";
import NestedList from "../DisciplineList";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { retrieveLocalData } from "../../utils";
import {
  gatherTestByDisciplines,
  gatherTestByTeachers,
} from "../../services/api";
import HandleAlert from "../Alert";

export default function HomePage() {
  const { isAlertOpen, setIsAlertOpen } = useContext(HandlerContext);
  const [value, setValue] = useState("1");
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [disciplineList, setDisciplineList] = useState([]);
  const [teacherList, setTeacherList] = useState([]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    async function getServerLists() {
      const config = retrieveLocalData();
      const disciplinesPromise = gatherTestByDisciplines(config);
      const teachersPromise = gatherTestByTeachers(config);
      try {
        const [disciplinesResponse, teachersResponse] = await Promise.all([
          disciplinesPromise,
          teachersPromise,
        ]);
        setDisciplineList(disciplinesResponse.data);
        setTeacherList(teachersResponse.data);
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
  }, []);

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
            <NestedList list={disciplineList} />
          </TabPanel>
          <TabPanel value="2">
            <NestedList list={teacherList} />
          </TabPanel>
          <TabPanel value="3">Forms</TabPanel>
        </TabContext>
      )}
      {loading && <>Loading</>}
    </Ambient>
  );
}
