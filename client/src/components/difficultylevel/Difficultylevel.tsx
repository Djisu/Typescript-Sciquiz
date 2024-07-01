// Difficultylevel.tsx
import React, { useState, useEffect, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  createDifficultyLevel,
  deleteDifficultyLevel,
  loadDifficultyLevels,
} from '../../actions/difficulty_level';
import { setAlert } from '../../actions/alert.ts';
import { RootState } from '../../reducers';
import { DifficultyLevelState, DifficultyLevel } from '../../reducers/difficulty_level';
import { ThunkDispatch } from 'redux-thunk';

const Difficultylevel: React.FC = () => {
  const dispatch: ThunkDispatch<RootState, unknown, any> = useDispatch();
  
  // const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
  // const {difficultyLevels}: DifficultyLevelState = useTypedSelector((state) => state.difficultyLevels) ;

  const {difficultyLevels, loading, error}: DifficultyLevelState = useSelector((state: RootState) => state.difficultyLevels)


  console.log('Fetched difficultyLevels: ', difficultyLevels)

  useEffect(() => {
   console.log('in useEffect dispatch(loadDifficultyLevels())')

    dispatch(loadDifficultyLevels());
  }, [dispatch]);

  const [difficultylevelData, setDifficultylevel] = useState({
    level: '',
  });

  const { level } = difficultylevelData;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDifficultylevel({
      ...difficultylevelData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!difficultylevelData){
      return <div>No difficulty level provided</div>
    }

    dispatch(createDifficultyLevel(difficultylevelData));
    dispatch(loadDifficultyLevels());
    //dispatch(setAlert('Difficultylevel Creation Successful', 'success'));
  };

  const deleteHandler = (id: string) => {
    console.log('in deleteHandler id: ', id)

    if (window.confirm('Are you sure?')) {
      dispatch(deleteDifficultyLevel(id));
    }
  };

  return (
    <section className="container">
      <br />
      <br />
      <br />

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Difficulty Level:</label>
          <input
            type="text"
            name="level"
            value={level}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add difficulty level
        </button>
        <Link to="/dashboard" className="primary m-3">
          Go Back
        </Link>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>LEVEL</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {difficultyLevels.map((difficultyLevel: DifficultyLevel) => (
            <tr key={difficultyLevel._id}>
              <td>{difficultyLevel._id}</td>
              <td>{difficultyLevel.level}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => deleteHandler(difficultyLevel._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Difficultylevel;







// import React, { useState, useEffect, ChangeEvent, Dispatch } from 'react';
// import { Link } from 'react-router-dom';
// //import { useSelector } from 'react-redux';
// import { useSelector, TypedUseSelectorHook } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import {
//   createDifficultyLevel,
//   deleteDifficultyLevel,
//   loadDifficultyLevels,
// } from '../../actions/difficulty_level.tsx';
// import { setAlert } from '../../actions/alert.tsx';
// import { RootState } from '../../reducers/index.ts';
// import { AlertAction, setAlertValue } from '../../actions/action-types/alert.ts';
// import { DifficultyLevelAction } from '../../actions/action-types/difficultyLevel.ts';
// import { ThunkDispatch } from 'redux-thunk';
// import { DifficultyLevel } from '../../reducers/difficulty_level.ts';

// import { AnyAction } from 'redux';

// // interface DifficultyLevel {
// //   _id: string;
// //   level: string;
// // }

// const Difficultylevel: React.FC<AlertAction> = () => {
//   const dispatch = useDispatch()
  
//   // const difficultyLevels = useSelector(
//   //   (state: RootState) => state.difficultyLevel.difficultyLevels
//   // );

//   // Option 2: Create a typed version of useSelector for convenience
// const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

// const difficultyLevels = useSelector((state: RootState) => state.difficultyLevel) as DifficultyLevel[];

// // Accessing _id property
// if (difficultyLevels.length > 0) {
//   const firstDifficultyLevelId = difficultyLevels[0]._id;
//   console.log(firstDifficultyLevelId);
// }

//   useEffect(() => {
//     dispatch<any>(loadDifficultyLevels());
//   }, [dispatch]) 


//   const [difficultylevelData, setDifficultylevel] = useState({
//     level: '',
//   });
  

//   const { level } = difficultylevelData;

//   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setDifficultylevel({
//       ...difficultylevelData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (!difficultylevelData) {
//       dispatch(setAlertValue('Difficultylevel Creation Successful', 'success', '01'));
//     }

//     interface IDifficultyLevel {
//       level: string;
//     }

//       dispatch<any>(createDifficultyLevel(difficultylevelData));
//     //dispatch(createDifficultyLevelValue(difficultylevelData));
//   };

//   const deleteHandler = (id: string) => {
//     console.log('in deleteHandler');

//     interface IDifficultyLevel {
//       id: string;
//       level: string;
//     }

//     if (window.confirm('Are you sure?')) {
//       console.log('id:', id);
//       dispatch<any>(deleteDifficultyLevel(id));
//     }
//   };

//   return (
//     <section className="container">
//       <br />
//       <br />
//       <br />

//       <form className="form" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Difficulty Level:</label>
//           <input
//             type="text"
//             name="level"
//             value={level}
//             onChange={handleInputChange}
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Add difficulty level
//         </button>
//         <Link to="/dashboard" className="primary m-3">
//           Go Back
//         </Link>
//       </form>

//       <table className="table">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>LEVEL</th>
//             <th>ACTION</th>
//           </tr>
//         </thead>
//         <tbody>
//           {difficultyLevels.map((difficultyLevel: DifficultyLevel, index: number) => (
//             <tr key={difficultyLevel._id}>
//               <td>{difficultyLevel._id}</td>
//               <td>{difficultyLevel.level}</td>
//               <td>
//                 <button
//                   type="button"
//                   className="small"
//                   onClick={() => deleteHandler(difficultyLevel._id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </section>
//   );
// };

// export default Difficultylevel;
// //
