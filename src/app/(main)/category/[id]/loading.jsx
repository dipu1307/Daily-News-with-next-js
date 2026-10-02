import { Spinner } from '@heroui/react';
import React from 'react';

const LoadingPage = () => {
    return (
      <div className='mt-7'>
        <div className="flex flex-col items-center gap-2">
          <Spinner size="xl" />
          <span className="text-xs text-muted">Next Category loading</span>
        </div>
      </div>
    );
};

export default LoadingPage;