export default function usePrevent(callback = (e) => {}) {
  return (e) => {
    e.preventDefault();
    callback(e);
  };
}
