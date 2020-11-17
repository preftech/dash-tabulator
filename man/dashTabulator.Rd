% Auto-generated: do not edit by hand
\name{dashTabulator}

\alias{dashTabulator}

\title{DashTabulator component}

\description{
DashTabulator is an implementation of the React Tabulator from  https://github.com/ngduc/react-tabulator/ and https://github.com/olifolkerd/tabulator. It takes a property, `column`, and `data` displays it in tabulator. The `options` property is passed to Tabulator to perform regular options downloading as xlsx is enabled by default.
}

\usage{
dashTabulator(id=NULL, columns=NULL, data=NULL, options=NULL,
rowClicked=NULL, cellEdited=NULL, dataChanged=NULL,
downloadButtonType=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{columns}{Unnamed list. A label that will be printed when this component is rendered.}

\item{data}{Unnamed list. The value displayed in the input.}

\item{options}{Named list. Tabulator Options}

\item{rowClicked}{Named list. rowClick captures the row that was clicked on}

\item{cellEdited}{Named list. cellEdited captures the cell that was clicked on}

\item{dataChanged}{Unnamed list. dataChanged captures the cell that was clicked on}

\item{downloadButtonType}{Named list. downloadButtonType}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

