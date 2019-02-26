import React from "react";

import { makeStyles, useTheme } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles(theme => ({
  root: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    columnGap: theme.spacing(2),
    gridTemplateRows: "auto 1fr auto",
    gridTemplateAreas: `
    "topSide topSide"
    "leftSide rightSide"
    "bottomSide bottomSide"
    `,
    height: "100%",
    padding: theme.spacing(2, 4)
  },
  topSide: {
    gridArea: "topSide",
    marginBottom: theme.spacing(3)
    // background: "pink"
  },
  leftSide: {
    gridArea: "leftSide",
    // background: "orange",
    justifySelf: "right",
    alignSelf: "center"
  },
  rightSide: {
    gridArea: "rightSide",
    // background: "tomato",
    justifySelf: "left",
    alignSelf: "center"
  },
  bottomSide: {
    gridArea: "bottomSide",
    marginTop: theme.spacing(3),
    // background: "teal",
    display: "flex",
    flexDirection: "column"
  },
  circle: {
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: 110,
    height: 110
  }
}));
const DayCard = ({ field, day }) => {
  const classes = useStyles();
  const theme = useTheme();

  const [isWater, setIsWater] = React.useState(false);

  return (
    <div className={classes.root}>
      <div className={classes.topSide}>
        <Typography variant="subtitle1" align="center">
          {day.date}
        </Typography>

        <Typography variant="subtitle2" align="center" color="textSecondary">
          {field.address}
        </Typography>
      </div>
      <div className={classes.leftSide}>
        <div className={classes.circle}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <FontAwesomeIcon icon="sun" size="2x" style={{ marginRight: 4 }} />
            <Typography variant="h4">{day.temp}˚</Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: theme.palette.text.secondary
            }}
          >
            <FontAwesomeIcon
              icon="cloud-rain"
              size="lg"
              color="inherit"
              style={{ marginRight: 8 }}
            />
            <Typography variant="body2" className={classes.textParams}>
              {day.pcpn}%
            </Typography>
          </div>
        </div>
      </div>
      <div className={classes.rightSide}>
        <Typography
          variant="caption"
          color={theme.palette.text.secondary}
          style={{ fontSize: "0.6rem" }}
        >
          RECOMMENDATION:
        </Typography>
        {day.shouldWater ? (
          <Typography variant="h6">NO DEFICIT</Typography>
        ) : (
          <Typography variant="h6" color="secondary">
            WATER!
          </Typography>
        )}
      </div>
      <div className={classes.bottomSide}>
        <div style={{ display: "flex" }}>
          <Button
            variant={isWater ? "outlined" : "contained"}
            color="secondary"
            fullWidth
            style={{
              padding: theme.spacing(2),
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              boxShadow: "none",
              borderRight: "none",
              fontSize: "0.8rem"
            }}
            onClick={() => setIsWater(!isWater)}
          >
            I did not water
          </Button>
          <Button
            variant={isWater ? "contained" : "outlined"}
            color="secondary"
            fullWidth
            style={{
              padding: theme.spacing(2),
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              boxShadow: "none",
              borderLeft: "none",
              fontSize: "0.8rem"
            }}
            onClick={() => setIsWater(!isWater)}
          >
            I watered
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DayCard;
