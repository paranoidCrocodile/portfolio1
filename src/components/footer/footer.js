import React from "react";
import Button from "../button/button";
import Icon from "../icon/icon";
import "./footer.scss";
import { footer } from "../../config.json";
import {
  faGithub,
  faStackOverflow,
  faLinkedin,
  faFacebook,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { scrollTo } from "../util";

export default function Footer() {
  const { gitHub, stackOverflow, linkedIn, facebook, twitter } = footer.social;
  return (
    <footer className="footer">
      <p>{`${new Date().getFullYear()} ${footer.copyRight}`}</p>
      <Button onClick={() => scrollTo(".front:not(.btn)")}>
        <Icon icon={faChevronUp} />
      </Button>
      <ul>
        <li>
          <a href={gitHub} target="_blank">
            <Icon icon={faGithub} />
          </a>
        </li>
        <li>
          <a href={stackOverflow} target="_blank">
            <Icon icon={faStackOverflow} />
          </a>
        </li>
        <li>
          <a href={linkedIn} target="_blank">
            <Icon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a href={facebook} target="_blank">
            <Icon icon={faFacebook} />
          </a>
        </li>
        <li>
          <a href={twitter} target="_blank">
            <Icon icon={faTwitter} />
          </a>
        </li>
      </ul>
    </footer>
  );
}
