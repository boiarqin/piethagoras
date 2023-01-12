import Image from "next/image";
import styles from "../styles/components/Sections.module.css";

const ContactHours = () => {
  return (
    <section
      className={`${styles.section} ${styles.fiftyFifty} ${styles["section-dough"]}`}
      aria-label="Contact Information and Hours"
    >
      <div className={styles.interior}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <h2>📞 Contact Info and Hours</h2>
            Give us a call today at (555) 123-4567!
            <ul>
              <li>Mon: 5:00 PM - 10:00 PM</li>
              <li>Tues: 5:00 PM - 10:00 PM</li>
              <li>Wed: 5:00 PM - 10:00 PM</li>
              <li>Thurs: 5:00 PM - 10:00 PM</li>
              <li>Fri: 5:00 PM - 10:00 PM</li>
              <li>Sat: 4:00 PM - 10:00 PM</li>
              <li>Sun: 4:00 PM - 10:00 PM</li>
            </ul>
          </div>
          <div className={styles.right}>
            <Image
              src="/images/home-contact.jpg" // Route of the image file
              height={800} // Desired size with correct aspect ratio
              width={600} // Desired size with correct aspect ratio
              alt="Neon sign advertising pizza"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHours;
