import React from "react";

export default function Contact() {
  return (
    <section>
      <h2>Contact</h2>
      <ul>
        <li>
          <i className="fas fa-globe"></i> Website:{" "}
          <a href="https://loremipsum.com//">www.loremipsum.com</a>
        </li>{" "}
        <li>
          <i className="fab fa-youtube"></i> YouTube:{" "}
          <a href="https://www.youtube.com">
            Web Development
          </a>
        </li>
      </ul>
    </section>
  );
}