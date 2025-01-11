import React, { useState, useEffect } from "react";
import { View } from "react-native";
import CoverScreen from "./assets/Screens/CoverScreen";
import LoginScreen from "./assets/Screens/LoginScreen";
import HomeScreen from "./assets/Screens/HomeScreen";

export default function App() {
  const [showCover, setShowCover] = useState(true); // Untuk mengatur tampilan CoverScreen
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Status login
  const [username, setUsername] = useState(""); // Menyimpan username

  useEffect(() => {
    // Menampilkan CoverScreen selama 3 detik
    const timer = setTimeout(() => setShowCover(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = (user) => {
    setUsername(user);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
  };

  if (showCover) {
    return <CoverScreen />;
  }

  return (
    <View style={{ flex: 1 }}>
      {isLoggedIn ? (
        <HomeScreen username={username} onLogout={handleLogout} />
      ) : (
        <LoginScreen onLogin={handleLogin} />
      )}
    </View>
  );
}
