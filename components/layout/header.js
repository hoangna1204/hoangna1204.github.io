import styles from './Header.module.scss'
import {Link, Tooltip} from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MessageIcon from '@material-ui/icons/Message';
import React, {useEffect, useRef, useState} from "react";


export default function Header() {
  const preventDefault = (event) => event.preventDefault();

  const prevScrollY = useRef(0);
  const [scrollUp, setScrollUp] = useState(false);
  const [headerBgEnabled, setHeaderBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && scrollUp) {
        setScrollUp(false);
      }
      if (prevScrollY.current > currentScrollY && !scrollUp) {
        setScrollUp(true);
      }

      prevScrollY.current = currentScrollY;

      if (currentScrollY > 1000) {
        setHeaderBg(true);
      } else {
        setHeaderBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll, {passive: true});

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollUp]);

  return (
    <header className={`${headerBgEnabled ? styles.headerWithBackground : styles.headerWithoutBackground}`}
            id={"header"}>
      <Link href="#" onClick={preventDefault} color={"inherit"}
            style={{textDecoration: "none", fontWeight: "lighter"}}>
        <span className={styles.logo}>
          Hoang Nguyen
        </span>
      </Link>
      <div className={styles.navigation}>
        <Tooltip title="My github" aria-label="myGithub">
          <Link href="https://github.com/hoangna1204" target={"_blank"} color={"inherit"}
                style={{textDecoration: "none", fontWeight: "lighter"}}>
            <GitHubIcon/>
          </Link>
        </Tooltip>
        <Tooltip title="My linkedin" aria-label="myLinkedin">
          <Link href="https://www.linkedin.com/in/hoang-nguyen-anh/" target={"_blank"} color={"inherit"}
                style={{textDecoration: "none", fontWeight: "lighter"}}>
            <LinkedInIcon/>
          </Link>
        </Tooltip>
        <Tooltip title="Send me message" aria-label="myEmail">
          <Link href="mailto:hoangna1204@gmail.com" color={"inherit"}>
            <MessageIcon/>
          </Link>
        </Tooltip>
      </div>
    </header>
  )
}
