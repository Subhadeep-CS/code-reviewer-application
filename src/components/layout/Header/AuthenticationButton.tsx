import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

const AuthenticationButton = () => {
  return (
    <>
      <SignedOut>
        <SignInButton>
          <Button variant="default">Sign In</Button>
        </SignInButton>

        <SignUpButton>
          <Button variant="secondary">Sign Up</Button>
        </SignUpButton>
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
};

export default AuthenticationButton;
