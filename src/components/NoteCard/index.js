import React from "react";
import PropTypes from "prop-types";
import StyledNoteCard, {
  NoteImage,
  NoteTitle,
  NoteExcerpt,
  NotePublishTime,
} from "./style";

// import note1 from "assets/images/note-1.jpg";

function NoteCard({ note, children, ...rest }) {
  return (
    <StyledNoteCard {...rest}>
      <NoteImage src={note.image} />
      <NoteTitle>{note.title}</NoteTitle>
      <NoteExcerpt>{note.excerpt}</NoteExcerpt>
      <NotePublishTime>{note.publishedAt}</NotePublishTime>
    </StyledNoteCard>
  );
}

NoteCard.propTypes = {
  children: PropTypes.any,
};

export default NoteCard;
