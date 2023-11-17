import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import './ListItem.css';
import { ArrowForwardIos } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/constans';

interface ExamListProps {
  date: string;
  exam: string;
  description: string;
  type: 'pendente' | 'realizado';
  fileImage: string | null;
  filePdf: string | null;
  id: string;
  onClickPermisson: boolean;
  onClick?: () => any;
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
  onClick
}: ExamListProps) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (onClick){
      onClick();
    } else
    navigate(
      type === 'pendente'
        ? ROUTES.EDICAO_EXAMES_PENDENTES()
        : ROUTES.EDICAO_EXAMES_REALIZADOS(),
      { state: { date: date, description: description, id: id, fileImage: fileImage, filePdf: filePdf } }
    );
  };

  const handleClickNull = () => {};

  return (
    <div className="frame" onClick={onClickPermisson ? handleClick : handleClickNull}>
      <ListItem
        key={'key'}
        className="list-item"
        disableGutters
        secondaryAction={
          <IconButton aria-label="arrow">
            <ArrowForwardIos className="" />
          </IconButton>
        }
      >
        <ListItemText
          primary={date}
          className="list-item-text-date"
          sx={{
            '& .MuiTypography-root': {
              fontFamily: 'Poppins',
              color: '#4d4c4c',
              textAlign: 'center',
              width: '62px',
              fontSize: '13px',
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: '150%',
              marginRight: '20px',
            },
          }}
        />
        <ListItemText
          primary={exam}
          className="list-item-text-exam"
          sx={{
            '& .MuiTypography-root': {
              width: '193px',
              fontFamily: 'Poppins',
              color: '#000',
              fontSize: '13px',
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: 'normal',
              overflow: 'hidden',
            },
          }}
        />
      </ListItem>
    </div>
  );
}
