import {
  FormControl,
  FormLabel,
  Input,
  Alert,
  AlertIcon,
  FormHelperText,
  Button,
} from "@chakra-ui/react";
import { auth } from "../../../db/initDb";
import { useReducer } from "react";
import { reducer, initalState, handleSubmitSignUp, handleSignInSubmit } from "./LandingPageUtils";
import {useStore,  useUpdateStore} from '../../../context/ContextStore'
import "./LandingPage.css";

//'asd1234@gmail.com', password: 'Tiger1290'
function LandingPage() {
  const dispatch = useUpdateStore();
  const {store} =useStore();
  const [user, dispatchUser] = useReducer(reducer, initalState);

  const _handleSubmitSignUp = () => {
    handleSubmitSignUp({
      user,
      auth,
      dispatchUser,
    });
  };
  const handleChange = (e, key) => {
    dispatchUser({ type: "UPDATE", key, value: e.target.value });
  };

  const _handleSignInSubmit = () => {
    handleSignInSubmit({auth,user, dispatch,dispatchUser})
  };
  return (
    <div className="personal-dashboard-landing-page-container">
      <Alert status="info">
        <AlertIcon />
        For Sign up enter the email, password, re-password and hit sign up
        button For Sign In, just enter email and password and hit sign in button
      </Alert>
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input
          onChange={(e) => handleChange(e, "email")}
          type="email"
          value={user.email}
        />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          onChange={(e) => handleChange(e, "password")}
          value={user.password}
          placeholder="Password"
        />
        <FormLabel>ReType: Password</FormLabel>
        <Input
          type="password"
          onChange={(e) => handleChange(e, "retypePassword")}
          value={user.retypePassword}
          placeholder="Password"
        />
      </FormControl>
      {user?.alertMessage && (
        <Alert status={user.alertStatus}>
          <AlertIcon />
          {user?.alertMessage}
        </Alert>
      )}
      <div className="personal-dashboard-landing-page-container-buttonbar">
        <Button colorScheme="blue" onClick={_handleSubmitSignUp}>
          SIGN UP
        </Button>
        <Button colorScheme="blue" onClick={_handleSignInSubmit}>
          SIGN IN
        </Button>
      </div>
    </div>
  );
}

export default LandingPage;
