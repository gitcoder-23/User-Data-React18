import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const Pagination = ({ showPerPage, onPagNav, total }) => {
  const [counter, setCounter] = useState(1);
  const [noOfbuttons, setNoOfButtons] = useState(
    Math.ceil(total / showPerPage)
  );

  useEffect(() => {
    const value = showPerPage * counter;
    onPagNav(value - showPerPage, value);
  }, [counter]);

  //   console.log('total/showPerPage-->',total/showPerPage);

  const onbtnClick = (type) => {
    if (type === 'prev') {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === 'next') {
      if (noOfbuttons === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <Button variant="outline-success" onClick={() => onbtnClick('prev')}>
          Previous
        </Button>
        {new Array(noOfbuttons).fill('').map((b, i) => (
          <Button
            variant={`outline-success ${i + 1 === counter ? 'active' : null}`}
            key={i}
          >
            {i + 1}
          </Button>
        ))}

        <Button variant="outline-success" onClick={() => onbtnClick('next')}>
          Next
        </Button>
      </div>
    </>
  );
};

export default Pagination;
