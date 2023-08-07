import React, { FC } from 'react';
import { PreloaderProps } from './preloderTypes';
import clsx from 'clsx';
import './preloader.scss';

const Preloader: FC<PreloaderProps> = (props) => {
  const { height = '100%', primary = false } = props;

  return (
    <div className={'dk-preloader-mini'} style={{ height: height }}>
      <div className={clsx(primary ? 'dk-loader dk-loader-primary' : 'dk-loader dk-loader-secondary')}>
        <svg viewBox="0 0 80 80">
          <rect x="8" y="8" width="64" height="64" />
        </svg>
      </div>
    </div>
  );
};

export default Preloader;
