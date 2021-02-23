import PropTypes from 'prop-types';

export default function Page({ children, example }) {
  return (
    <div>
      <h2>Page component</h2>
      <h3>{example}</h3>
      {children}
    </div>
  );
}

Page.propTypes = {
  example: PropTypes.string,
  children: PropTypes.any,
};
