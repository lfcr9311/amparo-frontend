import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import './ListItem.css';
import { ArrowForwardIos } from '@mui/icons-material';

interface ExamListProps {
  date: string;
  exam: string;
}

export default function ExamListItem({ date, exam }: ExamListProps) {
  return (
    <div className="frame">
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
