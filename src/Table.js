//

import React from "react";

const people = [
  {
    name: "James",
    age: 31,
    occup: "bodybuilder",
    details:
      "cscsc sc fcsfv dfdfbdbdvd dvd v dvdvfdvdvdsvvvvvvvvvvvvvvvvvvvvvvvvvvvvvfdvdvs dffffffffffff",
  },
  {
    name: "John",
    age: 45,
    occup: "dancer",
    details:
      "cscscsc cssssssssssssssscs scssssssssssssssssssssss kslklcclcmlkmcl",
  },
  {
    name: "Paul",
    age: 65,
    occup: "footballer",
    details: "dvfdf kkkkkkkkkkkkkkkkkk;; ;dvdvkv dmvml;m;",
  },
  {
    name: "Ringo",
    age: 49,
    occup: "developer",
    details: "scsffffffff f  fvvvvvvvvvv dvvvvvvvvvvv",
  },
  {
    name: "George",
    age: 34,
    occup: "singer",
    details:
      "scccccc sfdvdvd fffffsssdvds dsvvvvvvvv dvssssssssv dfffffffffffffsv",
  },
];

function Table() {
  return (
    <div>
      {people
        .filter((person) => person.occup)
        .map((Person1) => (
          <li>{Person1.occup}</li>
        ))}
    </div>
  );
}

export default Table;
