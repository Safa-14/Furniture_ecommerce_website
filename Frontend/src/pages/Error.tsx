import { Container } from "react-bootstrap"
import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom"

const Error = () => {
  const error = useRouteError();  //UseRouteError is used to acces to statustext in error section in router to check th parama
  let errorStatus: number;
  let errorStatusText: string;

  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorStatusText = error.statusText;
  }else{
    errorStatus = 404;
    errorStatusText = "Page Not Found";
  }
  return (
    <Container className="notFound">
      <h1>{errorStatus}</h1>
      <p>{errorStatusText}</p>
      <Link to="/" replace={true}>
        How about going back to safety?
      </Link>
    </Container>
  )
}

export default Error
