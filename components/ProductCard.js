"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Product.module.css";

export default function ProductCard({ title, image, link }) {
  return (
    <Link href={link} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={title} width={300} height={200} />
      </div>
      <h4 className={styles.cardTitle}>{title}</h4>
    </Link>
  );
}