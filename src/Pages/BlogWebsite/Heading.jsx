import React from 'react'

function Heading() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg  fixed-top ">
                <div class="container-fluid ">
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span><i class="fa-solid fa-bars navbar-icon"></i></span>
                  </button>
                  <a class="navbar-brand  fw-bolder" href="#"><span>N</span>oyon.</a>
                  <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto fs-5">
                      <li class="nav-item ">
                        <a class="nav-link text-center text-md-left" href="#">Home</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link text-center text-md-left" href="#about-me">About me</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link text-center text-md-left" href="#tutorial">Tutorial</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link text-center text-md-left" href="#feedback">Feedback</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link text-center text-md-left" href="#contact">Contact me</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
    </div>
  )
}

export default Heading