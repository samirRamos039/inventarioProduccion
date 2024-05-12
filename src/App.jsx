import slicebar from "./slicebar"

function App() {

  return (
    <div class="wrapper">
      <aside id="sidebar">
        <div class="d-flex">
          <button id="toggle-btn" type="button">
            <i class="lni lni-grid-alt"></i>
          </button>
          <div class="sidebar-logo">
            <a href="#">CodzSword</a>
          </div>
        </div>
        <ul class="sidebar-nav">
          <li class="sidebar-item">
            <a href="#" class="sidebar-link">
              <i class="lni lni-users"></i>
              <span>PROFILE</span>
            </a>
          </li>
          <li class="sidebar-item">
            <a href="#" class="sidebar-link">
              <i class="lni lni-calendar"></i>
              <span>TASK</span>
            </a>
          </li>
          <li class="sidebar-item">
            <a href="#" class="sidebar-link has-dropdown collapsed" data-bs-toggle="collapse"
              data-bs-target="#auth" aria-expanded="false" aria-controls="auth">
              <i class="lni lni-protection"></i>
              <samp>Auth</samp>
            </a>
            <ul id="auth" class="sidebar-dropdown list-unstyled collapsed" data-bs-parent="sidebar">
              <li class="sidebar-item">
                <a href="#" class="sidebar-link">login</a>
              </li>
              <li class="sidebar-item">
                <a href="#" class="sidebar-link">register</a>
              </li>
            </ul>
          </li>
          <li class="sidebar-item">
            <a href="#" class="sidebar-link has-dropdown collapsed" data-bs-toggle="collapse"
              data-bs-target="#multi" aria-expanded="false" aria-controls="multi">
              <i class="lni lni-layout"></i>
              <samp>Multilevel</samp>
            </a>
            <ul id="multi" class="sidebar-dropdown list-unstyled collapsed" data-bs-parent="sidebar">
              <li className="sidebar-item">
                <a href="#" class="sidebar-link has-dropdown collapsed" data-bs-toggle="collapse"
                  data-bs-target="#multi-two" aria-expanded="false" aria-controls="multi-two">
                  Tow links
                </a>
              </li>
            </ul>
          </li>
        </ul>

      </aside>
    </div>
  )
}

export default App
