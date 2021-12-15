import { Link } from "react-router-dom";
import { Container } from "./style";

export default function Links({ label, to }) {
  return (
    <Container>
      <Link to={to}>{label}</Link>
    </Container>
  );
}
