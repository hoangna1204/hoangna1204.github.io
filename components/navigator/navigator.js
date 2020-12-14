import {Divider, MenuItem, MenuList, Tooltip} from "@material-ui/core";
import styles from './Navigator.module.css';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import {Link} from 'react-scroll'
import {FaceOutlined} from "@material-ui/icons";

export default function Navigator() {
  return (
    <div className={styles.navigator}>
      <MenuList>
        <Link to={"about"} smooth={true} spy={true}>
          <MenuItem style={{margin: "7px 0"}}>
            <Tooltip title={"About me"} aria-label={"aboutMe"} placement={"left"}>
              <FaceOutlined color={"primary"} fontSize={"small"}/>
            </Tooltip>
          </MenuItem>
        </Link>
        <Divider/>
        <Link to={"skills"} smooth={true} spy={true}>
          <MenuItem style={{margin: "7px 0"}}>
            <Tooltip title={"My skills"} aria-label={"mySkills"} placement={"left"}>
              <BuildOutlinedIcon fontSize="small" color={"primary"}/>
            </Tooltip>
          </MenuItem>
        </Link>
        <Divider/>
        <Link to={"workHistory"} smooth={true} spy={true}>
          <MenuItem style={{margin: "7px 0"}}>
            <Tooltip title={"My work history"} aria-label={"myWorkHistory"} placement={"left"}>
              <CardTravelIcon fontSize="small" color={"primary"}/>
            </Tooltip>
          </MenuItem>
        </Link>
        <Divider/>
        <Link to={"education"} smooth={true} spy={true}>
          <MenuItem style={{margin: "7px 0"}}>
            <Tooltip title={"My education"} aria-label={"myEducation"} placement={"left"}>
              <SchoolOutlinedIcon fontSize="small" color={"primary"}/>
            </Tooltip>
          </MenuItem>
        </Link>
      </MenuList>
    </div>
  )
}
