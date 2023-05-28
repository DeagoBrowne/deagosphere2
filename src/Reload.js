import React from 'react';

export default function Reset() {
  return (
    <div>
      <h3 className='reset' onClick={() => window.location.reload(false)}>Reload</h3>
    </div>
  );
}