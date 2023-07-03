import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const Pagination = ({ showPerPage, onPagNav, total }) => {
  const [counter, setCounter] = useState(1);
  const [noOfbuttons, setNoOfButtons] = useState(
    Math.ceil(total / showPerPage)
  );
  // const [lastPage, setLastPage] = useState();

  useEffect(() => {
    const value = showPerPage * counter;
    onPagNav(value - showPerPage, value);
    // let lastElement = new Array(noOfbuttons)[new Array(noOfbuttons).length - 1];
    // console.log('value - showPerPage-->', value - showPerPage);
  }, [counter]);

  //   console.log('total/showPerPage-->',total/showPerPage);
  console.log('counter-->', counter);

  console.log('noOfbuttons-->', typeof noOfbuttons);

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
        {counter <= 1 ? (
          <></>
        ) : (
          <Button variant="outline-success" onClick={() => onbtnClick('prev')}>
            Previous
          </Button>
        )}

        {new Array(noOfbuttons).fill('').map((b, i) => {
          return (
            <Button
              variant={`outline-success ${i + 1 === counter ? 'active' : null}`}
              key={i}
              onClick={() => setCounter(i + 1)}
            >
              {i + 1}
            </Button>
          );
        })}
        {noOfbuttons === counter ? (
          <></>
        ) : (
          <Button variant="outline-success" onClick={() => onbtnClick('next')}>
            Next
          </Button>
        )}
      </div>
    </>
  );
};

export default Pagination;
