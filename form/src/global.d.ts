import { ComponentProps, ComponentType } from "react";

declare module "react" {
  function memo<T extends ComponentType<unknown>>(
    Component: T,
    propsAreEqual?: (prev: Readonly<ComponentProps<T>>, next: Readonly<ComponentProps<T>>) => boolean,
  ): T;

  function forwardRef<T, C extends ComponentType<unknown>>(
    render: ForwardRefRenderFunction<T, Readonly<ComponentProps<C>>>,
  ): ForwardRefExoticComponent<PropsWithoutRef<C> & RefAttributes<T>>;
}
