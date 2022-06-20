import React, { useEffect } from 'react';
import axios from 'axios';

function LandingPage() {
  useEffect(() => {
    fn();
    async function fn() {
      const fetched = await axios.get('/api');
      console.log(fetched);
    }
  }, []);

  return (
    <>
      <div>LandingPage</div>
    </>
  );
}

export default LandingPage;
