import { useState } from 'react';

export default function useArray(...args) {
  const [items, setItems] = useState(args);

  const setItem = (i, value = null) => {
    const newItems = [...items];
    newItems[i] = value;
    setItems(newItems);
  };

  const push = (item) => {
    setItems([...items, item]);
  };

  return { items, setItems, setItem, push, $push: (item) => () => push(item) };
}
