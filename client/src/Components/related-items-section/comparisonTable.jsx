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
  const currentItemId = props.currentItemInfo.id;
  const relatedItemId = props.relatedItemInfo.id;


  const columns = [
  { id: 'currentItem', label: props.currentItemInfo.name , minWidth: 30 },
  { id: 'feature', label: '', minWidth: 50 },
  { id: 'relatedItem' , label: props.relatedItemInfo.name , minWidth: 30 },
];

  const featuresList = []

  const currentItemFeaturesList = [];
  for (var i = 0; i < props.currentItemInfo.features.length; i++)  {
    featuresList.push(props.currentItemInfo.features[i].feature + ': ' + props.currentItemInfo.features[i].value);
    currentItemFeaturesList.push(props.currentItemInfo.features[i].feature + ': ' + props.currentItemInfo.features[i].value);
  }

  const relatedItemFeaturesList = [];
  for (var j = 0; j < props.relatedItemInfo.features.length; j++)  {
    if (!featuresList.includes(props.relatedItemInfo.features[j].feature + ': ' + props.relatedItemInfo.features[j].value)) {
      featuresList.push(props.relatedItemInfo.features[j].feature + ': ' + props.relatedItemInfo.features[j].value)
    }
    relatedItemFeaturesList.push(props.relatedItemInfo.features[j].feature + ': ' + props.relatedItemInfo.features[j].value);
  }

  var rows = [];
  var checkA = false;
  var checkB = false;

  for (var k = 0; k < featuresList.length; k++) {

    if (currentItemFeaturesList.includes(featuresList[k])) {
      checkA = true;
    }

    const featureName = featuresList[k];

    if (relatedItemFeaturesList.includes(featuresList[k])) {
      checkB = true;
    }

    rows.push({ currentItem: checkA, feature: featureName, relatedItem: checkB })
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
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {value ? (column.id === 'feature' ? value : <CheckIcon></CheckIcon>) : ''}
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
