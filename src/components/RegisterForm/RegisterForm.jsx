const RegisterForm = () => {
  return (
    <form>
      <label>
        Email:
        <input required type="email" name="email" autoComplete="off" />
      </label>
      <label>
        Password:
        <input required type="text" name="password" autoComplete="off" />
      </label>
      <label>
        Repeat password:
        <input required type="text" name="repeat" autoComplete="off" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
