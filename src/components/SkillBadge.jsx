import PropTypes from 'prop-types';

const SkillBadge = ({ nombre }) => {
  return (
    <span className="badge bg-primary me-2 mb-2 p-2 fs-6">
      {nombre}
    </span>
  );
};

SkillBadge.propTypes = {
  nombre: PropTypes.string.isRequired,
};

export default SkillBadge;