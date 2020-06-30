import React, { useState } from 'react';
import Diff from '../components/Diff.jsx';
import Atoms from '../components/Atoms.jsx';
import NavBar from '../components/NavBar.jsx';
import AtomTree from '../components/AtomTree.jsx';

// conditionally renders Diff and Atoms
const VisualContainer = ({ snapshots, oldSnap, newSnap, snapshotHistory }) => {
  const [tab, setTab] = useState('diff');
  const nav = {
    // diff render passing in the two snapshots that will be compared
    diff: <Diff oldSnap={oldSnap} newSnap={newSnap} />,
    // atoms render passing in the "atoms"
    atoms: <Atoms snapshots={snapshots} />,
    atomTree: (
      <AtomTree tab={tab} snapshotHistory={snapshotHistory} newSnap={newSnap} />
    ),
  };
  // useState hook to update the component to render in the container
  return (
    <div className='VisualContainer'>
      {/* render navbar wrapped in div */}
      <NavBar setTab={setTab} />
      {/* conditional render */}
      {nav[tab]}
    </div>
  );
};

export default VisualContainer;
