import { Link } from 'react-router-dom';

export default function Eror404(props) {
  return (
    <div className="eror">
      <p>404</p>
      <p>Page not found</p>
      <p style={{ color: 'gray' }}>
        Go to page <Link to={props.way}>{props.page}</Link>
      </p>
    </div>
  );
}
