import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>About</h6>
              <p class="text-justify">
                WEB3 Metamask merupakan <i>Technical test dari PT. Anura Teknologi Indonesia</i> 
                yang bisa menghubungkan akun wallet metamask anda dan juga bisa melihat secara 
                live cryptocurrency dengan update terbaru.
              </p>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">
                Copyright &copy; 2024 All Rights Reserved by Fajar Putra Pratama
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
