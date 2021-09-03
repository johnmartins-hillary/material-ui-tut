import React from "react";
import { IconButton, CardHeader, CardContent, Card, Typography, makeStyles, Avatar } from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";
import {blue, green, yellow, pink} from "@material-ui/core/colors"

const useStyles = makeStyles({
    avatar: {
       backgroundColor: (note) => {
           if(note.category == "work") {
               return yellow[700]
           }
           if(note.category == "money") {
               return green[500]
           }
           if(note.category == "todos") {
               return pink[500]
           }
           return blue[500]
       }
        }
    
})

function NoteCard({ note, handleDelete }) {
    const classes = useStyles(note)

  return (
    <div>
      <Card elevation={1} className={classes.test}>
          <CardHeader 
          avatar={
              <Avatar className={classes.avatar}>{note.category[0].toUpperCase()}</Avatar>
          }
            action={
                <IconButton onClick={() => handleDelete(note.id)}>
                    <DeleteOutlined />
                </IconButton>
            }
            title={note.title}
            subheader={note.category}
          />
          <cardContent>
              <Typography variant="body2" color="textSecondary">
                {note.details}
              </Typography>
          </cardContent>
      </Card>
    </div>
  );
}

export default NoteCard;
