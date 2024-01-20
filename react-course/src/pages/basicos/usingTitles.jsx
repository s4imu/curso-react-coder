import Title from "../../components/Title";

export default function usingTitle() {
  return (
    <div>
      <Title main="Sign Up Page" secondary="Include, change, exclude things" />
      <Title
        main="Login Page"
        secondary="Enter your email and password"
        small={false} // valores diferente de string passamos em chave
      />
      <Title
        main="Login Page"
        secondary="Enter your email and password"
        small // valores diferente de string passamos em chave
      />
    </div>
  );
}
