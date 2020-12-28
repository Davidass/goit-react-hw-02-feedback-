import s from './Container.module.css';
import propTypes from 'prop-types';

function Container({ children }) {
  return <div className={s.container}>{children}</div>;
}

Container.propTypes = {
  children: propTypes.node.isRequired,
};
export default Container;
