import AuthenticationButton from "../AuthenticationButton";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* <NavbarMenu /> */}
      <div className="w-fit">
        <AuthenticationButton />
      </div>
    </div>
  );
};

export default Navbar;
