import { useNavigate } from "react-router-dom";
import "./NavigateBackButton.css";
export default function NavigateBackButton() {
  const navigate = useNavigate();
  return (
    <button className="button" onClick={() => navigate(-1)}>
      Go Back
    </button>
  );
}
