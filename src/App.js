import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Welkom bij QorePlan</h1>
      <p>Een slimme SaaS-tool voor Workforce Management (WFM).</p>
      <nav style={{ marginTop: 20 }}>
        <Link to="/forecast">Forecast</Link> |{" "}
        <Link to="/schedule">Rooster</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/availability">Beschikbaarheid</Link>
      </nav>
    </div>
  );
}

function Forecast() {
  return <div style={{ padding: 20 }}><h2>Forecastmodule</h2><p>Bekijk verwachte capaciteitsbehoefte.</p></div>;
}

function Schedule() {
  return <div style={{ padding: 20 }}><h2>Roostermodule</h2><p>Genereer automatische roosters.</p></div>;
}

function Dashboard() {
  return <div style={{ padding: 20 }}><h2>Dagsturing Dashboard</h2><p>Bekijk realtime prestaties.</p></div>;
}

function Availability() {
  return <div style={{ padding: 20 }}><h2>Beschikbaarheid</h2><p>Bekijk en geef beschikbaarheid op.</p></div>;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forecast" element={<Forecast />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/availability" element={<Availability />} />
      </Routes>
    </Router>
  );
}