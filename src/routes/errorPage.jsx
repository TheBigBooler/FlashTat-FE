import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error)

    return (
        <Link to={"/"}><p>Something went wrong! Click here to return home.</p></Link>
    )
}

export default ErrorPage;