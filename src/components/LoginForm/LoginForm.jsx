const LoginForm = () => {
  return (
    <form>
      <label>
        Email:
        <input required type="email" name="email" autoComplete="off" />
      </label>
      <label>
        Password:
        <input required type="password" autoComplete="off" name="password" />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
