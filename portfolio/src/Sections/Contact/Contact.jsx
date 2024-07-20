import styles from "../Contact/ContactStyles.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form action="">
        <div className="fromGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="fromGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>

        <div className="fromGroup">
          <label htmlFor="mobile" hidden>
            Email
          </label>
          <input
            type="number"
            name="number"
            id="number"
            placeholder="Ph Number"
            required
          />
        </div>
        <div className="fromGroup">
          <label htmlFor="message" hidden>
            Description
          </label>
          <textarea
            name="message"
            id="text"
            placeholder="Description"
            required
          ></textarea>
        </div>
        <input type="submit" className="hover btn" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
