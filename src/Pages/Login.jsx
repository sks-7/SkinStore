import { useNavigate } from "react-router-dom";
import styles from "../Pages_Css/Login.module.css";
import { FcGoogle } from "react-icons/fc";
import { GrFacebook } from "react-icons/gr";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  ButtonGroup,
  Link,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, dispatch] = useContext(AuthContext);
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const handleClick = () => setShow(!show);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: `https://reqres.in/api/login`,
      method: "POST",
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        dispatch({
          type: "Login_success",
          token: res.data.token,
          // isAuth: true,
        });
        navigate("/");
        console.log(res);
      })
      .catch((err) => {
        dispatch({
          type: "Login_failure",
          // isError: true,
        });
        // alert("TRY AGAIN");
        console.log(err);
      });
  };
  const handleOnClick = (a) => {
    navigate(a);
  };

  const handleAutoLogin = () => {
    
    setEmail("eve.holt@reqres.in");
    setPassword("cityslicka");
  };



  console.log(state);
  return (
    <div className={styles.loginPage_LogoMainOutCon}>
      <div className={styles.loginPage_LogoMainCon}>
        <div className={styles.loginPage_Logodiv}>
          <img
            src="https://s1.thcdn.com/enterprise/assets/skstr-global-113e023e-ecc9-45df-abad-eb92ce1956c9-logo-default.svg"
            alt=""
            onClick={() => handleOnClick("/")}
          />
        </div>
      </div>

      <div className={styles.LoginForm_mainCont}>
        <div className={styles.LoginForm}>
          <p>Existing Customers</p>
          <form onSubmit={handleSubmit}>
            <FormControl isInvalid={state.isError} isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
              />
              {!state.isError ? (
                <FormHelperText marginTop="-10px" marginBottom="30px">
                  Enter the registered Email.
                </FormHelperText>
              ) : (
                <FormErrorMessage>Invalid Email.</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={state.isError} isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  value={password}
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              {!state.isError ? (
                <FormHelperText marginTop="-10px" marginBottom="30px">
                  Enter the correct password.
                </FormHelperText>
              ) : (
                <FormErrorMessage>Password is required.</FormErrorMessage>
              )}
            </FormControl>
            <Link>FORGOTTEN YOUR PASSWORD?</Link>

            <Button
              type="submit"
              backgroundColor="#2E3337"
              color="white"
              borderRadius={0}
              _hover={{ bg: "teal.600" }}
              w="full"
              marginTop="30px"
            >
              LOGIN
            </Button>

            <p style={{ textAlign: "left", marginTop: "30px" }}>
              Or, Continue with
            </p>
            <ButtonGroup variant="outline" spacing="30" marginTop="30px">
              <Button
                borderRadius={0}
                border="1px"
                borderColor="#2E3337"
                padding="25px"
                _hover={{ backgroundColor: "#f2f2f2", border: "none" }}
              >
                <GrFacebook className={styles.reacticons} />
                Facebook
              </Button>
              <Button
                borderRadius={0}
                border="1px"
                borderColor="#2E3337"
                _hover={{ backgroundColor: "#f2f2f2", border: "none" }}
                padding="25px"
                onClick={handleAutoLogin}
              >
                <FcGoogle className={styles.reacticons} />
                Google
              </Button>
            </ButtonGroup>
          </form>
        </div>
        <div className={styles.RegisterForm}>
          <p>New Customers</p>
          <Button
            backgroundColor="#2E3337"
            color="white"
            borderRadius={0}
            _hover={{ bg: "teal.600" }}
            onClick={() => handleOnClick("/register")}
          >
            REGISTER
          </Button>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;

// {
//     "email": "eve.holt@reqres.in",
//     "password": "cityslicka"
// }
