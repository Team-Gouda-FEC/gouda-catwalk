import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import CheckIcon from '@material-ui/icons/Check';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function ComparisonTable(props) {
  const classes = useStyles();
  const { currentItemInfo, relatedItemInfo } = props;

  const columns = [
    { id: 'currentItem', label: currentItemInfo.name, minWidth: 30 },
    { id: 'feature', label: '', minWidth: 50 },
    { id: 'relatedItem', label: relatedItemInfo.name, minWidth: 30 },
  ];

  const featuresList = [];

  for (let i = 0; i < currentItemInfo.features.length; i++) {
    featuresList.push(currentItemInfo.features[i].feature);
  }

  const relatedItemFeaturesList = [];
  for (let j = 0; j < relatedItemInfo.features.length; j++) {
    featuresList.push(relatedItemInfo.features[j].feature);
  }

  const featuresSet = new Set(featuresList);
  const uniqueFeatures = Array.from(featuresSet);

  var rows = [];
  var currentItemFeatureValue = null;
  var featureName = null;
  var relatedItemFeatureValue = null;


  for (let k = 0; k < uniqueFeatures.length; k++) {

    const currentItemFeatureObject = currentItemInfo.features.find(({ feature }) => feature === uniqueFeatures[k]);
    if (currentItemFeatureObject === undefined) {
      currentItemFeatureValue = '';
    } else {
      currentItemFeatureValue = currentItemFeatureObject.value;
    }

    const relatedItemFeatureObject = relatedItemInfo.features.find(({ feature }) => feature === uniqueFeatures[k]);
    if (relatedItemFeatureObject === undefined) {
      relatedItemFeatureValue = '';
    } else {
      relatedItemFeatureValue = relatedItemFeatureObject.value;
    }

    rows.push({ currentItem: currentItemFeatureValue, feature: uniqueFeatures[k], relatedItem: relatedItemFeatureValue })
  }

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow hover key={row.code}>
                  {columns.map((column, i) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={i} align={column.align}>
                        {value === null ? <CheckIcon></CheckIcon> : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
