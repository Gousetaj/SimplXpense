import { useState } from "react";
import { useAuthStore } from "@/stores/auth";
import { useNavigate } from "react-router-dom";

function SideLogin() {
  const login = useAuthStore((s) => s.login);
const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

const handleLogin = async () => {
  const success = await login(username, password);

  if (success) {
    navigate("/");
  }
};

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f5f5",
      }}
    >
      <div
        style={{
          width: 400,
          background: "#fff",
          padding: 32,
          borderRadius: 12,
          boxShadow:
            "0 2px 4px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.12)",
        }}
      >
        <h2
          style={{
            marginBottom: 24,
            textAlign: "center",
            fontWeight: 500,
            color: "#333",
          }}
        >
          Sign In
        </h2>

        <div style={{ marginBottom: 16 }}>
          <label
            style={{
              display: "block",
              marginBottom: 6,
              fontSize: 14,
              color: "#666",
            }}
          >
            Username
          </label>

          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #dcdcdc",
              borderRadius: 6,
              fontSize: 14,
              boxSizing: "border-box",
            }}
          />
        </div>

        <div style={{ marginBottom: 24 }}>
          <label
            style={{
              display: "block",
              marginBottom: 6,
              fontSize: 14,
              color: "#666",
            }}
          >
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #dcdcdc",
              borderRadius: 6,
              fontSize: 14,
              boxSizing: "border-box",
            }}
          />
        </div>

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "12px",
            border: "none",
            borderRadius: 6,
            background: "#1976d2",
            color: "#fff",
            fontSize: 15,
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default SideLogin;