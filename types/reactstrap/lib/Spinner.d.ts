import * as React from 'react';
import { CSSModule } from '../index';

export type SpinnerProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  children?: string;
  className?: string;
  color?: string;
  cssModule?: CSSModule;
  size?: string;
  type?: string;
} & T;

declare class Spinner<T = {[key: string]: any}> extends React.Component<SpinnerProps<T>> {}
export default Spinner;
