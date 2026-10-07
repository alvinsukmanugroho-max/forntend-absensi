import { FaHome, FaClipboardCheck, FaHistory, FaUser, FaSignOutAlt } from "react-icons/fa";

function Dashboard() {
  const nama = "Alvin";

  const sekarang = new Date().toLocaleTimeString("id-ID");

  return (
    <div className="d-flex">

      {/* Sidebar */}
      <div
        className="bg-primary text-white p-3"
        style={{ width: "250px", minHeight: "100vh" }}
      >
        <h3 className="mb-4">🍽 Restoran</h3>

        <ul className="nav flex-column">

          <li className="nav-item mb-3">
            <a href="#" className="nav-link text-white">
              <FaHome /> Dashboard
            </a>
          </li>

          <li className="nav-item mb-3">
            <a href="#" className="nav-link text-white">
              <FaClipboardCheck /> Absen Masuk
            </a>
          </li>

          <li className="nav-item mb-3">
            <a href="#" className="nav-link text-white">
              <FaHistory /> Riwayat
            </a>
          </li>

          <li className="nav-item mb-3">
            <a href="#" className="nav-link text-white">
              <FaUser /> Profil
            </a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link text-white">
              <FaSignOutAlt /> Logout
            </a>
          </li>

        </ul>
      </div>

      {/* Content */}
      <div className="container-fluid p-4">

        {/* Navbar */}
        <div className="d-flex justify-content-between align-items-center mb-4">

          <h2>Dashboard</h2>

          <div className="text-end">
            <strong>{nama}</strong>
            <br />
            <small>{sekarang}</small>
          </div>

        </div>

        {/* Card */}
        <div className="row">

          <div className="col-md-3">
            <div className="card shadow border-0">
              <div className="card-body">
                <h5>Hadir</h5>
                <h2>20</h2>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow border-0">
              <div className="card-body">
                <h5>Izin</h5>
                <h2>2</h2>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow border-0">
              <div className="card-body">
                <h5>Terlambat</h5>
                <h2>1</h2>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow border-0">
              <div className="card-body">
                <h5>Jam Kerja</h5>
                <h2>160 Jam</h2>
              </div>
            </div>
          </div>

        </div>

        {/* Jadwal */}
        <div className="card shadow border-0 mt-4">
          <div className="card-body">

            <h4>Jadwal Hari Ini</h4>

            <hr />

            <p>
              <strong>Shift :</strong> 09:00 - 21:00
            </p>

            <p>
              <strong>Status :</strong>
              <span className="badge bg-danger ms-2">
                Belum Absen
              </span>
            </p>

          </div>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;