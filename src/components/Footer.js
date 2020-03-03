import React from "react";

export default function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <a href="/"> &copy; Community</a>
        </li>
        <li>
          <a href="/">Terms of Use</a>
        </li>
        <li>
          <a href="/">Privacy Policy</a>
        </li>
        <li>
          <a href="/">Contact Us</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="/">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fab fa-google-plus-g"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fab fa-google-play"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}
