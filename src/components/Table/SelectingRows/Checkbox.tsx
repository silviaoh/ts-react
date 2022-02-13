import React, { ChangeEvent } from "react";

type Props = {
  onChange?: ((e: ChangeEvent<Element>) => void) | undefined;
  checked?: boolean | undefined;
  title?: string | undefined;
  indeterminate?: boolean | undefined;
  // style?: CSSProperties | undefined;
  className?: string | undefined;
  role?: string | undefined;
};

export const Checkbox = React.forwardRef(
  ({ indeterminate, ...rest }: Props, ref: any) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return <input type="checkbox" ref={resolvedRef} {...rest} />;
  }
);
