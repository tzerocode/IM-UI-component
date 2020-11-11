import React from "react";
import PropTypes from "prop-types";
import StyledNoteList, { Notes } from "./style";

import FilterList from "components/FilterList";
import NoteCard from "components/NoteCard";

import useStaggeredList from "hooks/useStaggeredList";
import { animated } from "react-spring";

import notesData from 'data/notes'

function NoteList({ children, ...rest }) {
  const trailAnimes = useStaggeredList(10);
  return (
    <StyledNoteList {...rest}>
      <FilterList
        options={["最新笔记优先", "有改动的优先"]}
        actionLabel="添加笔记"
      >
        <Notes>
          {notesData.map((note, i) => (
            <animated.div key={note.id} style={trailAnimes[i]}>
              <NoteCard key={note.id} note={note} />
            </animated.div>
          ))}
        </Notes>
      </FilterList>
    </StyledNoteList>
  );
}

NoteList.propTypes = {
  children: PropTypes.any,
};

export default NoteList;
