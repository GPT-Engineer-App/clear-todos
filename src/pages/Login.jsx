import { useState, useContext } from "react";
import { Box, Input, Button, Heading } from "@chakra-ui/react";
import { AuthContext } from "../App.jsx";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setAuth } = useContext(AuthContext);

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      setAuth(true);
    }
  };

  return (
    <Box p={8}>
      <Heading mb={6}>Login</Heading>
      <Box mb={4}>
        <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} mb={4} />
        <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} mb={4} />
        <Button onClick={handleLogin} colorScheme="blue">
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
