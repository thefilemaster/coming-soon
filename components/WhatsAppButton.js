"use client";

import styles from "../styles/WhatsAppButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918050260636?text=Hi%2C%20I%20am%20interested%20in%20custom%20hospital%20printing.%20Please%20assist."
      className={styles.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />
    </a>
  );
}