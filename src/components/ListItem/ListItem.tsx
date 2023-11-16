import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import { ArrowForwardIos } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/constans';
import './ListItem.css';

interface ExamListProps {
  date: string;
  exam: string;
  description: string;
  type: 'pendente' | 'realizado';
  fileImage: string | null;
  filePdf: string | null;
  id: string;
  onClickPermisson: boolean;
  onDelete: (id: string) => void;
}

export default function ExamListItem({
  date,
  exam,
  description,
  type,
  fileImage,
  filePdf,
  id,
  onClickPermisson,
  onDelete
}: ExamListProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(
      type === 'pendente'
        ? ROUTES.EDICAO_EXAMES_PENDENTES()
        : ROUTES.EDICAO_EXAMES_REALIZADOS(),
      { state: { date, description, id, fileImage, filePdf } }
    );
  };

  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    onDelete(id);

  };

  return (
    <div className="frame">
      <ListItem
        key={id}
        className="list-item"
        disableGutters
        secondaryAction={
          <>
            <IconButton className="delete-button" edge="end" aria-label="delete" onClick={handleDelete}>
              <svg
                width="19"
                viewBox="0 0 21 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="lixeira-icon"
              >
                <path
                  d="M1.92857 22.2222C1.92857 23.75 3.21429 25 4.78571 25H16.2143C17.7857 25 19.0714 23.75 19.0714 22.2222V8.33333C19.0714 6.80556 17.7857 5.55556 16.2143 5.55556H4.78571C3.21429 5.55556 1.92857 6.80556 1.92857 8.33333V22.2222ZM6.21429 8.33333H14.7857C15.5714 8.33333 16.2143 8.95833 16.2143 9.72222V20.8333C16.2143 21.5972 15.5714 22.2222 14.7857 22.2222H6.21429C5.42857 22.2222 4.78571 21.5972 4.78571 20.8333V9.72222C4.78571 8.95833 5.42857 8.33333 6.21429 8.33333ZM15.5 1.38889L14.4857 0.402778C14.2286 0.152778 13.8571 0 13.4857 0H7.51429C7.14286 0 6.77143 0.152778 6.51429 0.402778L5.5 1.38889H1.92857C1.14286 1.38889 0.5 2.01389 0.5 2.77778C0.5 3.54167 1.14286 4.16667 1.92857 4.16667H19.0714C19.8571 4.16667 20.5 3.54167 20.5 2.77778C20.5 2.01389 19.8571 1.38889 19.0714 1.38889H15.5Z"
                  fill="#BD1E08"
                />
              </svg>
            </IconButton>
            <IconButton edge="end" aria-label="arrow" onClick={onClickPermisson ? handleClick : undefined}>
              <ArrowForwardIos />
            </IconButton>
          </>
        }
      >
        <ListItemText primary={date} className="list-item-text-date" />
        <ListItemText primary={exam} className="list-item-text-exam" />
      </ListItem>
    </div>
  );
}
