import styles from "./mainBanner.module.css";
import { useState } from "react";
import { signIn } from "next-auth/react";

// export default function LoginPage() {
//   return (
//     <div>
//     </div>
//   );
// }

export default function MainBanner({ showBanner, handleFunction }) {
  const stateBanner = showBanner
    ? styles.bannerContainer
    : styles.bannerContainerOff;

  return (
    <div className={stateBanner}>
      <div className={styles.logoContainer}>
        <img src="Logo.jpeg" alt="Logo" />
      </div>
      <div className={styles.bannerText}>
        <h1>Biblioteca</h1>
      </div>
      {/* <button className={styles.bannerButton} onClick={() => {signIn('google');handleFunction}}>Iniciar sesión con Google</button> */}

      <button onClick={handleFunction} className={styles.bannerButton}>
        Comenzar
      </button>
    </div>
  );
}
