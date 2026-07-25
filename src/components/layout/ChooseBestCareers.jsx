import React from "react";
import styles from "./ChooseBestCareers.module.css";

const ChooseBestCareers = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.textGroup}>
          <h1 className={styles.title}>Choose the best careers in Nepal (How to become).</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor
          </p>
        </div>

        {/* Social Share Icons */}
        <div className={styles.socialButtons}>
         <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialIcon} ${styles.facebook}`}
            aria-label="Share on Facebook"
            id = "facebook"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.6 13.78 5.6c1.1 0 2.25.2 2.25.2v2.47h-1.27c-1.23 0-1.62.77-1.62 1.56V12h2.78l-.44 3h-2.34v6.8c4.56-.93 8-4.96 8-9.8z" />
            </svg>
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialIcon} ${styles.twitter}`}
            aria-label="Share on Twitter"
            id="twitter"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.58 8.58 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ChooseBestCareers;