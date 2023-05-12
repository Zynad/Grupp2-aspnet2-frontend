import { useState } from "react";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        New Password:
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </label>
      <label>
        Confirm Password:
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </label>
      <button type="submit">Reset Password</button>
    </form>
  );
}

export default ResetPassword;




//  // Skicka en POST-förfrågan till API:et för att återställa lösenordet
//  fetch("/api/resetpassword", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({ email: userEmail, token: userToken, newPassword }),
// })
//   .then((response) => {
//     if (response.ok) {
//       // Om lösenordet har återställts, skicka användaren till inloggningsidan
//       history.push("/login");
//     } else {
//       throw new Error("Failed to reset password");
//     }
//   })
//   .catch((error) => console.log(error));