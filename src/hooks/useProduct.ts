import { useEffect, useRef, useState } from "react";
import { InitialValues, onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);

    initialValues?.maxCount && newValue > initialValues?.maxCount
      ? setCounter(initialValues?.maxCount)
      : setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    if (!isMounted.current) return;
    else isMounted.current = true;
    setCounter(value);
  }, [value]);

  return {
    counter,
    maxCounter: initialValues?.maxCount,
    isMaxCountReached:
      !!initialValues?.maxCount && counter === initialValues?.maxCount,
    increaseBy,
    reset,
  };
};
