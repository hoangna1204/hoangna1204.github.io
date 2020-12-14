import About from "../components/about/about";
import WorkHistory from "../components/workHistory/workHistory";
import Education from "../components/education/education";
import Skills from "../components/skills/skills";
import {Divider} from "@material-ui/core";

export default function Home() {
  return (
    <>
      <About/>
      <Skills/>
      <Divider/>
      <WorkHistory/>
      <Divider/>
      <Divider/>
      <Education/>
    </>
  )
}
