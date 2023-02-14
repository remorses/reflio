import dynamic from 'next/dynamic';
import { UrlObject } from 'url';

type ButtonProps = {
  small?: any; 
  xsmall?: any; 
  medium?: any; 
  xlarge?: any; 
  large?: any; 
  primary?: any;
  secondary?: any; 
  gray?: any; 
  white?: any; 
  red?: any; 
  mobileFull?: any; 
  href?: string | UrlObject; 
  className?: any; 
  onClick?: any; 
  external?: any; 
  download?: any; 
  target?: any; 
  children?: any; 
  disabled?: any; 
  type?: string;
};

export const Button = (props: ButtonProps) => {
  const Link = dynamic(() => import('next/link'));

  let styles = 'relative inline-flex items-center justify-center font-semibold rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all';

  //Sizing styles
  if(props.small){
    styles = styles + ' px-4 py-2 text-sm md:text-base'
  } else if(props.xsmall){
    styles = styles + ' px-4 py-2 text-sm md:text-xs'
  } else if(props.medium){
    styles = styles + ' px-6 py-3 text-sm md:text-lg'
  } else if(props.xlarge){
    styles = styles + ' px-8 py-4 text-base md:text-2xl'
  } else {
    styles = styles + ' px-8 py-3 text-sm md:text-xl'
  }

  //Color styles
  if(props.secondary){
    styles = styles + ' text-white bg-secondary hover:bg-secondary-2'
  } else if(props.gray){
    styles = styles + ' text-gray-800 bg-gray-300 hover:bg-gray-400'
  } else if(props.white){
    styles = styles + ' bg-white hover:bg-gray-100'
  } else if(props.red){
    styles = styles + ' text-white bg-red-500 hover:bg-red-600'
  } else {
    styles = styles + ' bg-primary hover:bg-primary-2'
  }

  if(props.mobileFull){
    styles = styles + ' w-full sm:w-auto x'
  }

  if(props.href){
    return(
      <Link
        passHref
        href={props.href}
        className={`${styles} ${props.className ? props.className : ''}`}
        onClick={props.onClick && props.onClick}
        target={props.external ? '_blank' : ''}
        download={props.download && props.download}
      >
        {props.children && props.children}
      </Link>
    )
  } else {
    return(
      <button 
        disabled={props.disabled && props.disabled}
        onClick={props.onClick && props.onClick}
        className={`${styles} ${props.className ? props.className : ''}`}
      >
        {props.children && props.children}
      </button>
    )
  }
};

export default Button;