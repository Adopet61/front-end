import React from "react";



function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="http://localhost:3000/">ADOPET</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="http://localhost:3000/">Anasayfa</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="http://localhost:3000/Adopt">Sahiplendir</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="http://localhost:3000/Donate">Bağış</a>
            </li>
            
            <li class="nav-item dropdown"  >
              <button class="btn btn-outline-success me-2" type="button"data-toggle="dropdown">
                Sahipsiz Dostlarımız
                </button>
              
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="http://localhost:3000/Animal/Cat">KEDİ</a></li>
                <li><a class="dropdown-item" href="http://localhost:3000/Animal/Dog">KÖPEK</a></li>
                <li><hr class="dropdown-divider"/>

                </li>
            <li><a class="dropdown-item" href="http://localhost:3000/Animal">Tüm Hayvanlar</a></li>


              </ul>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  );
}
export default Navbar;