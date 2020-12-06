import React from "react";
import Button from "../button/button";
import "./contacts.scss";
import { contactData } from "../../config.json";
import { $ } from "../util";

export default function Contacts() {
  const copyInfo = (e) => {
    let copyInfo = $(".contacts-copyInfo");
    copyInfo.classList.replace("hide", "show");
    setTimeout(() => copyInfo.classList.replace("show", "hide"), 5000);

    let input = $(".clipboard");
    input.value = e.target.innerText;
    input.select();
    document.execCommand("Copy");
  };

  return (
    <div className="contacts">
      <h1 className="contacts-title">{contactData.title}</h1>
      <ul>
        {contactData.contactInfo.map((info) => (
          <Button
            className={info.className}
            key={info.className}
            onClick={(e) => copyInfo(e)}
          >
            {info.value}
          </Button>
        ))}
      </ul>
      <div className="contacts-copyInfo hide">Copied!</div>
      <input className="clipboard" />
    </div>
  );
}
