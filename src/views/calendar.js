import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './calendar.css'

const Calendar = (props) => {
  return (
    <div className="calendar-container">
      <Helmet>
        <title>Calendar - The Good Housemate</title>
        <meta property="og:title" content="Calendar - The Good Housemate" />
      </Helmet>
      <div className="calendar-container01">
        <header data-thq="thq-navbar" className="calendar-navbar-interactive">
          <Link to="/" className="calendar-navlink">
            <img
              alt="logo"
              src="/playground_assets/housemate-1500w.png"
              className="calendar-logo"
            />
          </Link>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="calendar-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="calendar-nav"
            >
              <Link to="/calendar" className="calendar-navlink1">
                <span>Calendar</span>
                <br></br>
              </Link>
              <Link to="/chores" className="calendar-navlink2">
                Chores
              </Link>
              <Link to="/costsplitting" className="calendar-navlink3">
                Costs
              </Link>
              <Link to="/messaging" className="calendar-navlink4">
                Messaging
              </Link>
            </nav>
          </div>
          <div data-thq="thq-navbar-btn-group" className="calendar-btn-group">
            <button className="button calendar-button">
              <svg viewBox="0 0 1024 1024" className="calendar-icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </button>
            <button className="button calendar-register">
              <svg
                viewBox="0 0 731.4285714285713 1024"
                className="calendar-icon02"
              >
                <path d="M731.429 799.429c0 83.429-54.857 151.429-121.714 151.429h-488c-66.857 0-121.714-68-121.714-151.429 0-150.286 37.143-324 186.857-324 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c149.714 0 186.857 173.714 186.857 324zM585.143 292.571c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429z"></path>
              </svg>
            </button>
          </div>
          <div data-thq="thq-burger-menu" className="calendar-burger-menu">
            <svg viewBox="0 0 1024 1024" className="calendar-icon04">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="calendar-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="calendar-nav1"
            >
              <div className="calendar-container02">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="calendar-image"
                />
                <div data-thq="thq-close-menu" className="calendar-menu-close">
                  <svg viewBox="0 0 1024 1024" className="calendar-icon06">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="calendar-nav2"
              >
                <span className="calendar-text02">About</span>
                <span className="calendar-text03">Features</span>
                <span className="calendar-text04">Pricing</span>
                <span className="calendar-text05">Team</span>
                <span className="calendar-text06">Blog</span>
              </nav>
              <div className="calendar-container03">
                <button className="calendar-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div className="calendar-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="calendar-icon08"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="calendar-icon10"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="calendar-icon12"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="calendar-container04">
        <div className="calendar-container05">
          <div className="calendar-container06"></div>
        </div>
        <div className="calendar-container07">
          <div className="calendar-container08">
            <div className="calendar-container09">
              <span className="calendar-text07">12AM</span>
            </div>
            <div className="calendar-container10"></div>
          </div>
          <div className="calendar-container11">
            <div className="calendar-container12">
              <span className="calendar-text08">1AM</span>
            </div>
            <div className="calendar-container13"></div>
          </div>
          <div className="calendar-container14">
            <div className="calendar-container15">
              <span className="calendar-text09">2AM</span>
            </div>
            <div className="calendar-container16"></div>
          </div>
          <div className="calendar-container17">
            <div className="calendar-container18">
              <span className="calendar-text10">3AM</span>
            </div>
            <div className="calendar-container19"></div>
          </div>
          <div className="calendar-container20">
            <div className="calendar-container21">
              <span className="calendar-text11">4AM</span>
            </div>
            <div className="calendar-container22"></div>
          </div>
          <div className="calendar-container23">
            <div className="calendar-container24">
              <span className="calendar-text12">5AM</span>
            </div>
            <div className="calendar-container25"></div>
          </div>
          <div className="calendar-container26">
            <div className="calendar-container27">
              <span className="calendar-text13">6AM</span>
            </div>
            <div className="calendar-container28"></div>
          </div>
          <div className="calendar-container29">
            <div className="calendar-container30">
              <span className="calendar-text14">7AM</span>
            </div>
            <div className="calendar-container31"></div>
          </div>
          <div className="calendar-container32">
            <div className="calendar-container33">
              <span className="calendar-text15">8AM</span>
            </div>
            <div className="calendar-container34"></div>
          </div>
          <div className="calendar-container35">
            <div className="calendar-container36">
              <span className="calendar-text16">9AM</span>
            </div>
            <div className="calendar-container37"></div>
          </div>
          <div className="calendar-container38">
            <div className="calendar-container39">
              <span className="calendar-text17">10AM</span>
            </div>
            <div className="calendar-container40"></div>
          </div>
          <div className="calendar-container41">
            <div className="calendar-container42">
              <span className="calendar-text18">11AM</span>
            </div>
            <div className="calendar-container43"></div>
          </div>
          <div className="calendar-container44">
            <div className="calendar-container45">
              <span className="calendar-text19">12PM</span>
            </div>
            <div className="calendar-container46"></div>
          </div>
          <div className="calendar-container47">
            <div className="calendar-container48">
              <span className="calendar-text20">1PM</span>
            </div>
            <div className="calendar-container49"></div>
          </div>
          <div className="calendar-container50">
            <div className="calendar-container51">
              <span className="calendar-text21">2PM</span>
            </div>
            <div className="calendar-container52"></div>
          </div>
          <div className="calendar-container53">
            <div className="calendar-container54">
              <span className="calendar-text22">3PM</span>
            </div>
            <div className="calendar-container55"></div>
          </div>
          <div className="calendar-container56">
            <div className="calendar-container57">
              <span className="calendar-text23">4PM</span>
            </div>
            <div className="calendar-container58"></div>
          </div>
          <div className="calendar-container59">
            <div className="calendar-container60">
              <span className="calendar-text24">5PM</span>
            </div>
            <div className="calendar-container61"></div>
          </div>
          <div className="calendar-container62">
            <div className="calendar-container63">
              <span className="calendar-text25">6PM</span>
            </div>
            <div className="calendar-container64"></div>
          </div>
          <div className="calendar-container65">
            <div className="calendar-container66">
              <span className="calendar-text26">7PM</span>
            </div>
            <div className="calendar-container67"></div>
          </div>
          <div className="calendar-container68">
            <div className="calendar-container69">
              <span className="calendar-text27">8PM</span>
            </div>
            <div className="calendar-container70"></div>
          </div>
          <div className="calendar-container71">
            <div className="calendar-container72">
              <span className="calendar-text28">9PM</span>
            </div>
            <div className="calendar-container73"></div>
          </div>
          <div className="calendar-container74">
            <div className="calendar-container75">
              <span className="calendar-text29">10PM</span>
            </div>
            <div className="calendar-container76"></div>
          </div>
          <div className="calendar-container77">
            <div className="calendar-container78">
              <span className="calendar-text30">11PM</span>
            </div>
            <div className="calendar-container79"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calendar
