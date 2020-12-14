import styles from "./About.module.scss";
import FaceTwoToneIcon from '@material-ui/icons/FaceTwoTone';
import LocationOnTwoToneIcon from '@material-ui/icons/LocationOnTwoTone';
import {FaceOutlined} from "@material-ui/icons";

export default function About() {
  return (
    <div id={"about"}>
      <div className={styles.aboutTitle}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: "wrap"
          }}>
          <FaceOutlined fontSize={"large"}/>
          <div style={{marginLeft: "1rem", fontSize: "2rem"}}>About me</div>
        </div>
      </div>
      <div className={styles.aboutContent}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: "wrap"
        }}>
          <FaceTwoToneIcon color={"primary"}/>
          <div style={{marginLeft: "1rem"}}>
            I am a Software Architect working in financial sector. <br/>
            I love programming and making products to solve people's daily problem.
          </div>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: "wrap",
          marginTop: "1rem"
        }}>
          <LocationOnTwoToneIcon color={"primary"}/>
          <div style={{marginLeft: "1rem"}}>I live in Frankfurt am Main, Germany</div>
        </div>
        <div style={{marginTop: "1rem"}}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21709.80817230194!2d8.6611917884485!3d50.11514393280744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd096f477096c5%3A0x422435029b0c600!2sFrankfurt%2C%20Germany!5e0!3m2!1sen!2suk!4v1607271761753!5m2!1sen!2suk"
            style={{width: "80%", height: "450px", border: "0"}}
            tabIndex={0}/>
        </div>
      </div>
    </div>
  )
}
