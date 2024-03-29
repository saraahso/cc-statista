import { CSSProperties } from 'react';
import styles from './polygon.module.scss';

interface PolygonProps {
  backgroundColor: string;
}

export default function Polygon(props: PolygonProps) {
  const { backgroundColor } = props;

  const style: CSSProperties = {
    backgroundColor: backgroundColor,
  };

  return <div className={styles.polygon} style={style}></div>;
}
