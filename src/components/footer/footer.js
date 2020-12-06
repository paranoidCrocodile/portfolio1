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

export default function Footer() {
  const { gitHub, stackOverflow, linkedIn, facebook, twitter } = footer.social;
  return (
    <footer className="footer">
      <p>{footer.copyRight}</p>
      <Button>
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
          <a icon={twitter} target="_blank">
            <Icon icon={faTwitter} />
          </a>
        </li>
      </ul>
    </footer>
  );
}
