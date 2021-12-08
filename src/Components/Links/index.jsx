import { Link } from "react-router-dom";

export default function Links ({ label, to, }) {

  return (

    <Link to={to}>{label}</Link>
  )
}