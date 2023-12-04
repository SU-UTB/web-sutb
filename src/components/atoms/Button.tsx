import { classNames } from '../../utils';

type Props = { text: string; size: 'sm' | 'md' | 'lg'; variant: 'primary' | 'gray' | 'white' } & {
  type: 'link';
  href: string;
};

export const Button = (props: Props) => {
  const className = classNames(
    'font-bold tracking-wide rounded-lg transition duration-300',
    props.size === 'sm' && 'py-2.5 px-6 text-base',
    props.size === 'md' && 'py-3 px-8 text-lg',
    props.size === 'lg' && 'py-3 sm:py-4 px-8 sm:px-9 text-lg sm:text-xl',
    props.variant === 'primary' &&
      'bg-primary-600 text-primary-50 shadow-lg shadow-primary-600/20 hover:bg-primary-550 hover:shadow-primary-550/50 hover:text-white',
    props.variant === 'gray' &&
      'bg-stone-200 shadow-sm shadow-stone-300/20 text-stone-700 hover:bg-stone-300 hover:text-stone-900 hover:shadow',
    props.variant === 'white' &&
      'bg-stone-50 text-primary-600 hover:text-primary-550 hover:bg-white shadow hover:shadow-lg',
  );

  if (props.type === 'link')
    return (
      <a className={className} href={props.href}>
        {props.text}
      </a>
    );
};
