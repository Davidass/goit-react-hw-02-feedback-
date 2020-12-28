import PropTypes from 'prop-types';

const Notification = ({ message }) => <p>{message}</p>;

Notification.prototype = {
  message: PropTypes.string.isrquired,
};

export default Notification;
