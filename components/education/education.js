import styles from "./Education.module.scss";
import SchoolOutlinedIcon from "@material-ui/icons/SchoolOutlined";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {LinkTwoTone, LocationOnTwoTone, SchoolTwoTone} from "@material-ui/icons";
import EventNoteTwoToneIcon from '@material-ui/icons/EventNoteTwoTone';

export default function Education() {
  const educations = [
    {
      key: 'hda',
      university: 'Hochschule Darmstadt',
      address: 'Darmstadt, Germany',
      url: 'https://h-da.com/',
      year: '2012 - 2015',
      description: 'Joint International Master'
    },
    {
      key: 'uwp',
      university: 'University of Wisconsin, Platteville',
      address: 'Platteville, Wisconsin, United States',
      url: 'https://www.uwplatt.edu/',
      year: '2013 - 2014',
      description: 'Exchange master program in Computer Science'
    },
    {
      key: 'hanu',
      university: 'Hanoi University',
      address: 'Hanoi, Vietnam',
      url: 'http://hanu.vn/',
      year: '2007 - 2011',
      description: 'Honor Bachelor in Computer Science'
    }

  ];

  return (
    <div id={"education"}>
      <div className={styles.educationTitle}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: "wrap"
          }}><SchoolOutlinedIcon fontSize={"large"}/>
          <div style={{marginLeft: "1rem", fontSize: "2rem"}}>My education</div>
        </div>
      </div>
      <div className={styles.educationContent}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{width: "30%"}}><strong>Education</strong></TableCell>
                <TableCell><strong>Description</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {educations.map((education) =>
                <TableRow key={education.key}>
                  <TableCell style={{lineHeight: "175%"}}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: "wrap"
                      }}>
                      <SchoolTwoTone color={"primary"}/>
                      <div style={{marginLeft: "1rem"}}>
                        {education.university}
                      </div>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: "wrap",
                        marginTop: "0.3rem"
                      }}>
                      <LocationOnTwoTone color={"primary"}/>
                      <div style={{marginLeft: "1rem"}}>
                        {education.address}
                      </div>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: "wrap",
                        marginTop: "0.3rem"
                      }}>
                      <LinkTwoTone color={"primary"}/>
                      <div style={{marginLeft: "1rem"}}>
                        <a href={education.url}>{education.url}</a>
                      </div>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: "wrap",
                        marginTop: "0.3rem"
                      }}>
                      <EventNoteTwoToneIcon color={"primary"}/>
                      <div style={{marginLeft: "1rem"}}>
                        {education.year}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell style={{verticalAlign: "top"}}>
                    {education.description}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}
