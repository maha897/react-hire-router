import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function PeopleListItem(props) {
  const { person } = props;

  return (
    <li className="container">
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage && (
        <div className="details">
          <p>Wage: £{person.wage}</p>
          <Link className="link-button" to={`/view/${person.id.value}/edit`}>Edit</Link>
        </div>
      )}
      <Link className="link-button" to={`/view/${person.id.value}`}>View profile</Link>
    </li>
  );
}

PeopleListItem.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.object,
    wage: PropTypes.number,
    id: PropTypes.number,
  }),
};

export default PeopleListItem;
