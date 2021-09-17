% Auto-generated: do not edit by hand
\name{''DashTabulator}

\alias{''DashTabulator}

\title{DashTabulator component}

\description{
DashTabulator is an implementation of the React Tabulator from  https://github.com/ngduc/react-tabulator/ and https://github.com/olifolkerd/tabulator. It takes a property, `column`, and `data` displays it in tabulator. The `options` property is passed to Tabulator to perform regular options downloading as xlsx is enabled by default.
}

\usage{
''DashTabulator(id=NULL, ajaxError=NULL, ajaxRequesting=NULL,
ajaxResponse=NULL, cellClicked=NULL, cellContext=NULL,
cellDblClick=NULL, cellDblTap=NULL, cellEditCancelled=NULL,
cellEdited=NULL, cellEditing=NULL, cellTap=NULL,
cellTapHold=NULL, clearFilterButtonType=NULL,
clipboardCopied=NULL, clipboardPasteError=NULL,
clipboardPasted=NULL, columnMoved=NULL, columnResized=NULL,
columnTitleChanged=NULL, columnVisibilityChanged=NULL,
columns=NULL, data=NULL, dataChanged=NULL,
dataFiltered=NULL, dataFiltering=NULL, dataGrouped=NULL,
dataGrouping=NULL, dataLoaded=NULL, dataLoading=NULL,
dataSorted=NULL, dataSorting=NULL, downloadButtonType=NULL,
downloadComplete=NULL, downloadReady=NULL, groupClick=NULL,
groupContext=NULL, groupDblClick=NULL, groupDblTap=NULL,
groupTap=NULL, groupTapHold=NULL,
groupVisibilityChanged=NULL, headerClick=NULL,
headerContext=NULL, headerDblClick=NULL, headerDblTap=NULL,
headerTap=NULL, headerTapHold=NULL, htmlImported=NULL,
htmlImporting=NULL, initialHeaderFilter=NULL,
localized=NULL, movableRowsReceived=NULL,
movableRowsReceivedFailed=NULL,
movableRowsReceivingStart=NULL,
movableRowsReceivingStop=NULL, movableRowsSendingStart=NULL,
movableRowsSendingStop=NULL, movableRowsSent=NULL,
movableRowsSentFailed=NULL, multiRowsClicked=NULL,
options=NULL, pageLoaded=NULL, renderComplete=NULL,
renderStarted=NULL, rowAdded=NULL, rowClick=NULL,
rowClicked=NULL, rowContext=NULL, rowDblClick=NULL,
rowDblTap=NULL, rowDeleted=NULL, rowDeselected=NULL,
rowMoved=NULL, rowResized=NULL, rowSelected=NULL,
rowSelectionChanged=NULL, rowTap=NULL, rowTapHold=NULL,
rowUpdated=NULL, selectableCheck=NULL, tableBuilding=NULL,
tableBuilt=NULL, theme=NULL, validationFailed=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{ajaxError}{Logical | numeric | character | named list | unnamed list. }

\item{ajaxRequesting}{Logical | numeric | character | named list | unnamed list. }

\item{ajaxResponse}{Logical | numeric | character | named list | unnamed list. }

\item{cellClicked}{Named list. cellClick captures the cell that was clicked on}

\item{cellContext}{Logical | numeric | character | named list | unnamed list. }

\item{cellDblClick}{Logical | numeric | character | named list | unnamed list. }

\item{cellDblTap}{Logical | numeric | character | named list | unnamed list. }

\item{cellEditCancelled}{Logical | numeric | character | named list | unnamed list. }

\item{cellEdited}{Named list. cellEdited captures the cell that was edited}

\item{cellEditing}{Logical | numeric | character | named list | unnamed list. }

\item{cellTap}{Logical | numeric | character | named list | unnamed list. }

\item{cellTapHold}{Logical | numeric | character | named list | unnamed list. }

\item{clearFilterButtonType}{Named list. clearFilterButtonType, takes a css style, text to display on button
e.g.
 clearFilterButtonType = {"css": "btn btn-primary", "text":"Export"}}

\item{clipboardCopied}{Logical | numeric | character | named list | unnamed list. }

\item{clipboardPasteError}{Logical | numeric | character | named list | unnamed list. }

\item{clipboardPasted}{Logical | numeric | character | named list | unnamed list. }

\item{columnMoved}{Logical | numeric | character | named list | unnamed list. }

\item{columnResized}{Logical | numeric | character | named list | unnamed list. }

\item{columnTitleChanged}{Logical | numeric | character | named list | unnamed list. }

\item{columnVisibilityChanged}{Logical | numeric | character | named list | unnamed list. }

\item{columns}{Unnamed list. A label that will be printed when this component is rendered.}

\item{data}{Unnamed list. The value displayed in the input.}

\item{dataChanged}{Unnamed list. dataChanged captures the cell that was clicked on}

\item{dataFiltered}{Named list. dataFiltered based on http://tabulator.info/docs/4.8/callbacks#filter
The dataFiltered callback is triggered after the table dataset is filtered}

\item{dataFiltering}{Unnamed list. dataFiltering based on http://tabulator.info/docs/4.8/callbacks#filter
The dataFiltering callback is triggered whenever a filter event occurs, before the filter happens.}

\item{dataGrouped}{Logical | numeric | character | named list | unnamed list. }

\item{dataGrouping}{Logical | numeric | character | named list | unnamed list. }

\item{dataLoaded}{Logical | numeric | character | named list | unnamed list. }

\item{dataLoading}{Logical | numeric | character | named list | unnamed list. }

\item{dataSorted}{Logical | numeric | character | named list | unnamed list. }

\item{dataSorting}{Logical | numeric | character | named list | unnamed list. }

\item{downloadButtonType}{Named list. downloadButtonType, takes a css style, text to display on button, type is file type to download
e.g.
 downloadButtonType = {"css": "btn btn-primary", "text":"Export", "type":"xlsx"}}

\item{downloadComplete}{Logical | numeric | character | named list | unnamed list. }

\item{downloadReady}{Logical | numeric | character | named list | unnamed list. }

\item{groupClick}{Logical | numeric | character | named list | unnamed list. }

\item{groupContext}{Logical | numeric | character | named list | unnamed list. }

\item{groupDblClick}{Logical | numeric | character | named list | unnamed list. }

\item{groupDblTap}{Logical | numeric | character | named list | unnamed list. }

\item{groupTap}{Logical | numeric | character | named list | unnamed list. }

\item{groupTapHold}{Logical | numeric | character | named list | unnamed list. }

\item{groupVisibilityChanged}{Logical | numeric | character | named list | unnamed list. }

\item{headerClick}{Logical | numeric | character | named list | unnamed list. }

\item{headerContext}{Logical | numeric | character | named list | unnamed list. }

\item{headerDblClick}{Logical | numeric | character | named list | unnamed list. }

\item{headerDblTap}{Logical | numeric | character | named list | unnamed list. }

\item{headerTap}{Logical | numeric | character | named list | unnamed list. }

\item{headerTapHold}{Logical | numeric | character | named list | unnamed list. }

\item{htmlImported}{Logical | numeric | character | named list | unnamed list. }

\item{htmlImporting}{Logical | numeric | character | named list | unnamed list. }

\item{initialHeaderFilter}{Unnamed list. initialHeaderFilter based on http://tabulator.info/docs/4.8/filter#header
can take array of filters}

\item{localized}{Logical | numeric | character | named list | unnamed list. }

\item{movableRowsReceived}{Logical | numeric | character | named list | unnamed list. }

\item{movableRowsReceivedFailed}{Logical | numeric | character | named list | unnamed list. }

\item{movableRowsReceivingStart}{Logical | numeric | character | named list | unnamed list. }

\item{movableRowsReceivingStop}{Logical | numeric | character | named list | unnamed list. }

\item{movableRowsSendingStart}{Logical | numeric | character | named list | unnamed list. }

\item{movableRowsSendingStop}{Logical | numeric | character | named list | unnamed list. }

\item{movableRowsSent}{Logical | numeric | character | named list | unnamed list. }

\item{movableRowsSentFailed}{Logical | numeric | character | named list | unnamed list. }

\item{multiRowsClicked}{Unnamed list. multiRowsClicked, when multiple rows are clicked}

\item{options}{Named list. Tabulator Options}

\item{pageLoaded}{Logical | numeric | character | named list | unnamed list. }

\item{renderComplete}{Logical | numeric | character | named list | unnamed list. }

\item{renderStarted}{Logical | numeric | character | named list | unnamed list. }

\item{rowAdded}{Logical | numeric | character | named list | unnamed list. }

\item{rowClick}{Logical | numeric | character | named list | unnamed list. standard props not used by dash-tabulator directly
can be used as part of custom javascript implementations}

\item{rowClicked}{Named list. rowClick captures the row that was clicked on}

\item{rowContext}{Logical | numeric | character | named list | unnamed list. }

\item{rowDblClick}{Logical | numeric | character | named list | unnamed list. }

\item{rowDblTap}{Logical | numeric | character | named list | unnamed list. }

\item{rowDeleted}{Logical | numeric | character | named list | unnamed list. }

\item{rowDeselected}{Logical | numeric | character | named list | unnamed list. }

\item{rowMoved}{Logical | numeric | character | named list | unnamed list. }

\item{rowResized}{Logical | numeric | character | named list | unnamed list. }

\item{rowSelected}{Logical | numeric | character | named list | unnamed list. }

\item{rowSelectionChanged}{Logical | numeric | character | named list | unnamed list. }

\item{rowTap}{Logical | numeric | character | named list | unnamed list. }

\item{rowTapHold}{Logical | numeric | character | named list | unnamed list. }

\item{rowUpdated}{Logical | numeric | character | named list | unnamed list. }

\item{selectableCheck}{Logical | numeric | character | named list | unnamed list. }

\item{tableBuilding}{Logical | numeric | character | named list | unnamed list. }

\item{tableBuilt}{Logical | numeric | character | named list | unnamed list. }

\item{theme}{Character. theme}

\item{validationFailed}{Logical | numeric | character | named list | unnamed list. }
}

\value{named list of JSON elements corresponding to React.js properties and their values}

