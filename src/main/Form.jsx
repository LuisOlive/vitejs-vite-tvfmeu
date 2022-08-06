import useArray from './useArray';
import usePrevent from './usePrevent';
import _ from 'lodash';
import { useState } from 'react';

export default function Form() {
  const { items, setItems, setItem, push } = useArray(
    'name',
    'email',
    'password'
  );

  const handle = (e) => {
    const its = _(e.target)
      .filter(['type', 'text'])
      .map((x) => x.value)
      .value();

    setItems(its);
    console.log(items);
  };

  return (
    <form onSubmit={usePrevent(handle)}>
      {items.map((item, i) => (
        <input placeholder={item} name={item} key={i} />
      ))}

      <button onClick={$push('')}>+</button>
      <button type="submit">send</button>
    </form>
  );
}
