import React, { useState } from "react";
import styled from "styled-components";
import LeftImage from './image.png'
const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
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
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 40px;
  border-radius: 10px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Heading = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 53px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;
  background: linear-gradient(0deg, #04072F, #04072F),
    linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 824px;
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
  width: 824px;
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
  align-items: flex-start;
  justify-content: flex-start; 
  margin: 10px 0;
  font-size: 16px;
`;

const Button = styled.button`
  width: 538px;
  height: 56px;
  margin: 10px 0;
  border-radius: 8px;
  background: #1575A7;
  color: #ffffff;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: center;
  cursor: pointer;
`;

const RegisterText = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
  background: linear-gradient(0deg, #F78719, #F78719),
    linear-gradient(0deg, #04072F, #04072F);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 10px;
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
          <Input type="text" placeholder="Enter login ID" />
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
            <label htmlFor="agreeTerms">Agree to Terms & Conditions</label>
          </CheckboxContainer>
          <Button type="submit">Login</Button>
          <RegisterText>Don't have an account? Register</RegisterText>
        </LoginForm>
      </RightSection>
    </LoginContainer>
  );
};

export default Login;
