import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './chores.css'

const Chores = (props) => {
  return (
    <div className="chores-container">
      <Helmet>
        <title>Chores - The Good Housemate</title>
        <meta property="og:title" content="Chores - The Good Housemate" />
      </Helmet>
      <div className="chores-container01">
        <header data-thq="thq-navbar" className="chores-navbar-interactive">
          <Link to="/" className="chores-navlink">
            <img
              alt="logo"
              src="/playground_assets/housemate-1500w.png"
              className="chores-logo"
            />
          </Link>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="chores-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="chores-nav"
            >
              <Link to="/calendar" className="chores-navlink1">
                <span>Calendar</span>
                <br></br>
              </Link>
              <Link to="/chores" className="chores-navlink2">
                Chores
              </Link>
              <Link to="/costsplitting" className="chores-navlink3">
                Costs
              </Link>
              <Link to="/messaging" className="chores-navlink4">
                Messaging
              </Link>
            </nav>
          </div>
          <div data-thq="thq-navbar-btn-group" className="chores-btn-group">
            <button className="button chores-button">
              <svg viewBox="0 0 1024 1024" className="chores-icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </button>
            <button className="button chores-register">
              <svg
                viewBox="0 0 731.4285714285713 1024"
                className="chores-icon02"
              >
                <path d="M731.429 799.429c0 83.429-54.857 151.429-121.714 151.429h-488c-66.857 0-121.714-68-121.714-151.429 0-150.286 37.143-324 186.857-324 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c149.714 0 186.857 173.714 186.857 324zM585.143 292.571c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429z"></path>
              </svg>
            </button>
          </div>
          <div data-thq="thq-burger-menu" className="chores-burger-menu">
            <svg viewBox="0 0 1024 1024" className="chores-icon04">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="chores-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="chores-nav1"
            >
              <div className="chores-container02">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="chores-image"
                />
                <div data-thq="thq-close-menu" className="chores-menu-close">
                  <svg viewBox="0 0 1024 1024" className="chores-icon06">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="chores-nav2"
              >
                <span className="chores-text02">About</span>
                <span className="chores-text03">Features</span>
                <span className="chores-text04">Pricing</span>
                <span className="chores-text05">Team</span>
                <span className="chores-text06">Blog</span>
              </nav>
              <div className="chores-container03">
                <button className="chores-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div className="chores-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="chores-icon08"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="chores-icon10"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="chores-icon12"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="chores-container04">
        <div className="chores-container05">
          <div className="chores-container06">
            <div className="chores-container07">
              <div
                data-thq="thq-dropdown"
                className="chores-thq-dropdown list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="chores-dropdown-toggle"
                >
                  <span className="chores-text07">Sort By</span>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="chores-dropdown-arrow"
                  >
                    <svg viewBox="0 0 1024 1024" className="chores-icon14">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="chores-dropdown-list"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="chores-dropdown list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="chores-dropdown-toggle01"
                    >
                      <span className="chores-alphabetically">
                        <span>Alphabetically</span>
                        <br></br>
                      </span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="chores-dropdown01 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="chores-dropdown-toggle02"
                    >
                      <span className="chores-text10">
                        <span>Priority</span>
                        <br></br>
                      </span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="chores-dropdown02 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="chores-dropdown-toggle03"
                    >
                      <span className="chores-text13">
                        <span>Room</span>
                        <br></br>
                      </span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="chores-dropdown03 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="chores-dropdown-toggle04"
                    >
                      <span className="chores-text16">Assigned Person</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="chores-dropdown04 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="chores-dropdown-toggle05"
                    >
                      <span className="chores-text17">Date Due</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                data-thq="thq-dropdown"
                className="chores-thq-dropdown1 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="chores-dropdown-toggle06"
                >
                  <span className="chores-text18">Filters</span>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="chores-dropdown-arrow1"
                  >
                    <svg viewBox="0 0 1024 1024" className="chores-icon16">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="chores-dropdown-list1"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="chores-dropdown05 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="chores-dropdown-toggle07"
                    >
                      <span className="chores-text19">Priority</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="chores-dropdown06 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="chores-dropdown-toggle08"
                    >
                      <div className="chores-container08">
                        <input type="checkbox" checked="true" />
                        <svg viewBox="0 0 1024 1024" className="chores-icon18">
                          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                        </svg>
                      </div>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="chores-dropdown07 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="chores-dropdown-toggle09"
                    >
                      <div className="chores-container09">
                        <input type="checkbox" checked="true" />
                        <svg viewBox="0 0 1024 1024" className="chores-icon20">
                          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                        </svg>
                        <svg viewBox="0 0 1024 1024" className="chores-icon22">
                          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                        </svg>
                      </div>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="chores-dropdown08 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="chores-dropdown-toggle10"
                    >
                      <div className="chores-container10">
                        <input type="checkbox" checked="true" />
                        <svg viewBox="0 0 1024 1024" className="chores-icon24">
                          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                        </svg>
                        <svg viewBox="0 0 1024 1024" className="chores-icon26">
                          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                        </svg>
                        <svg viewBox="0 0 1024 1024" className="chores-icon28">
                          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                        </svg>
                      </div>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="chores-dropdown09 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="chores-dropdown-toggle11"
                    >
                      <span className="chores-text20">Room</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="chores-dropdown10 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="chores-dropdown-toggle12"
                    >
                      <div className="chores-container11">
                        <input type="checkbox" checked="true" />
                        <span className="chores-text21">Room</span>
                      </div>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="chores-dropdown11 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="chores-dropdown-toggle13"
                    >
                      <div className="chores-container12">
                        <input type="checkbox" checked="true" />
                        <span className="chores-text22">Room</span>
                      </div>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="chores-dropdown12 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="chores-dropdown-toggle14"
                    >
                      <div className="chores-container13">
                        <input type="checkbox" checked="true" />
                        <span className="chores-text23">Room</span>
                      </div>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="chores-dropdown13 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="chores-dropdown-toggle15"
                    >
                      <span className="chores-text24">Person</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="chores-dropdown14 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="chores-dropdown-toggle16"
                    >
                      <div className="chores-container14">
                        <input type="checkbox" checked="true" />
                        <span className="chores-text25">Person</span>
                      </div>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="chores-dropdown15 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="chores-dropdown-toggle17"
                    >
                      <div className="chores-container15">
                        <input type="checkbox" checked="true" />
                        <span className="chores-text26">Person</span>
                      </div>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="chores-dropdown16 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="chores-dropdown-toggle18"
                    >
                      <div className="chores-container16">
                        <input type="checkbox" checked="true" />
                        <span className="chores-text27">Person</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <button className="chores-button1 button">Add Chore</button>
        </div>
        <div className="chores-container17">
          <ul className="list">
            <li className="chores-li list-item">
              <span>Text</span>
            </li>
            <li className="chores-li1 list-item">
              <span>Text</span>
            </li>
            <li className="chores-li2 list-item">
              <span>Text</span>
            </li>
            <li className="chores-li3 list-item">
              <span>Text</span>
            </li>
            <li className="chores-li4 list-item">
              <span>Text</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Chores
