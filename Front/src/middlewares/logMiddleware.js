
const logMiddleware = (store) => (next) => (action) => {
  // todo
  next(action);
};

export default logMiddleware;
