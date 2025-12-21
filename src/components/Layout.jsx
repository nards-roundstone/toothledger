// src/components/Layout.jsx
import { NavLink } from "react-router-dom";

export default function Layout({ children }) {
    const linkStyle = ({ isActive }) => ({
        marginRight: "16px",            // spacing between links
        fontSize: "12px",
        fontWeight: 500,
        textDecoration: isActive ? "underline" : "none",
        color: isActive ? "#2563eb" : "#6b7280", // blue when active, gray when inactive
        cursor: "pointer",
    });

    return (
        <div style={{ minHeight: "100vh", backgroundColor: "#f8fafc", color: "#0f172a" }}>
            {/* Header */}
            <header
                style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 50,
                    backgroundColor: "rgba(255,255,255,0.9)",
                    backdropFilter: "blur(8px)",
                    borderBottom: "1px solid #e2e8f0",
                }}
            >
                <div style={{ maxWidth: "768px", margin: "0 auto", padding: "12px 16px" }}>
                    <h1
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            fontSize: "24px",
                            fontWeight: 600,
                            margin: 0,
                            marginBottom: "4px",
                        }}
                    >
                        🦷 <span>ToothLedger</span>
                    </h1>
                    <p style={{ fontSize: "11px", color: "#64748b", margin: 0, marginBottom: "8px" }}>
                        Chairside tooth map companion
                    </p>

                    {/* Nav */}
                    <nav style={{ display: "flex", flexWrap: "wrap", marginTop: "4px", marginBottom: "8px" }}>
                        <NavLink to="/clinic" style={linkStyle}>
                            Clinic Mode
                        </NavLink>
                        <NavLink to="/patient" style={linkStyle}>
                            Patient View
                        </NavLink>
                        <NavLink to="/qr" style={linkStyle}>
                            QR
                        </NavLink>
                    </nav>
                </div>
            </header>

            {/* Main content */}
            <main style={{ maxWidth: "768px", margin: "0 auto", padding: "24px 16px" }}>
                <div
                    style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "12px",
                        boxShadow: "0 1px 3px rgba(15, 23, 42, 0.08)",
                        padding: "16px",
                    }}
                >
                    {children}
                </div>
            </main>

            {/* Footer */}
            <footer
                style={{
                    maxWidth: "768px",
                    margin: "0 auto",
                    padding: "0 16px 32px",
                    fontSize: "11px",
                    color: "#94a3b8",
                }}
            >
                ToothLedger · simple FDI map patients can take home on their phone.
            </footer>
        </div>
    );
}
