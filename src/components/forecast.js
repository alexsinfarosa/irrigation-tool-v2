import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";

import { weatherIcons } from "../utils/weatherIcons";
import format from "date-fns/format";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles(theme => ({
  root: {
    display: "grid",
    gridTemplateRows: "80px auto",
    height: "100vh"
  },
  header: {
    display: "grid",
    gridTemplateColumns: "auto 1fr auto",
    alignItems: "center",
    justifyItems: "center",
    padding: theme.spacing(0, 4)
  },
  main: {
    overflow: "auto",
    height: "calc(100vh - 80px)",
    padding: theme.spacing(0, 4)
  },
  forecastRow: {
    display: "flex",
    justifyContent: "space-between",
    // height: 50,
    alignItems: "center"
  }
}));

const Forecast = ({ setMainPageIdx, forecast, address }) => {
  console.log("Forecast");
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      {forecast && (
        <div className={classes.root}>
          <header className={classes.header}>
            <FontAwesomeIcon icon="grip-horizontal" size="lg" color="#fafafa" />
            <FontAwesomeIcon
              icon="cloud-sun"
              size="2x"
              color={theme.palette.secondary.main}
            />
            <FontAwesomeIcon
              icon="home"
              size="lg"
              onClick={() => setMainPageIdx(1)}
            />
          </header>

          <main className={classes.main}>
            <Typography
              variant="h6"
              align="center"
              style={{ margin: theme.spacing(2, 0) }}
            >
              {address}
            </Typography>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: theme.spacing(2, 4)
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignitems: "baseline",
                    height: 60
                  }}
                >
                  <img
                    src={weatherIcons[forecast.daily.data[0].icon]}
                    alt="daily forecast icon"
                    style={{
                      width: 60,
                      height: 60,
                      marginRight: 8
                    }}
                  />
                </div>
                <Typography variant="h3">
                  {Math.round(forecast.currently.temperature, 2)}˚
                </Typography>
              </div>
              <Typography variant="caption">
                {forecast.currently.summary}
              </Typography>
            </div>

            <div
              style={{
                margin: theme.spacing(0, -4, 4, -4)
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                color="primary"
                style={{
                  fontWeight: "bold",
                  color: "#fff",
                  background: theme.palette.secondary.light,
                  padding: theme.spacing(0, 4, 0, 4)
                }}
              >
                Next 7 Days
              </Typography>
              <Typography
                variant="caption"
                style={{
                  padding: theme.spacing(0, 4, 0, 4),
                  display: "block"
                }}
              >
                {forecast.daily.summary}
              </Typography>
            </div>

            <div className={classes.forecastList}>
              {forecast.daily.data.map(day => (
                <div key={day.time} className={classes.forecastRow}>
                  <div>
                    <Typography
                      variant="body1"
                      align="left"
                      style={{ width: 40, fontWeight: "bold" }}
                    >
                      {format(new Date(day.time) * 1000, "EEE").toUpperCase()}
                    </Typography>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <FontAwesomeIcon
                        icon="cloud-rain"
                        style={{ marginRight: 4 }}
                        color={theme.palette.text.secondary}
                        size="xs"
                      />
                      <Typography variant="caption" align="left">
                        {`${Math.round(day.precipProbability * 100)}%`}
                      </Typography>
                    </div>
                  </div>

                  <img
                    src={weatherIcons[day.icon]}
                    alt={day.summary}
                    style={{
                      width: 24,
                      marginTop: 21
                    }}
                  />

                  <Typography variant="body1">{`${Math.round(
                    day.temperatureLow,
                    1
                  )}˚`}</Typography>
                  <Typography variant="body1">
                    {`${Math.round(day.temperatureHigh, 1)}˚`}
                  </Typography>
                </div>
              ))}
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default React.memo(Forecast);
