import React from 'react';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';

function AllActor(props) {
  const isFull = useSelector((state) => state.aside.isFull);
  const match = useRouteMatch();
  return (
    <div className={`flex items-center`}>
      <table class="border-separate border border-green-800 table-auto">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Views</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Intro to CSS</td>
            <td>Adam</td>
            <td>858</td>
          </tr>
          <tr class="bg-emerald-200">
            <td>
              A Long and Winding Tour of the History of UI Frameworks and Tools
              and the Impact on Design
            </td>
            <td>Adam</td>
            <td>112</td>
          </tr>
          <tr>
            <td>Intro to JavaScript</td>
            <td>Chris</td>
            <td>1,280</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

AllActor.propTypes = {};

export default AllActor;
