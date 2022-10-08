import { IHTag } from "./HTag.props";
import styles from './HTag.module.scss';
import classNames from 'classnames/bind';

export const HTag = ({ tag, children }: IHTag): JSX.Element => {
    const classNamesBind = classNames.bind(styles);
    const className = classNamesBind({h1: tag === 'h1', h2: tag === 'h2', h3: tag === 'h3'});
    
    return <div className={className}>{children}</div>;
};
