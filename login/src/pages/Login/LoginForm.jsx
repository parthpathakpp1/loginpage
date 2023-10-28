import React, { useState } from "react";
import styled from "styled-components";
import LeftImage from "./image.png";

const LoginContainer = styled.div`
  display: flex;
  height: 97vh;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
  padding: 23px 23px 23px 99px;
`;

const LeftSection = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 300px; /* Adjust the width as needed */
  height: auto; /* Adjust the height as needed */
  border-radius: 5px;
`;

const RightSection = styled.div`
  width: 745px;
  height: 571px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  justify-content: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin: 95px;

`;

const Heading = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 53px;
  margin: auto;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;
  background: linear-gradient(0deg, #04072f, #04072f),
    linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Title = styled.label`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 18px;
  margin-top: 23px;
`;

const Input = styled.input`
  margin-top: 23px;
  width: 100%;
  height: 56px;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
 
`;

const PasswordInputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const PasswordInput = styled.input`
  width: 100%;
  height: 56px;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
`;

const EyeIcon = styled.img`
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  width: 20px;
  height: 20px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: flex-start;
  margin: 10px 0;
  color: #737b86;
  font-size: 16px;
`;

const Button = styled.button`
  width: 538px;
  height: 56px;
  margin: auto;
  margin-top: 25px;
  border-radius: 8px;
  background: #1575a7;
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: center;
  cursor: pointer;
`;

const RegisterText = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  color: #000;
  margin-top: 25px;
  margin: auto;
`;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <LoginContainer>
      <LeftSection>
        <Image src={LeftImage} alt="placeholder" />
      </LeftSection>
      <RightSection>
        <LoginForm>
          <Heading>Login</Heading>
          <Title>Login ID</Title>
          <Input type="text" placeholder="Enter login ID" />
          <Title>Password</Title>
          <PasswordInputContainer>
            <PasswordInput
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <EyeIcon
              src={
                showPassword
                  ? "https://img.icons8.com/ios/452/visible.png"
                  : "https://img.icons8.com/ios/452/invisible.png"
              }
              alt="eye-icon"
              onClick={togglePasswordVisibility}
            />
          </PasswordInputContainer>
          <CheckboxContainer>
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember me</label>
          </CheckboxContainer>
          <CheckboxContainer>
            <input type="checkbox" id="agreeTerms" />
            <label htmlFor="agreeTerms">
              Agree to{" "}
              <span style={{ color: "orange", textDecoration: "underline" }}>
                Terms & Conditions
              </span>
            </label>
          </CheckboxContainer>
          <Button type="submit">Login</Button>
          <RegisterText>Don't have an account? Register</RegisterText>
        </LoginForm>
      </RightSection>
    </LoginContainer>
  );
};

export default Login;