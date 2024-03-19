import { useState } from "react";
import { sendRequest } from "../../utils/fetch";
import Input from "react-phone-number-input/input";
import "./subscribe-form.css";
import { useTranslation } from "react-i18next";

type SubscribeFormPropsType = {
  isPopup?: boolean;
  handleChange?: () => void;
};
const SubscribeForm = (props: SubscribeFormPropsType) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { t } = useTranslation();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const formData = {
      name,
      phoneNumber,
      sitename: "GiminiDigital",
    };

    sendRequest(formData);
    setName("");
    setPhoneNumber("");

    props.handleChange && props.handleChange();
  };

  const handlePhoneNumberChange = (value: string) => {
    setPhoneNumber(value);
  };

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };
  return (
    <form id="myform-forma" className="myform-forma" onSubmit={handleSubmit}>
      <div className="myform-bl__name">
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          className="myform-input myform-name"
          id="myform-name"
          minLength={2}
          maxLength={32}
          placeholder="Имя"
          autoComplete="off"
          name="name"
          required
        />
      </div>
      <div className="myform-bl__tel">
        <label htmlFor="myform-tel" className="myform-tel__lb">
          Пожалуйста, заполните поле!
        </label>
        <Input
          value={phoneNumber}
          className="myform-input myform-tel"
          id="myform-tel"
          placeholder="+7 (777) 000 20 00"
          autoComplete="off"
          name="number"
          required
          onChange={handlePhoneNumberChange}
        />
      </div>
      <div className="form-btn">
        <button className={props.isPopup ? "form-button" : "popup-button"}>
          {t("Submit application")}
        </button>
      </div>
    </form>
  );
};

export default SubscribeForm;
