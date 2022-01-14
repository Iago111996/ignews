import React from "react";

import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import { useSession, signIn, signOut } from "next-auth/react";

import styles from "./styles.module.scss";

export function SigInButton() {
  const { data: Session } = useSession();
  console.log(Session);

  return Session ? (
    <button
      type="button"
      className={styles.sigInButton}
      onClick={() => signOut()}
    >
      <FaGithub color="#04D361" />

      {Session.user.name}

      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.sigInButton}
      onClick={() => signIn("github")}
    >
      <FaGithub color="#EBA417" />
      Sig In with Github
    </button>
  );
}
